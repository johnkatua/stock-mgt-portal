import { Menu, MenuProps } from 'antd';
import { useRouter } from 'next/navigation';
import Sider from 'antd/es/layout/Sider';
import React, { useEffect, useState, useMemo } from 'react';

const pathMappers: Record<string, string> = {
  '1': '/dashboard',
  '2': '/products',
  '3': '/suppliers',
};

const CustomSider = () => {
  const router = useRouter();
  // const pathname = usePathname();
  const [activeKey, setActiveKey] = useState('');

  const handleNavigate = (key: string) => {
    router.push(pathMappers[key]);
    setActiveKey(key);
  };

  useEffect(() => {
    // const mappedKey = pathMappers[activeKey];
    if (activeKey) {
      setActiveKey(activeKey);
    }
    console.log('here', activeKey);
  }, [activeKey, router]);

  console.log(activeKey);

  const items: MenuProps['items'] = useMemo(
    () => [
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
    ],
    [router]
  );
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
        onClick={(e) => handleNavigate(e.key)}
        mode='inline'
        selectedKeys={[activeKey]}
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
