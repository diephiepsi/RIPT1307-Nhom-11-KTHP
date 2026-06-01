import { Button, Layout, Menu, Space, Typography } from 'antd';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/authSlice';

const { Header, Content } = Layout;

function useSelectedKey() {
  const loc = useLocation();
  const p = loc.pathname;
  if (p.startsWith('/admin/users')) return '/admin/users';
  if (p.startsWith('/admin/posts')) return '/admin/posts';
  if (p.startsWith('/ask')) return '/ask';
  if (p.startsWith('/login')) return '/login';
  if (p.startsWith('/register')) return '/register';
  return '/';
}

export function AppShell() {
  const { user } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const selectedKey = useSelectedKey();

  const items = [
    { key: '/', label: <Link to="/">Câu hỏi</Link> },
    { key: '/ask', label: <Link to="/ask">Đặt câu hỏi</Link> },
  ];

  if (user?.role === 'ADMIN') {
    items.push(
      { key: '/admin/posts', label: <Link to="/admin/posts">Quản trị bài</Link> },
      { key: '/admin/users', label: <Link to="/admin/users">Quản trị user</Link> },
    );
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Space>
          <Typography.Title level={4} style={{ color: 'white', margin: 0 }}>
            Diễn đàn Hỏi Đáp
          </Typography.Title>
          <Menu
            theme="dark"
            mode="horizontal"
            selectable
            selectedKeys={[selectedKey]}
            items={items}
            style={{ minWidth: 420 }}
          />
        </Space>

        <Space>
          {user ? (
            <>
              <Typography.Text style={{ color: 'white' }}>
                {user.fullName} ({user.role})
              </Typography.Text>
              <Button
                onClick={() => {
                  dispatch(logout());
                  nav('/login');
                }}
              >
                Đăng xuất
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => nav('/login')}>Đăng nhập</Button>
              <Button type="primary" onClick={() => nav('/register')}>
                Đăng ký
              </Button>
            </>
          )}
        </Space>
      </Header>

      <Content style={{ padding: 24, maxWidth: 1200, width: '100%', margin: '0 auto' }}>
        <Outlet />
      </Content>
    </Layout>
  );
}

