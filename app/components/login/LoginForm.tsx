import { FC } from 'react';
import { FormProps } from 'antd';
import CustomForm from '../shared/CustomForm';
import CustomFormItem from '../shared/CustomFormItem';
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';

type HandleSubmitType = (_values: { email: string; password: string }) => void;

interface LoginFormProps extends FormProps {
  handleSubmit: HandleSubmitType;
}

const LoginForm: FC<LoginFormProps> = ({ handleSubmit, form }) => {
  return (
    <CustomForm onFinish={handleSubmit} form={form}>
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
        <CustomInput placeholder='Email Address' style={{ padding: '8px' }} />
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
        <CustomInput
          placeholder='Password'
          type='password'
          style={{ padding: '8px' }}
        />
      </CustomFormItem>
      <CustomFormItem>
        <CustomButton
          htmlType='submit'
          text='Login'
          style={{
            width: '100%',
            padding: '18px',
            fontSize: '18px',
            color: 'var(--primary-color)',
          }}
        />
      </CustomFormItem>
    </CustomForm>
  );
};

export default LoginForm;
