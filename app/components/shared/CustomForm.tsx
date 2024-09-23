import { ConfigProvider, Form, FormProps } from 'antd';
import { FC, ReactNode } from 'react';

interface CustomFormProps extends FormProps {
  onFinish: FormProps['onFinish'];
  children: ReactNode;
  labelColor?: string;
  requiredMarkColor?: string;
}

const CustomForm: FC<CustomFormProps> = ({ onFinish, children, form }) => {
  return (
    <ConfigProvider>
      <Form form={form} onFinish={onFinish} layout='vertical'>
        {children}
      </Form>
    </ConfigProvider>
  );
};

export default CustomForm;
