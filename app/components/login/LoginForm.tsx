import { FC } from 'react';
import CustomForm from '../shared/CustomForm';
import CustomFormItem from '../shared/CustomFormItem';
import CustomInput from '../shared/CustomInput';
import { Button } from 'antd';

type HandleSubmitType = (_values: { email: string; password: string }) => void;

interface LoginFormProps {
  handleSubmit: HandleSubmitType;
}

const LoginForm: FC<LoginFormProps> = ({ handleSubmit }) => {
  return (
    <CustomForm onFinish={handleSubmit}>
      <CustomFormItem
        name='email'
        label='Email Address'
        rules={[
          {
            required: true,
            message: 'Please enter your email address',
          },
        ]}
      >
        <CustomInput placeholder='Email Address' />
      </CustomFormItem>
      <CustomFormItem
        name='password'
        label='Password'
        rules={[
          {
            required: true,
            message: 'Please enter your password',
          },
        ]}
      >
        <CustomInput placeholder='Password' type='password' />
      </CustomFormItem>
      <CustomFormItem>
        <Button style={{ width: '100%' }}>Submit</Button>
      </CustomFormItem>
    </CustomForm>
  );
};

export default LoginForm;
