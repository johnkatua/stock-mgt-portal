import { api } from './api';

const suppliersApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getSuppliers: query({
      query: () => '/suppliers',
    }),
  }),
});

export const { useGetSuppliersQuery } = suppliersApi;
