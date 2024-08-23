import { Layout } from 'antd';
import { FC, ReactNode } from 'react';
import CustomHeader from './CustomHeader';
import CustomSider from './CustomSider';

const { Content } = Layout;

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: FC<CustomLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <CustomHeader>
        <h2>Lakehouse</h2>
        <div>User</div>
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
