import React from 'react';
import CustomTable from '../components/shared/CustomTable';
import { useGetSuppliersQuery } from '../services/suppliers';

const columns = [
  {
    title: 'Name',
    dataIndex: 'supplier_name',
  },
  {
    title: 'Contact Person',
    dataIndex: 'contact_name',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];

const ViewSuppliers = () => {
  const { data: suppliers } = useGetSuppliersQuery();

  return <CustomTable dataSource={suppliers} columns={columns} />;
};

export default ViewSuppliers;
