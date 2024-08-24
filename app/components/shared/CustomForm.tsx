import { ConfigProvider, Form, FormProps } from 'antd';
import { FC, ReactNode } from 'react';

interface CustomFormProps extends FormProps {
  onFinish: FormProps['onFinish'];
  children: ReactNode;
}

const CustomForm: FC<CustomFormProps> = ({ onFinish, children, form }) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: 'var(--dark-white)',
            labelRequiredMarkColor: 'var(--dark-white)',
          },
          Input: {
            hoverBorderColor: 'var(--dark-primary-color)',
            activeBorderColor: 'var(--dark-primary-color)',
          },
          // Button: {
          //   defaultHoverBorderColor: 'var(--dark-primary-color)',
          //   defaultActiveBorderColor: 'var(--dark-primary-color)',
          // },
        },
      }}
    >
      <Form form={form} onFinish={onFinish} layout='vertical'>
        {children}
      </Form>
    </ConfigProvider>
  );
};

export default CustomForm;
