import { App, Button, Card, Descriptions, Divider, Input, Space, Tag, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { QuestionDetail } from '../../models/qa';
import { questionsService } from '../../services/questions';
import { useAppSelector } from '../../store/hooks';

function VoteButtons({ onVote }: { onVote: (v: -1 | 0 | 1) => void }) {
  return (
    <Space>
      <Button onClick={() => onVote(1)}>+1</Button>
      <Button onClick={() => onVote(-1)}>-1</Button>
      <Button onClick={() => onVote(0)}>Bỏ vote</Button>
    </Space>
  );
}

export function QuestionDetailPage() {
  const { id } = useParams();
  const { message } = App.useApp();
  const { token } = useAppSelector((s) => s.auth);
  const [data, setData] = useState<QuestionDetail | null>(null);
  const [comment, setComment] = useState('');

  const load = async () => {
    if (!id) return;
    try {
      setData(await questionsService.get(id));
    } catch {
      message.error('Không tải được chi tiết câu hỏi');
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!data) return null;

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Typography.Title level={3} style={{ margin: 0 }}>
        {data.title}
      </Typography.Title>

      <Card>
        <Descriptions
          bordered
          size="small"
          items={[
            { key: 'author', label: 'Tác giả', children: `${data.author.fullName} (${data.author.role})` },
            { key: 'createdAt', label: 'Ngày', children: data.createdAt },
            { key: 'score', label: 'Điểm', children: data.votes.score },
            {
              key: 'tags',
              label: 'Tag',
              children: (
                <Space wrap>
                  {data.tags.map((t) => (
                    <Tag key={t.id} color="blue">
                      {t.name}
                    </Tag>
                  ))}
                </Space>
              ),
            },
          ]}
        />

        <Divider />
        <div dangerouslySetInnerHTML={{ __html: data.content }} />

        <Divider />
        <VoteButtons
          onVote={async (v) => {
            try {
              await questionsService.voteQuestion(data.id, v);
              await load();
              message.success('Đã cập nhật vote');
            } catch {
              message.error('Vote thất bại');
            }
          }}
        />
      </Card>

      <Card title={`Bình luận (${data.comments.length})`}>
        <Space direction="vertical" style={{ width: '100%' }}>
          {data.comments.map((c) => (
            <Card key={c.id} size="small">
              <Space direction="vertical" style={{ width: '100%' }}>
                <Space style={{ justifyContent: 'space-between', width: '100%' }}>
                  <Typography.Text strong>
                    {c.author.fullName} ({c.author.role})
                  </Typography.Text>
                  <Typography.Text type="secondary">
                    Điểm: {c.votes.score} • {c.createdAt}
                  </Typography.Text>
                </Space>
                <div>{c.content}</div>
                <VoteButtons
                  onVote={async (v) => {
                    try {
                      await questionsService.voteComment(c.id, v);
                      await load();
                      message.success('Đã cập nhật vote bình luận');
                    } catch {
                      message.error('Vote bình luận thất bại');
                    }
                  }}
                />
              </Space>
            </Card>
          ))}

          <Divider />
          <Input.TextArea
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={token ? 'Viết bình luận...' : 'Bạn cần đăng nhập để bình luận'}
            disabled={!token}
          />
          <Button
            type="primary"
            disabled={!token || !comment.trim()}
            onClick={async () => {
              if (!id) return;
              try {
                await questionsService.addComment(id, { content: comment.trim() });
                setComment('');
                await load();
                message.success('Đã thêm bình luận');
              } catch {
                message.error('Thêm bình luận thất bại');
              }
            }}
          >
            Gửi bình luận
          </Button>
        </Space>
      </Card>
    </Space>
  );
}

