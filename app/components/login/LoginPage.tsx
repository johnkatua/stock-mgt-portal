'use client';

import { Typography } from 'antd';
import styles from '../../page.module.css';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const handleSubmit = (values: { email: string; password: string }) => {
    console.log(values);
  };
  return (
    <main className={styles.loginPage}>
      <div className={styles.loginWrapper}>
        <Typography.Title
          level={2}
          style={{ color: 'white', marginBottom: '40px' }}
        >
          Lakehouse
        </Typography.Title>
        <div
          style={{
            width: '100%',
          }}
        >
          <LoginForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
