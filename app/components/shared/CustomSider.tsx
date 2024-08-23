import { Menu, MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import Sider from 'antd/es/layout/Sider';
import React from 'react';

const CustomSider = () => {
  const router = useRouter();

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Dashboard',
      onClick: () => router.push('/dashboard'),
    },
    {
      key: 2,
      label: 'Products',
      onClick: () => router.push('/products'),
    },
    {
      key: 3,
      label: 'Suppliers',
      onClick: () => router.push('/suppliers'),
    },
  ];
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
