import { Layout, Menu } from 'antd';
import { FC, ReactNode } from 'react';

const { Header, Content, Sider } = Layout;

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: FC<CustomLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          display: 'flex',
          color: 'white',
        }}
      >
        <h2>Lakehouse</h2>
        <div>User</div>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            style={{ height: '100%', backgroundColor: 'gray' }}
            items={[]}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
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
