import React from 'react';
import CustomTable from '../components/shared/CustomTable';
import { useGetSuppliersQuery } from '../services/suppliers';
import CustomButton from '../components/shared/CustomButton';
import { Supplier } from './AddSupplierForm';
import { Space } from 'antd';

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
  {
    title: 'Actions',
    key: 'action',
    render: (record: Supplier) => (
      <Space>
        <CustomButton
          text='Update'
          onClick={() => console.log(record)}
          style={{
            backgroundColor: 'var(--primary-color)',
            color: 'var(--dark-white)',
          }}
        />
        <CustomButton
          text='Delete'
          onClick={() => console.log(record)}
          style={{
            backgroundColor: 'var(--primary-color)',
            color: 'var(--dark-white)',
          }}
        />
      </Space>
    ),
  },
];

const ViewSuppliers = () => {
  const { data: suppliers } = useGetSuppliersQuery();

  return <CustomTable dataSource={suppliers} columns={columns} />;
};

export default ViewSuppliers;
