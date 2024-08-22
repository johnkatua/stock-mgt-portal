import { Form, FormProps } from 'antd';
import { FC, ReactNode } from 'react';

interface CustomFormProps extends FormProps {
  onFinish: FormProps['onFinish'];
  children: ReactNode;
}

const CustomForm: FC<CustomFormProps> = ({ onFinish, children }) => {
  return <Form onFinish={onFinish}>{children}</Form>;
};

export default CustomForm;
