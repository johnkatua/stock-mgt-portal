'use client';

import { Avatar, Layout, Popover } from 'antd';
import { FC, ReactNode } from 'react';
import CustomHeader from './CustomHeader';
import CustomSider from './CustomSider';
import { useRouter } from 'next/navigation';

const { Content } = Layout;

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: FC<CustomLayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <CustomHeader>
        <h2>Lakehouse</h2>
        <Popover content={<p onClick={() => router.push('/')}>Logout</p>}>
          <Avatar
            style={{
              backgroundColor: 'var(--primary-color)',
              cursor: 'pointer',
            }}
            size={'large'}
          >
            JK
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
          <h3>Breadcrumb</h3>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
