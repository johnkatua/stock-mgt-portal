import { Supplier } from '../suppliers/AddSupplierForm';
import { api } from './api';

interface SupplierResponse extends Supplier {
  _id: string;
}

interface SupplierCreationResponse {
  msg: string;
}

const suppliersApi = api.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getSuppliers: query<SupplierResponse[], void>({
      query: () => '/suppliers',
    }),
    addSupplier: mutation<SupplierCreationResponse, Supplier>({
      query: (body) => ({
        url: '/suppliers',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetSuppliersQuery, useAddSupplierMutation } = suppliersApi;
