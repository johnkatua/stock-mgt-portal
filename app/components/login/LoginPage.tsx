'use client';

import { Typography, Form } from 'antd';
import { useRouter } from 'next/navigation';
import styles from '../../page.module.css';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log(values);
    router.push('/dashboard');
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
          <LoginForm handleSubmit={handleSubmit} form={form} />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
