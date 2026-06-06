import React from 'react';
import { Button, Tooltip } from 'antd';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { active, toggle } = useTheme();

  return (
    <Tooltip title={active === 'dark' ? 'Chế độ tối' : 'Chế độ sáng'}>
      <Button
        onClick={toggle}
        aria-label="Chuyển giao diện"
        size="small"
        style={{ borderRadius: 999 }}
      >
        {active === 'dark' ? <SunOutlined /> : <MoonOutlined />}
      </Button>
    </Tooltip>
  );
}
