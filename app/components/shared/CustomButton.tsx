import { Button, ButtonProps } from 'antd';
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
    <Button type={type} {...rest}>
      {text}
    </Button>
  );
};

export default CustomButton;
