import { App, Button, Card, Form, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/authSlice';
import { useAppDispatch } from '../../store/hooks';

export function LoginPage() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { message } = App.useApp();

  return (
    <Card style={{ maxWidth: 420, margin: '32px auto' }}>
      <Typography.Title level={3}>Đăng nhập</Typography.Title>
      <Form
        layout="vertical"
        onFinish={async (values) => {
          try {
            await dispatch(login(values)).unwrap();
            message.success('Đăng nhập thành công');
            nav('/');
          } catch {
            message.error('Đăng nhập thất bại');
          }
        }}
      >
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Đăng nhập
        </Button>
      </Form>
    </Card>
  );
}

