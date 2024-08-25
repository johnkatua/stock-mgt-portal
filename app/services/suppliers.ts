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
      providesTags: ['Supplier'],
    }),
    addSupplier: mutation<SupplierCreationResponse, Supplier>({
      query: (body) => ({
        url: '/suppliers',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Supplier'],
    }),
  }),
});

export const { useGetSuppliersQuery, useAddSupplierMutation } = suppliersApi;
