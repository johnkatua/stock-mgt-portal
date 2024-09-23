'use client';

import { useState } from 'react';
import CustomLayout from '../components/shared/CustomLayout';
import CustomPageTitle from '../components/shared/CustomPageTitle';
import CustomButton from '../components/shared/CustomButton';
import ViewSuppliers from './ViewSuppliers';
import AddSupplier from './AddSupplier';
import { primaryBtn } from '../styles/component.styles';

const Suppliers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <CustomLayout
      header={
        <CustomPageTitle title='Suppliers'>
          <CustomButton
            text='Add Supplier'
            style={primaryBtn}
            onClick={() => setIsOpen(true)}
            data-testid='add-supplier-btn'
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
