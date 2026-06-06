import { App, Button, Card, Form, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/authSlice';
import { useAppDispatch } from '../../store/hooks';

export function LoginPage() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { message } = App.useApp();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 150px)', // Đẩy khối card vào giữa màn hình theo chiều dọc
      backgroundColor: '#f8f9fa',
      fontFamily: 'sans-serif'
    }}>
      
      {/* 1. LOGO PHONG CÁCH STACK OVERFLOW PHÍA TRÊN CARD */}
      <div 
        onClick={() => nav('/')}
  style={{ 
    fontSize: '2.2rem', 
    fontWeight: 'bold', 
    color: '#0c0d0e', 
    marginBottom: '24px', 
    cursor: 'pointer',
    userSelect: 'none',
    letterSpacing: '-0.5px'
  }}
      >
        UniBrain<span style={{ color: '#0c0d0e', fontWeight: 300 }}>.com</span>
      </div>

      {/* 2. KHỐI BOX ĐĂNG NHẬP (CARD) */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Card className="ub-card" style={{ maxWidth: '360px' }}>
          <Form
          layout="vertical"
          requiredMark={false} // Ẩn dấu hoa thị đỏ để giao diện phẳng, thoáng đãng
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
          {/* Ô nhập Email */}
          <Form.Item 
            name="email" 
            label={<span style={{ fontWeight: 600, color: '#0c0d0e', fontSize: '0.9rem' }}>Email</span>}
            rules={[{ required: true, message: 'Vui lòng nhập Email', type: 'email' }]}
            style={{ marginBottom: '16px' }}
          >
            <Input className="ub-input" />
          </Form.Item>

          {/* Ô nhập Mật khẩu */}
          <Form.Item 
            name="password" 
            label={
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, color: '#0c0d0e', fontSize: '0.9rem' }}>Mật khẩu</span>
              </div>
            }
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
            style={{ marginBottom: '20px' }}
          >
            <Input.Password className="ub-input" />
          </Form.Item>

          {/* Nút Submit */}
          <Button 
            type="primary" 
            htmlType="submit" 
            block
            className="ub-btn ub-btn-primary"
            style={{ height: 44, fontWeight: 600 }}
          >
            Đăng nhập
          </Button>
        </Form>
        </Card>
      </div>

      {/* 3. DÒNG ĐIỀU HƯỚNG PHỤ PHÍA DƯỚI BOX */}
      <div style={{ marginTop: '24px', fontSize: '0.95rem', color: '#232629' }}>
        Chưa có tài khoản?{' '}
        <span 
          onClick={() => nav('/register')} 
          style={{ color: '#2563eb', cursor: 'pointer', fontWeight: 600 }}
        >
          Đăng ký
        </span>
      </div>

    </div>
  );
}