import { FC } from 'react';
import { FormProps } from 'antd';
import { primaryBtn } from '../../styles/component.styles';
import CustomForm from '../shared/CustomForm';
import CustomFormItem from '../shared/CustomFormItem';
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';

type HandleSubmitType = (_values: { email: string; password: string }) => void;

interface LoginFormProps extends FormProps {
  handleSubmit: HandleSubmitType;
  loading: boolean;
}

const loginBtnStyles = {
  ...primaryBtn,
  width: '100%',
  padding: '18px',
  fontSize: '18px',
};

const LoginForm: FC<LoginFormProps> = ({ handleSubmit, form, loading }) => {
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
        <CustomInput
          placeholder='Email Address'
          style={{ padding: '8px' }}
          data-testid='email-input'
        />
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
          data-testid='password-input'
        />
      </CustomFormItem>
      <CustomFormItem>
        <CustomButton
          htmlType='submit'
          text='Login'
          loading={loading}
          style={loginBtnStyles}
          data-testid='login-btn'
        />
      </CustomFormItem>
    </CustomForm>
  );
};

export default LoginForm;
