import { Header } from 'antd/es/layout/layout';
import { FC, ReactNode } from 'react';

interface CustomHeaderProps {
  children: ReactNode;
}

const CustomHeader: FC<CustomHeaderProps> = ({ children }) => {
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--primary-color)',
        backgroundColor: 'var(--dark-white)',
      }}
    >
      {children}
    </Header>
  );
};

export default CustomHeader;
