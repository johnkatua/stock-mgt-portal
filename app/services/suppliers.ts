import { api } from './api';

interface SupplierResponse {
  data: string;
}

const suppliersApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getSuppliers: query<SupplierResponse, void>({
      query: () => '/suppliers',
    }),
  }),
});

export const { useGetSuppliersQuery } = suppliersApi;
