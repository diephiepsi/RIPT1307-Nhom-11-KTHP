import { App, Button, Card, Form, Input, Radio, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { register } from '../../store/authSlice';
import { useAppDispatch } from '../../store/hooks';

export function RegisterPage() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { message } = App.useApp();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 150px)', // Giữ vị trí cân bằng giữa màn hình
      backgroundColor: '#f8f9fa',
      fontFamily: 'sans-serif',
      padding: '20px 0'
    }}>
      
      {/* LOGO THƯƠNG HIỆU */}
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
  UniBrain<span style={{ color: '#f48225', fontWeight: 300 }}>.com</span>
</div>

      {/* KHỐI BOX ĐĂNG KÝ (CARD) */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Card className="ub-card" style={{ maxWidth: '360px' }}>
          <Form
          layout="vertical"
          requiredMark={false} // Ẩn dấu hoa thị đỏ (*) rối mắt
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
          {/* Ô nhập Họ tên */}
          <Form.Item 
            name="fullName" 
            label={<span style={{ fontWeight: 600, color: '#0c0d0e', fontSize: '0.9rem' }}>Họ và tên</span>}
            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
            style={{ marginBottom: '16px' }}
          >
            <Input className="ub-input" />
          </Form.Item>

          {/* Ô nhập Email */}
          <Form.Item 
            name="email" 
            label={<span style={{ fontWeight: 600, color: '#0c0d0e', fontSize: '0.9rem' }}>Email</span>}
            rules={[{ required: true, message: 'Vui lòng nhập Email', type: 'email' }]}
            style={{ marginBottom: '16px' }}
          >
            <Input style={{ borderRadius: '3px', padding: '8px' }} />
          </Form.Item>

          {/* Ô nhập Mật khẩu */}
          <Form.Item 
            name="password" 
            label={<span style={{ fontWeight: 600, color: '#0c0d0e', fontSize: '0.9rem' }}>Mật khẩu</span>}
            rules={[{ required: true, message: 'Mật khẩu tối thiểu 6 ký tự', min: 6 }]}
            style={{ marginBottom: '16px' }}
          >
            <Input.Password className="ub-input" />
          </Form.Item>

          {/* Ô chọn Vai trò */}
          <Form.Item 
            name="role" 
            label={<span style={{ fontWeight: 600, color: '#0c0d0e', fontSize: '0.9rem' }}>I am a</span>}
            rules={[{ required: true }]}
            style={{ marginBottom: '24px' }}
          >
            <Radio.Group
              options={[
                { label: 'Sinh viên', value: 'STUDENT' },
                { label: 'Giảng viên', value: 'LECTURER' },
              ]}
              optionType="button" // Biến Radio thành dạng khối nút bấm phẳng nằm ngang cực đẹp
              buttonStyle="solid"
              style={{ width: '100%', display: 'flex' }}
            />
          </Form.Item>

          {/* Nút Đăng ký */}
          <Button 
            type="primary" 
            htmlType="submit" 
            block
            className="ub-btn ub-btn-primary"
            style={{ height: 44, fontWeight: 600 }}
          >
            Đăng ký
          </Button>
        </Form>
        </Card>
      </div>

      {/* DÒNG ĐIỀU HƯỚNG PHỤ QUAY LẠI LOGIN */}
      <div style={{ marginTop: '24px', fontSize: '0.95rem', color: '#232629' }}>
        Bạn đã có tài khoản?{' '}
        <span 
          onClick={() => nav('/login')} 
          style={{ color: '#2563eb', cursor: 'pointer', fontWeight: 600 }}
        >
          Đăng nhập
        </span>
      </div>

    </div>
  );
}