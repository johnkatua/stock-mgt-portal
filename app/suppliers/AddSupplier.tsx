import { FC } from 'react';
import CustomModal from '../components/shared/CustomModal';

interface AddSupplierProps {
  isOpen: boolean;
  handleClose(): void;
}

const AddSupplier: FC<AddSupplierProps> = ({ isOpen, handleClose }) => {
  return (
    <CustomModal open={isOpen} onCancel={handleClose}>
      <div>Add Supplier</div>
    </CustomModal>
  );
};

export default AddSupplier;
