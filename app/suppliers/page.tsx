'use client';

import { useState } from 'react';
import CustomLayout from '../components/shared/CustomLayout';
import CustomPageTitle from '../components/shared/CustomPageTitle';
import CustomButton from '../components/shared/CustomButton';
import ViewSuppliers from './ViewSuppliers';
import AddSupplier from './AddSupplier';

const Suppliers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
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
            onClick={() => setIsOpen(true)}
          />
        </CustomPageTitle>
      }
    >
      <ViewSuppliers />
      <AddSupplier isOpen={isOpen} handleClose={handleClose} />
    </CustomLayout>
  );
};

export default Suppliers;
