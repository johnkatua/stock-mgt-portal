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
        color: '#fff7ed',
      }}
    >
      {children}
    </Header>
  );
};

export default CustomHeader;
