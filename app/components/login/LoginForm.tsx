import { FC } from 'react';
import CustomForm from '../shared/CustomForm';
import CustomFormItem from '../shared/CustomFormItem';
import CustomInput from '../shared/CustomInput';
import CustomButton from '../shared/CustomButton';

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
        <CustomButton text='Login' style={{ width: '100%', padding: '18px' }} />
      </CustomFormItem>
    </CustomForm>
  );
};

export default LoginForm;
