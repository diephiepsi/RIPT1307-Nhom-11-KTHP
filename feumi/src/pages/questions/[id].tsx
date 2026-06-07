import { App, Avatar, Button, Card, Input, List, Space, Tag, Typography } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'umi';
import { questionsService } from '../../services/questions';
import type { CommentItem, QuestionDetail } from '../../models/qa';

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function QuestionDetailPage() {
  const { id = '' } = useParams<{ id: string }>();
  const { message } = App.useApp();
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState<QuestionDetail | null>(null);
  const [answer, setAnswer] = useState('');

  const load = async () => {
    if (!id) return;
    setLoading(true);
    try {
      const detail = await questionsService.detail(id);
      setQuestion(detail);
      await questionsService.view(id);
    } catch (error) {
      console.error(error);
      message.success('Chờ duyệt bài');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, [id]);

  const commentNodes = useMemo(() => question?.comments ?? [], [question]);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 24 }}>
      <Card loading={loading} style={{ borderRadius: 18 }}>
        <Title level={3}>{question?.title || '...'}</Title>
        <Space wrap style={{ marginBottom: 16 }}>
          {question?.tags.map((tag) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </Space>
        <div style={{ marginBottom: 24, whiteSpace: 'pre-wrap', color: '#323232' }}>
          {question?.content}
        </div>
        <Space style={{ marginBottom: 24 }}>
          <Text type="secondary">{question?.author.fullName}</Text>
          <Text type="secondary">• {question ? new Date(question.createdAt).toLocaleDateString('vi-VN') : ''}</Text>
        </Space>
        <Card title="Bình luận" style={{ borderRadius: 16 }}>
          <List
            dataSource={commentNodes}
            locale={{ emptyText: 'Chưa có bình luận' }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar>{item.author.fullName.charAt(0).toUpperCase()}</Avatar>}
                  title={
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>{item.author.fullName}</span>
                      <span style={{ fontSize: '12px', color: '#999', fontWeight: 'normal' }}>
                        {new Date(item.createdAt).toLocaleString('vi-VN')}
                      </span>
                    </div>
                  }
                  description={<p style={{ color: '#333', marginTop: 8 }}>{item.content}</p>}
                />
              </List.Item>
            )}
          />
        </Card>
        <Card title="Thêm bình luận" style={{ marginTop: 24, borderRadius: 18 }}>
          <TextArea rows={4} value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Viết bình luận..." />
          <Button
            type="primary"
            style={{ marginTop: 16 }}
            onClick={async () => {
              if (!id || !answer.trim()) return;
              try {
                await questionsService.addComment(id, { content: answer.trim() });
                setAnswer('');
                await load();
                message.success('Đã gửi bình luận');
              } catch {
                message.error('Gửi bình luận thất bại');
              }
            }}
          >
            Gửi bình luận
          </Button>
        </Card>
      </Card>
    </div>
  );
}
