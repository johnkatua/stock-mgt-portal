import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Home',
    onClick: () => console.log('heelo'),
  },
  {
    key: 2,
    label: 'Products',
  },
  {
    key: 3,
    label: 'Suppliers',
  },
];

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
      <Menu
        items={items}
        mode='inline'
        defaultSelectedKeys={['1']}
        style={{
          backgroundColor: 'var(--primary-color)',
          color: 'var(--dark-white)',
          margin: '12px 0',
        }}
      />
    </Sider>
  );
};

export default CustomSider;
