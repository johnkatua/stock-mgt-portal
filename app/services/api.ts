import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8081/api',
  prepareHeaders: (headers) => {
    const loggedInUser = localStorage.getItem('stock_user');
    if (loggedInUser) {
      const { access_token } = JSON.parse(loggedInUser);
      headers.set('Authorization', `Bearer ${access_token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Supplier', 'Product'],
  endpoints: () => ({}),
});
