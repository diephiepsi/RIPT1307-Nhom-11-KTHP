import { App, Button, Card, Form, Input, Radio, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { register } from '../../store/authSlice';
import { useAppDispatch } from '../../store/hooks';

export function RegisterPage() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { message } = App.useApp();

  return (
    <Card style={{ maxWidth: 520, margin: '32px auto' }}>
      <Typography.Title level={3}>Đăng ký</Typography.Title>
      <Form
        layout="vertical"
        initialValues={{ role: 'STUDENT' }}
        onFinish={async (values) => {
          try {
            await dispatch(register(values)).unwrap();
            message.success('Đăng ký thành công');
            nav('/');
          } catch {
            message.error('Đăng ký thất bại');
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
          <Radio.Group
            options={[
              { label: 'Sinh viên', value: 'STUDENT' },
              { label: 'Giảng viên', value: 'LECTURER' },
            ]}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Tạo tài khoản
        </Button>
      </Form>
    </Card>
  );
}

