import { Input, InputProps } from 'antd';
import { FC } from 'react';

interface CustomInputProps extends InputProps {
  placeholder: string;
}

const CustomInput: FC<CustomInputProps> = ({ placeholder, ...rest }) => {
  return <Input placeholder={placeholder} {...rest} />;
};

export default CustomInput;
