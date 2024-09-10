import { api } from './api';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: string;
}

const authApi = api.injectEndpoints({
  endpoints: ({ mutation }) => ({
    login: mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          if (data) {
            localStorage.setItem('stock_user', JSON.stringify(data));

            const loggedInUser = localStorage.getItem('stock_user');

            let token: string | null = null;

            if (loggedInUser) {
              const { access_token } = JSON.parse(loggedInUser);
              token = access_token;
            }

            document.cookie = `access_token=${token}; path=/`;
            console.log(data.access_token);
          } else {
            console.error('No access token received.');
          }
        } catch (error) {
          console.error('Login failed: ', error);
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
