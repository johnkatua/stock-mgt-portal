import { Button, ButtonProps, ConfigProvider } from 'antd';
import { FC } from 'react';

interface CustomButtonProps extends ButtonProps {
  text: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  text,
  type = 'default',
  ...rest
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultHoverBorderColor: 'var(--dark-primary-color)',
            defaultActiveBorderColor: 'var(--dark-primary-color)',
          },
        },
      }}
    >
      <Button type={type} {...rest}>
        {text}
      </Button>
    </ConfigProvider>
  );
};

export default CustomButton;
