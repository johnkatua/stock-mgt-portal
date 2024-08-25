import { Supplier } from '../suppliers/AddSupplierForm';
import { api } from './api';

interface SupplierResponse extends Supplier {
  _id: string;
}

const suppliersApi = api.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getSuppliers: query<SupplierResponse[], void>({
      query: () => '/suppliers',
      providesTags: ['Supplier'],
    }),
    addSupplier: mutation<{ msg: string }, Supplier>({
      query: (body) => ({
        url: '/suppliers',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Supplier'],
    }),
    deleteSupplier: mutation<{ msg: string }, string>({
      query: (id) => ({
        url: `/suppliers/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Supplier'],
    }),
  }),
});

export const {
  useGetSuppliersQuery,
  useAddSupplierMutation,
  useDeleteSupplierMutation,
} = suppliersApi;
