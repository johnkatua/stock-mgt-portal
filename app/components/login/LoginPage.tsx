'use client';

import { Typography, Form, message } from 'antd';
import { useRouter } from 'next/navigation';
import styles from '../../page.module.css';
import LoginForm from './LoginForm';
import { useLoginMutation } from '../../services/auth';

const LoginPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const { resetFields } = form;
  const [login, { isLoading }] = useLoginMutation();
  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      await login(values).unwrap();
      message.success('Login successful!');
      router.push('/dashboard');
    } catch (error) {
      message.error('Login failed');
      console.log(error);
    } finally {
      resetFields();
    }
  };
  return (
    <main className={styles.loginPage}>
      <div className={styles.loginWrapper}>
        <Typography.Title
          level={2}
          style={{ color: 'var(--dark-white)', marginBottom: '40px' }}
        >
          Lakehouse
        </Typography.Title>
        <div
          style={{
            width: '100%',
          }}
        >
          <LoginForm
            handleSubmit={handleSubmit}
            form={form}
            loading={isLoading}
          />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
