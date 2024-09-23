import { Product } from '../products/AddProductForm';
import { api } from './api';

interface ProductResponse extends Product {
  _id: string;
}

const productsApi = api.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    addProduct: mutation<{ msg: string }, Product>({
      query: (body) => ({
        url: '/products',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Product'],
    }),
    getProducts: query<ProductResponse[], void>({
      query: () => '/products/',
      providesTags: ['Product'],
    }),
  }),
});

export const { useAddProductMutation, useGetProductsQuery } = productsApi;
