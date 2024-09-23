'use client';

import { Avatar, Layout, Popover } from 'antd';
import { FC, ReactNode, useEffect, useState } from 'react';
import CustomHeader from './CustomHeader';
import CustomSider from './CustomSider';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';
import { deleteSession } from '../../lib/session';
import { primaryBtn } from '../../styles/component.styles';

const { Content } = Layout;

interface CustomLayoutProps {
  children: ReactNode;
  header: ReactNode;
}

const CustomLayout: FC<CustomLayoutProps> = ({ header, children }) => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  const handleLogout = () => {
    deleteSession();
    router.push('/');
    localStorage.removeItem('stock_user');
  };

  const loggedInUser = localStorage.getItem('stock_user');

  useEffect(() => {
    if (loggedInUser) {
      const data = JSON.parse(loggedInUser);
      setUser(data?.user);
    }
  }, [loggedInUser]);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <CustomHeader>
        <h2>Lakehouse</h2>
        <Popover
          content={
            <CustomButton
              text='Logout'
              onClick={handleLogout}
              style={primaryBtn}
              data-testid='logout-btn'
            />
          }
        >
          <Avatar
            style={{
              backgroundColor: 'var(--primary-color)',
              cursor: 'pointer',
            }}
            size={'large'}
            data-testid='user-avatar'
          >
            {user?.substring(0, 1).toUpperCase()}
          </Avatar>
        </Popover>
      </CustomHeader>
      <Layout>
        <CustomSider />
        <Layout
          style={{
            position: 'absolute',
            padding: '0 24px 24px',
            left: '200px',
            right: 0,
            bottom: 0,
            width: 'calc(100% - 200px)',
            height: 'calc(100% - 64px)',
            overflow: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'unset',
            insetInlineEnd: 0,
            backgroundColor: 'var(--dark-white)',
          }}
        >
          <div style={{ marginBottom: '20px' }}>{header}</div>
          <Content
            style={{
              backgroundColor: 'white',
              minHeight: 'max-content',
              padding: '10px',
              borderRadius: '10px',
              boxShadow: '0 10px 15px -10px var(--primary-color)',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
