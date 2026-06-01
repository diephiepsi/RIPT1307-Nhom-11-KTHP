import { App, Button, Space, Table, Typography } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { api } from '../../services/api';

type AdminPostRow = {
  id: string;
  title: string;
  createdAt: string;
  authorName: string;
  score: number;
};

export function AdminPostsPage() {
  const { message, modal } = App.useApp();
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<AdminPostRow[]>([]);

  const load = async () => {
    setLoading(true);
    try {
      const { data } = await api.get<AdminPostRow[]>('/admin/posts');
      setRows(data);
    } catch {
      message.error('Không tải được danh sách bài');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const columns = useMemo(
    () => [
      { title: 'Tiêu đề', dataIndex: 'title' },
      { title: 'Tác giả', dataIndex: 'authorName' },
      { title: 'Điểm', dataIndex: 'score' },
      { title: 'Ngày', dataIndex: 'createdAt' },
      {
        title: 'Thao tác',
        render: (_: unknown, r: AdminPostRow) => (
          <Space>
            <Button
              danger
              onClick={() => {
                modal.confirm({
                  title: 'Xóa bài?',
                  content: 'Thao tác này không thể hoàn tác.',
                  okText: 'Xóa',
                  cancelText: 'Hủy',
                  okButtonProps: { danger: true },
                  onOk: async () => {
                    try {
                      await api.delete(`/admin/posts/${r.id}`);
                      message.success('Đã xóa bài');
                      await load();
                    } catch {
                      message.error('Xóa bài thất bại');
                    }
                  },
                });
              }}
            >
              Xóa
            </Button>
          </Space>
        ),
      },
    ],
    [message, modal],
  );

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Typography.Title level={3} style={{ margin: 0 }}>
        Quản trị bài đăng
      </Typography.Title>
      <Table rowKey="id" loading={loading} columns={columns} dataSource={rows} />
    </Space>
  );
}

