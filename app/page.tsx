import { Provider } from 'react-redux';
import LoginContainer from './components/login';
import { store } from './store/store';

export default function Home() {
  return (
    <Provider store={store}>
      <LoginContainer />
    </Provider>
  );
}
