import { App, Button, Form, Input, Modal, Popconfirm, Select, Space, Switch, Table, Typography } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { adminService } from '../../services/admin';

type AdminUserRow = {
  id: string;
  email: string;
  fullName: string;
  role: 'STUDENT' | 'LECTURER' | 'ADMIN';
  locked: boolean;
  createdAt: string;
};

export default function AdminUsersPage() {
  const { message } = App.useApp();
  const [rows, setRows] = useState<AdminUserRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editing, setEditing] = useState<AdminUserRow | null>(null);
  const [form] = Form.useForm();

  const load = async () => {
    setLoading(true);
    try {
      const { data } = await adminService.getUsers();
      setRows(data);
    } catch {
      message.error('Không tải được danh sách người dùng');
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
        render: (_: unknown, row: AdminUserRow) => (
          <Switch
            checked={row.locked}
            onChange={async (checked) => {
              try {
                await adminService.updateUser(row.id, { locked: checked });
                await load();
              } catch {
                message.error('Cập nhật trạng thái thất bại');
              }
            }}
          />
        ),
      },
      {
        title: 'Hành động',
        render: (_: unknown, row: AdminUserRow) => (
          <Space>
            <Button type="primary" onClick={() => {
              setEditing(row);
              form.setFieldsValue({ fullName: row.fullName, role: row.role });
              setOpenEdit(true);
            }}>
              Sửa
            </Button>
            <Popconfirm
              title="Xóa người dùng?"
              onConfirm={async () => {
                try {
                  await adminService.deleteUser(row.id);
                  await load();
                } catch {
                  message.error('Xóa thất bại');
                }
              }}
              okText="Xóa"
              cancelText="Hủy"
            >
              <Button danger> Xóa </Button>
            </Popconfirm>
            <Button
              onClick={async () => {
                try {
                  await adminService.resetPassword(row.id);
                  message.success('Đã đặt lại mật khẩu');
                } catch {
                  message.error('Không thể đặt lại mật khẩu');
                }
              }}
            >
              Reset mật khẩu
            </Button>
          </Space>
        ),
      },
    ],
    [form, message],
  );

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <Typography.Title level={3} style={{ margin: 0 }}>Quản lý người dùng</Typography.Title>
        <Button type="primary" onClick={() => setOpenAdd(true)}>Thêm người dùng</Button>
      </div>
      <Table rowKey="id" loading={loading} columns={columns} dataSource={rows} />

      <Modal title="Thêm mới" open={openAdd} onCancel={() => setOpenAdd(false)} footer={null}>
        <Form
          layout="vertical"
          onFinish={async (values) => {
            try {
              await adminService.createUser(values);
              setOpenAdd(false);
              await load();
            } catch {
              message.error('Thêm người dùng thất bại');
            }
          }}
        >
          <Form.Item name="fullName" label="Họ và tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Mật khẩu" rules={[{ required: true, min: 6 }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="role" label="Vai trò" rules={[{ required: true }]}>
            <Select options={[{ label: 'Sinh viên', value: 'STUDENT' }, { label: 'Giảng viên', value: 'LECTURER' }, { label: 'Admin', value: 'ADMIN' }]} />
          </Form.Item>
          <Button type="primary" htmlType="submit">Tạo người dùng</Button>
        </Form>
      </Modal>

      <Modal title="Chỉnh sửa người dùng" open={openEdit} onCancel={() => setOpenEdit(false)} footer={null}>
        <Form
          form={form}
          layout="vertical"
          onFinish={async (values) => {
            if (!editing) return;
            try {
              await adminService.updateUser(editing.id, values);
              setOpenEdit(false);
              await load();
            } catch {
              message.error('Cập nhật thất bại');
            }
          }}
        >
          <Form.Item name="fullName" label="Họ và tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Vai trò" rules={[{ required: true }]}>
            <Select options={[{ label: 'Sinh viên', value: 'STUDENT' }, { label: 'Giảng viên', value: 'LECTURER' }, { label: 'Admin', value: 'ADMIN' }]} />
          </Form.Item>
          <Button type="primary" htmlType="submit">Lưu</Button>
        </Form>
      </Modal>
    </div>
  );
}
