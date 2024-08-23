'use client';

import React from 'react';
import CustomLayout from '../components/shared/CustomLayout';
import CustomPageTitle from '../components/shared/CustomPageTitle';
import CustomButton from '../components/shared/CustomButton';

const Products = () => {
  return (
    <CustomLayout
      header={
        <CustomPageTitle title='Products'>
          <CustomButton
            text='Add Products'
            style={{
              backgroundColor: 'var(--primary-color)',
              color: 'var(--dark-white)',
            }}
          />
        </CustomPageTitle>
      }
    >
      <div>Products</div>
    </CustomLayout>
  );
};

export default Products;
