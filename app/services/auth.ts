import { api } from './api';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const authApi = api.injectEndpoints({
  endpoints: ({ mutation }) => ({
    login: mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem('access_token', data.token);
        } catch (error) {
          console.log('Login failed: ', error);
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
