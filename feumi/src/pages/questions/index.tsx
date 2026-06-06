import { App, Avatar, Button, Card, Input, List, Select, Space, Tag, Typography } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'umi';
import { questionsService, type QuestionSort, type QuestionStatus } from '../../services/questions';
import type { QuestionListItem, Tag as TagModel } from '../../models/qa';
import { history } from 'umi';
import {
  ClockCircleOutlined,
  FireOutlined,
  MessageOutlined,
  EyeOutlined,
  LikeOutlined,
  CalendarOutlined,
  QuestionCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

export default function QuestionsPage() {
  const { message } = App.useApp();
  const [items, setItems] = useState<QuestionListItem[]>([]);
  const [tags, setTags] = useState<TagModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState<string | undefined>();
  const [sort, setSort] = useState<QuestionSort>('hot');
  const [status, setStatus] = useState<QuestionStatus>('all');

  const load = async () => {
    setLoading(true);
    try {
      const data = await questionsService.list({ q: query || undefined, tag, sort, status });
      setItems(data);
    } catch (error) {
      message.error('Không tải được danh sách câu hỏi');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void questionsService.tags().then(setTags).catch(() => undefined);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(load, 250);
    return () => window.clearTimeout(timer);
  }, [query, tag, sort, status]);

  const sortOptions = useMemo(
    () => [
      { label: <span><FireOutlined /> Nổi bật</span>, value: 'hot' },
      { label: <span><ClockCircleOutlined /> Mới nhất</span>, value: 'newest' },
      { label: <span><CalendarOutlined /> Cũ nhất</span>, value: 'oldest' },
      { label: <span><LikeOutlined /> Nhiều thích</span>, value: 'likes' },
      { label: <span><MessageOutlined /> Nhiều trả lời</span>, value: 'answers' },
      { label: <span><EyeOutlined /> Nhiều xem</span>, value: 'views' },
    ],
    [],
  );

  const statusOptions = useMemo(
    () => [
      { label: <span><QuestionCircleOutlined /> Tất cả</span>, value: 'all' },
      { label: <span><CheckCircleOutlined /> Đã trả lời</span>, value: 'answered' },
      { label: <span><ClockCircleOutlined /> Chưa trả lời</span>, value: 'unanswered' },
    ],
    [],
  );

  return (
    <div style={{ maxWidth: 1080, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <Title level={3} style={{ margin: 0 }}>Cộng đồng Hỏi đáp</Title>
          <Text type="secondary">Tìm câu hỏi, thảo luận và chia sẻ kiến thức</Text>
        </div>
        <Button type="primary" onClick={() => history.push('/ask')}>Đặt câu hỏi mới</Button>
      </div>
      <Card style={{ marginBottom: 24, borderRadius: 18 }}>
        <Space wrap style={{ width: '100%' }}>
          <Input.Search
            placeholder="Tìm câu hỏi..."
            allowClear
            enterButton="Tìm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Select
            style={{ minWidth: 180 }}
            placeholder="Tag"
            value={tag}
            onChange={(value) => setTag(value)}
            allowClear
            options={tags.map((t) => ({ label: t.name, value: t.name }))}
          />
          <Select style={{ minWidth: 180 }} value={sort} onChange={(value) => setSort(value)} options={sortOptions} />
          <Select style={{ minWidth: 180 }} value={status} onChange={(value) => setStatus(value)} options={statusOptions} />
        </Space>
      </Card>
      <List
        loading={loading}
        dataSource={items}
        bordered
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{item.author.fullName.charAt(0).toUpperCase()}</Avatar>}
              title={<Link to={`/questions/${item.id}`}>{item.title}</Link>}
              description={
                <div>
                  <Space size="small">
                    <Text type="secondary">{item.author.fullName}</Text>
                    <Text type="secondary">• {new Date(item.createdAt).toLocaleDateString('vi-VN')}</Text>
                    {item.tags.map((tagItem) => (
                      <Tag key={tagItem.id}>{tagItem.name}</Tag>
                    ))}
                  </Space>
                </div>
              }
            />
            <div style={{ textAlign: 'right' }}>
              <div><Text strong>{item.votes.likesCount ?? 0}</Text> 👍</div>
              <div><Text strong>{item.answersCount}</Text> trả lời</div>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
