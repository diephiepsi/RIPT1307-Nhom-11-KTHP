import { App, Card, Input, Select, Space, Table, Tag as AntTag, Typography } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { QuestionListItem, Tag } from '../../models/qa';
import { questionsService } from '../../services/questions';

export function QuestionsPage() {
  const { message } = App.useApp();
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<QuestionListItem[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [q, setQ] = useState('');
  const [tag, setTag] = useState<string | undefined>(undefined);

  useEffect(() => {
    questionsService
      .tags()
      .then(setTags)
      .catch(() => void 0);
  }, []);

  const load = async () => {
    setLoading(true);
    try {
      const data = await questionsService.list({ q: q || undefined, tag });
      setRows(data);
    } catch {
      message.error('Không tải được danh sách câu hỏi');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);

  const columns = useMemo(
    () => [
      {
        title: 'Tiêu đề',
        dataIndex: 'title',
        render: (_: unknown, r: QuestionListItem) => <Link to={`/questions/${r.id}`}>{r.title}</Link>,
      },
      {
        title: 'Tag',
        dataIndex: 'tags',
        render: (_: unknown, r: QuestionListItem) =>
          r.tags.map((t) => (
            <AntTag key={t.id} color="blue">
              {t.name}
            </AntTag>
          )),
      },
      { title: 'Điểm', dataIndex: ['votes', 'score'] as never },
      { title: 'Trả lời', dataIndex: 'answersCount' },
      { title: 'Tác giả', dataIndex: ['author', 'fullName'] as never },
      { title: 'Ngày', dataIndex: 'createdAt' },
    ],
    [],
  );

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Typography.Title level={3} style={{ margin: 0 }}>
        Câu hỏi
      </Typography.Title>

      <Card>
        <Space wrap>
          <Input.Search
            placeholder="Tìm theo từ khóa..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onSearch={() => void load()}
            style={{ width: 320 }}
          />
          <Select
            allowClear
            placeholder="Lọc theo tag"
            value={tag}
            onChange={(v) => setTag(v)}
            options={tags.map((t) => ({ label: t.name, value: t.name }))}
            style={{ width: 240 }}
          />
        </Space>
      </Card>

      <Table<QuestionListItem>
        rowKey="id"
        loading={loading}
        columns={columns}
        dataSource={rows}
        pagination={{ pageSize: 10 }}
      />
    </Space>
  );
}

