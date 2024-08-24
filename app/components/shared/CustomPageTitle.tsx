import { FC, ReactNode } from 'react';

interface CustomPageTitleProps {
  title: string;
  children?: ReactNode;
}

const CustomPageTitle: FC<CustomPageTitleProps> = ({ title, children }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default CustomPageTitle;
