import styles from '../../page.module.css';
import LoginForm from './LoginForm';

const LoginPage = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <main className={styles.loginPage}>
      <div className={styles.loginWrapper}>
        <h1>Lakehouse</h1>
        <LoginForm handleSubmit={handleSubmit} />
      </div>
    </main>
  );
};

export default LoginPage;
