import { FC, ReactNode } from 'react';
import { Form, FormItemProps } from 'antd';

interface FormRule {
  required: boolean;
  message?: string;
}

interface CustomFormItemProps
  extends Omit<FormItemProps, 'rules' | 'children'> {
  rules?: FormRule[];
  children: ReactNode;
}

const CustomFormItem: FC<CustomFormItemProps> = ({
  name,
  label,
  rules,
  children,
  ...rest
}) => {
  return (
    <Form.Item name={name} label={label} rules={rules} {...rest}>
      {children}
    </Form.Item>
  );
};

export default CustomFormItem;
