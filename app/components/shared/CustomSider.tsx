import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';

const CustomSider = () => {
  return (
    <Sider
      style={{
        overflow: 'auto',
        height: 'calc(100vh - 64px)',
        position: 'fixed',
        top: '64px',
        bottom: '0',
        backgroundColor: 'var(--primary-color)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
      }}
    >
      <Menu items={[]} />
    </Sider>
  );
};

export default CustomSider;
