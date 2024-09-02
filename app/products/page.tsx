'use client';

import React, { useState } from 'react';
import CustomLayout from '../components/shared/CustomLayout';
import CustomPageTitle from '../components/shared/CustomPageTitle';
import CustomButton from '../components/shared/CustomButton';
import AddProduct from './AddProduct';

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
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
            onClick={() => setIsOpen(true)}
          />
        </CustomPageTitle>
      }
    >
      <AddProduct isOpen={isOpen} handleClose={handleClose} />
    </CustomLayout>
  );
};

export default Products;
