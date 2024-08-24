import { api } from './api';

interface Supplier {
  _id: string;
  supplier_name: string;
  contact_name: string;
  phone: string;
  address: string;
}

const suppliersApi = api.injectEndpoints({
  endpoints: ({ query }) => ({
    getSuppliers: query<Supplier[], void>({
      query: () => '/suppliers',
    }),
  }),
});

export const { useGetSuppliersQuery } = suppliersApi;
