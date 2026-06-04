import {
  App,
  Avatar,
  Badge,
  Button,
  Card,
  Empty,
  Input,
  Progress,
  Select,
  Space,
  Spin,
  Statistic,
  Tag as AntTag,
  Tooltip,
  Typography,
} from "antd";
import {
  BookOutlined,
  DislikeFilled,
  EyeOutlined,
  FireOutlined,
  LikeFilled,
  MessageOutlined,
  PlusOutlined,
  SearchOutlined,
  StarFilled,
} from "@ant-design/icons";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { QuestionListItem, Tag } from "../../models/qa";
import {
  questionsService,
  type QuestionSort,
  type QuestionStatus,
} from "../../services/questions";

const { Title, Text, Paragraph } = Typography;

const getLikes = (q: QuestionListItem) =>
  q.likesCount ?? q.votes?.likesCount ?? q.votes?.up ?? 0;

const getDislikes = (q: QuestionListItem) =>
  q.dislikesCount ?? q.votes?.dislikesCount ?? q.votes?.down ?? 0;

const getAnswers = (q: QuestionListItem) =>
  q.answersCount ?? q.commentsCount ?? 0;

const getViews = (q: QuestionListItem) => q.viewsCount ?? 0;

const timeText = (date: string) => new Date(date).toLocaleDateString("vi-VN");

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #f3f7ff 0%, #f8fafc 42%, #ffffff 100%)",
  padding: "28px 20px 48px",
};

const containerStyle: React.CSSProperties = {
  maxWidth: 1180,
  margin: "0 auto",
};

const heroStyle: React.CSSProperties = {
  border: "1px solid #e6eefc",
  borderRadius: 24,
  padding: 28,
  marginBottom: 20,
  background:
    "linear-gradient(135deg, rgba(22,119,255,0.96), rgba(64,169,255,0.9))",
  boxShadow: "0 18px 45px rgba(24, 144, 255, 0.18)",
  color: "#fff",
};

const filterCardStyle: React.CSSProperties = {
  borderRadius: 20,
  border: "1px solid #edf1f7",
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.06)",
  marginBottom: 18,
};

const questionCardStyle: React.CSSProperties = {
  borderRadius: 20,
  border: "1px solid #edf1f7",
  boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
  marginBottom: 14,
  overflow: "hidden",
};

const statBoxStyle: React.CSSProperties = {
  minWidth: 74,
  padding: "10px 8px",
  borderRadius: 16,
  background: "#f8fafc",
  textAlign: "center",
  border: "1px solid #eef2f7",
};

const sideCardStyle: React.CSSProperties = {
  borderRadius: 20,
  border: "1px solid #edf1f7",
  boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
  marginBottom: 16,
};

export function QuestionsPage() {
  const { message } = App.useApp();
  const nav = useNavigate();

  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<QuestionListItem[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | undefined>();
  const [sort, setSort] = useState<QuestionSort>("hot");
  const [status, setStatus] = useState<QuestionStatus>("all");
  const [bookmarked, setBookmarked] = useState(false);

  const stats = useMemo(() => {
    const totalLikes = rows.reduce((sum, item) => sum + getLikes(item), 0);
    const totalAnswers = rows.reduce((sum, item) => sum + getAnswers(item), 0);
    const totalViews = rows.reduce((sum, item) => sum + getViews(item), 0);

    return {
      total: rows.length,
      totalLikes,
      totalAnswers,
      totalViews,
    };
  }, [rows]);

  const load = async () => {
    setLoading(true);

    try {
      const data = await questionsService.list({
        q: q.trim() || undefined,
        tag,
        sort,
        status,
        bookmarked: bookmarked || undefined,
      });

      setRows(data);
    } catch {
      message.error("Không tải được danh sách câu hỏi");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    questionsService
      .tags()
      .then(setTags)
      .catch(() => void 0);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => void load(), 250);
    return () => window.clearTimeout(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, tag, sort, status, bookmarked]);

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <section style={heroStyle}>
          <Space direction="vertical" size={16} style={{ width: "100%" }}>
            <Badge
              color="#fff"
              text={
                <span style={{ color: "#fff", fontWeight: 700 }}>
                  UniBrain Q&A
                </span>
              }
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 18,
                flexWrap: "wrap",
                alignItems: "flex-end",
              }}
            >
              <div style={{ maxWidth: 680 }}>
                <Title
                  level={1}
                  style={{
                    color: "#fff",
                    margin: 0,
                    fontSize: 38,
                    lineHeight: 1.15,
                  }}
                >
                  Hỏi đáp học thuật thông minh
                </Title>

                <Paragraph
                  style={{
                    color: "rgba(255,255,255,0.88)",
                    margin: "12px 0 0",
                    fontSize: 16,
                  }}
                >
                  Tìm câu hỏi, lọc theo tag, xem lượt like, dislike, trả lời và
                  lượt xem thật từ backend.
                </Paragraph>
              </div>

              <Button
                size="large"
                icon={<PlusOutlined />}
                onClick={() => nav("/ask")}
                style={{
                  height: 46,
                  borderRadius: 14,
                  fontWeight: 700,
                  color: "#1677ff",
                }}
              >
                Đặt câu hỏi
              </Button>
            </div>

            <Input
              size="large"
              allowClear
              prefix={<SearchOutlined />}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Tìm React, MySQL, thuật toán..."
              style={{
                height: 48,
                borderRadius: 16,
                border: "none",
                boxShadow: "0 10px 28px rgba(0,0,0,0.12)",
              }}
            />
          </Space>
        </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) 300px",
            gap: 18,
            alignItems: "start",
          }}
        >
          <main>
            <Card style={filterCardStyle} styles={{ body: { padding: 16 } }}>
              <Space size={10} wrap>
                <Select
                  style={{ minWidth: 170 }}
                  value={sort}
                  onChange={setSort}
                  options={[
                    { label: "Đang hot", value: "hot" },
                    { label: "Mới nhất", value: "newest" },
                    { label: "Cũ nhất", value: "oldest" },
                    { label: "Nhiều like", value: "likes" },
                    { label: "Nhiều trả lời", value: "answers" },
                    { label: "Nhiều lượt xem", value: "views" },
                  ]}
                />

                <Select
                  style={{ minWidth: 170 }}
                  value={status}
                  onChange={setStatus}
                  options={[
                    { label: "Tất cả", value: "all" },
                    { label: "Đã có trả lời", value: "answered" },
                    { label: "Chưa có trả lời", value: "unanswered" },
                  ]}
                />

                <Select
                  allowClear
                  showSearch
                  style={{ minWidth: 190 }}
                  placeholder="Lọc theo tag"
                  value={tag}
                  onChange={setTag}
                  options={tags.map((t) => ({
                    label: t.name,
                    value: t.name,
                  }))}
                />

                <Button
                  type={bookmarked ? "primary" : "default"}
                  icon={<BookOutlined />}
                  onClick={() => setBookmarked((v) => !v)}
                  style={{ borderRadius: 10 }}
                >
                  Đã lưu
                </Button>
              </Space>
            </Card>

            <Spin spinning={loading}>
              {rows.length === 0 ? (
                <Card style={questionCardStyle}>
                  <Empty description="Chưa có câu hỏi phù hợp" />
                </Card>
              ) : (
                rows.map((item) => {
                  const likes = getLikes(item);
                  const dislikes = getDislikes(item);
                  const answers = getAnswers(item);
                  const views = getViews(item);
                  const total = Math.max(1, likes + dislikes);
                  const likePercent = Math.round((likes / total) * 100);
                  const hot =
                    (item.hotScore ?? 0) >= 8 || likes >= 5 || answers >= 3;

                  return (
                    <Card
                      key={item.id}
                      style={questionCardStyle}
                      styles={{ body: { padding: 18 } }}
                      hoverable
                    >
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "92px minmax(0, 1fr)",
                          gap: 16,
                        }}
                      >
                        <div>
                          <Space direction="vertical" size={8}>
                            <Tooltip title="Like">
                              <div style={statBoxStyle}>
                                <LikeFilled style={{ color: "#1677ff" }} />
                                <div style={{ fontWeight: 800 }}>{likes}</div>
                              </div>
                            </Tooltip>

                            <Tooltip title="Dislike">
                              <div style={statBoxStyle}>
                                <DislikeFilled style={{ color: "#ff4d4f" }} />
                                <div style={{ fontWeight: 800 }}>
                                  {dislikes}
                                </div>
                              </div>
                            </Tooltip>
                          </Space>
                        </div>

                        <div style={{ minWidth: 0 }}>
                          <Space size={8} wrap style={{ marginBottom: 8 }}>
                            {hot && (
                              <AntTag color="volcano" icon={<FireOutlined />}>
                                Hot
                              </AntTag>
                            )}

                            {item.isBookmarked && (
                              <AntTag color="gold" icon={<StarFilled />}>
                                Đã lưu
                              </AntTag>
                            )}

                            <AntTag color={answers > 0 ? "green" : "default"}>
                              {answers > 0 ? "Đã trả lời" : "Chưa trả lời"}
                            </AntTag>
                          </Space>

                          <Title level={4} style={{ margin: "0 0 8px" }}>
                            <Link
                              to={`/questions/${item.id}`}
                              style={{ color: "#0f172a" }}
                            >
                              {item.title}
                            </Link>
                          </Title>

                          <Space
                            size={10}
                            wrap
                            style={{ color: "#64748b", marginBottom: 12 }}
                          >
                            <Avatar size={26}>
                              {item.author?.fullName?.[0] ?? "U"}
                            </Avatar>
                            <Text type="secondary">
                              {item.author?.fullName || "Người dùng"} •{" "}
                              {timeText(item.createdAt)}
                            </Text>
                          </Space>

                          <div style={{ marginBottom: 12 }}>
                            {item.tags?.map((t) => (
                              <AntTag
                                key={t.id || t.name}
                                onClick={() => setTag(t.name)}
                                style={{
                                  borderRadius: 999,
                                  cursor: "pointer",
                                  marginBottom: 6,
                                }}
                              >
                                {t.name}
                              </AntTag>
                            ))}
                          </div>

                          <Progress
                            percent={likePercent}
                            size="small"
                            status={dislikes > likes ? "exception" : "active"}
                            showInfo={false}
                          />

                          <Space
                            size={18}
                            wrap
                            style={{
                              marginTop: 10,
                              color: "#64748b",
                              fontSize: 13,
                            }}
                          >
                            <span>
                              <MessageOutlined /> {answers} trả lời
                            </span>
                            <span>
                              <EyeOutlined /> {views} lượt xem
                            </span>
                            <span>{likes} Like</span>
                            <span>{dislikes} Dislike</span>
                          </Space>
                        </div>
                      </div>
                    </Card>
                  );
                })
              )}
            </Spin>
          </main>

          <aside>
            <Card style={sideCardStyle}>
              <Space direction="vertical" size={14} style={{ width: "100%" }}>
                <Title level={4} style={{ margin: 0 }}>
                  Tổng quan
                </Title>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                  }}
                >
                  <Statistic title="Câu hỏi" value={stats.total} />
                  <Statistic title="Like" value={stats.totalLikes} />
                  <Statistic title="Trả lời" value={stats.totalAnswers} />
                  <Statistic title="Lượt xem" value={stats.totalViews} />
                </div>
              </Space>
            </Card>

            <Card style={sideCardStyle}>
              <Title level={4} style={{ marginTop: 0 }}>
                Tag phổ biến
              </Title>

              <Space size={[6, 8]} wrap>
                {tags.slice(0, 18).map((t) => (
                  <AntTag
                    key={t.id || t.name}
                    onClick={() => setTag(t.name)}
                    style={{
                      borderRadius: 999,
                      padding: "4px 10px",
                      cursor: "pointer",
                    }}
                  >
                    {t.name}
                  </AntTag>
                ))}
              </Space>
            </Card>

            <Card style={sideCardStyle}>
              <Title level={4} style={{ marginTop: 0 }}>
                Gợi ý
              </Title>

              <Space direction="vertical">
                <Text type="secondary">
                  Viết tiêu đề rõ lỗi, ví dụ: “React không render sau khi gọi
                  API”.
                </Text>
                <Text type="secondary">
                  Nên thêm tag để người khác tìm và trả lời nhanh hơn.
                </Text>
              </Space>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
}
