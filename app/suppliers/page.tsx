'use client';

import React from 'react';
import CustomLayout from '../components/shared/CustomLayout';
import CustomPageTitle from '../components/shared/CustomPageTitle';
import CustomButton from '../components/shared/CustomButton';
import { useGetSuppliersQuery } from '../services/suppliers';

const Suppliers = () => {
  const { data: suppliers } = useGetSuppliersQuery();
  console.log(suppliers);
  return (
    <CustomLayout
      header={
        <CustomPageTitle title='Suppliers'>
          <CustomButton
            text='Add Supplier'
            style={{
              backgroundColor: 'var(--primary-color)',
              color: 'var(--dark-white)',
            }}
          />
        </CustomPageTitle>
      }
    >
      Suppliers
      <span>{'One'}</span>
    </CustomLayout>
  );
};

export default Suppliers;
