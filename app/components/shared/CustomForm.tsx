import { ConfigProvider, Form, FormProps } from 'antd';
import { FC, ReactNode } from 'react';

interface CustomFormProps extends FormProps {
  onFinish: FormProps['onFinish'];
  children: ReactNode;
  labelColor?: string;
  requiredMarkColor?: string;
}

const CustomForm: FC<CustomFormProps> = ({
  onFinish,
  children,
  form,
  labelColor,
  requiredMarkColor,
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: labelColor ? labelColor : 'var(--dark-white)',
            labelRequiredMarkColor: requiredMarkColor
              ? requiredMarkColor
              : 'var(--dark-white)',
          },
          Input: {
            hoverBorderColor: 'var(--dark-primary-color)',
            activeBorderColor: 'var(--dark-primary-color)',
          },
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
