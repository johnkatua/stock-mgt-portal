import React from 'react';
import { useGetProductsQuery } from '../services/products';
import CustomTable from '../components/shared/CustomTable';

const columns = [
  {
    title: 'Name',
    dataIndex: 'product_name',
  },
  {
    title: 'Unit Price',
    dataIndex: 'unit_price',
  },
  {
    title: 'Quantity in Stock',
    dataIndex: 'quantity_in_stock',
  },
  {
    title: 'Reorder Level',
    dataIndex: 'reorder_level',
  },
];

const ViewProducts = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  return (
    <CustomTable dataSource={products} columns={columns} loading={isLoading} />
  );
};

export default ViewProducts;
