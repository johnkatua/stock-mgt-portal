import { api } from './api';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
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
          if (data && data.access_token) {
            const access_token = data.access_token;
            localStorage.setItem('access_token', access_token);
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
