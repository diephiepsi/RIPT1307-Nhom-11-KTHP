import { App, Button, Form, Input, Modal, Space, Switch, Table, Typography } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { api } from '../../services/api';

type AdminUserRow = {
  id: string;
  email: string;
  fullName: string;
  role: 'STUDENT' | 'LECTURER' | 'ADMIN';
  locked: boolean;
  createdAt: string;
};

export function AdminUsersPage() {
  const { message } = App.useApp();
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<AdminUserRow[]>([]);
  const [open, setOpen] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const { data } = await api.get<AdminUserRow[]>('/admin/users');
      setRows(data);
    } catch {
      message.error('Không tải được danh sách user');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
  }, []);

  const columns = useMemo(
    () => [
      { title: 'Email', dataIndex: 'email' },
      { title: 'Họ tên', dataIndex: 'fullName' },
      { title: 'Vai trò', dataIndex: 'role' },
      { title: 'Ngày tạo', dataIndex: 'createdAt' },
      {
        title: 'Khóa',
        render: (_: unknown, r: AdminUserRow) => (
          <Switch
            checked={r.locked}
            onChange={async (checked) => {
              try {
                await api.patch(`/admin/users/${r.id}`, { locked: checked });
                message.success('Đã cập nhật trạng thái khóa');
                await load();
              } catch {
                message.error('Cập nhật thất bại');
              }
            }}
          />
        ),
      },
      {
        title: 'Reset mật khẩu',
        render: (_: unknown, r: AdminUserRow) => (
          <Button
            onClick={async () => {
              try {
                await api.post(`/admin/users/${r.id}/reset-password`);
                message.success('Đã reset mật khẩu (mật khẩu mới gửi email)');
              } catch {
                message.error('Reset mật khẩu thất bại');
              }
            }}
          >
            Reset
          </Button>
        ),
      },
    ],
    [message],
  );

  return (
    <Space direction="vertical" style={{ width: '100%' }} size="large">
      <Space style={{ width: '100%', justifyContent: 'space-between' }}>
        <Typography.Title level={3} style={{ margin: 0 }}>
          Quản trị người dùng
        </Typography.Title>
        <Button type="primary" onClick={() => setOpen(true)}>
          Thêm user
        </Button>
      </Space>

      <Table rowKey="id" loading={loading} columns={columns} dataSource={rows} />

      <Modal title="Thêm người dùng" open={open} onCancel={() => setOpen(false)} footer={null} destroyOnClose>
        <Form
          layout="vertical"
          onFinish={async (values) => {
            try {
              await api.post('/admin/users', values);
              message.success('Đã thêm user');
              setOpen(false);
              await load();
            } catch {
              message.error('Thêm user thất bại');
            }
          }}
        >
          <Form.Item name="fullName" label="Họ tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, min: 6 }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="role" label="Vai trò" rules={[{ required: true }]}>
            <Input placeholder="STUDENT | LECTURER | ADMIN" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Tạo user
          </Button>
        </Form>
      </Modal>
    </Space>
  );
}

