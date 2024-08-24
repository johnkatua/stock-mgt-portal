'use client';

import React from 'react';
import CustomLayout from '../components/shared/CustomLayout';
import CustomPageTitle from '../components/shared/CustomPageTitle';
import CustomButton from '../components/shared/CustomButton';
import ViewSuppliers from './ViewSuppliers';

const Suppliers = () => {
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
      <ViewSuppliers />
    </CustomLayout>
  );
};

export default Suppliers;
