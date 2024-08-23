import { ConfigProvider, Form, FormProps } from 'antd';
import { FC, ReactNode } from 'react';

interface CustomFormProps extends FormProps {
  onFinish: FormProps['onFinish'];
  children: ReactNode;
}

const CustomForm: FC<CustomFormProps> = ({ onFinish, children }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: 'white',
          },
        },
      }}
    >
      <Form onFinish={onFinish} layout='vertical'>
        {children}
      </Form>
    </ConfigProvider>
  );
};

export default CustomForm;
