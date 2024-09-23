import { useRouter, usePathname } from 'next/navigation';
import Sider from 'antd/es/layout/Sider';
import React from 'react';

const CustomSider = () => {
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    {
      key: '1',
      label: 'Dashboard',
      path: '/dashboard',
      'data-testid': 'dashboard-link',
    },
    {
      key: 2,
      label: 'Products',
      path: '/products',
      'data-testid': 'products-link',
    },
    {
      key: 3,
      label: 'Suppliers',
      path: '/suppliers',
      'data-testid': 'suppliers-link',
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
      <ul
        style={{
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        {items.map((item) => (
          <li
            key={item.key}
            style={{
              padding: '8px 12px',
              backgroundColor:
                pathname === item.path ? 'var(--deep-color)' : '',

              cursor: 'pointer',
              borderRadius: '5px',
              color: 'white',
            }}
            onClick={() => router.push(item.path)}
          >
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </Sider>
  );
};

export default CustomSider;
