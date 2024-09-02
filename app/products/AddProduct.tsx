import { FC } from 'react';
import CustomModal from '../components/shared/CustomModal';

interface AddProductProps {
  isOpen: boolean;
  handleClose(): void;
}

const AddProduct: FC<AddProductProps> = ({ isOpen, handleClose }) => {
  return (
    <CustomModal title={'Add Product'} open={isOpen} onCancel={handleClose}>
      <div>Testing</div>
    </CustomModal>
  );
};

export default AddProduct;
