import { FC } from 'react';
import CustomModal from '../components/shared/CustomModal';
import AddProductForm, { Product } from './AddProductForm';
import { Form, message } from 'antd';
import { useGetSuppliersQuery } from '../services/suppliers';
import { optionSelector } from '../lib/OptionSelector';
import { useAddProductMutation } from '../services/products';

interface AddProductProps {
  isOpen: boolean;
  handleClose(): void;
}

const AddProduct: FC<AddProductProps> = ({ isOpen, handleClose }) => {
  const [form] = Form.useForm();
  const { resetFields } = form;
  const { data: suppliers } = useGetSuppliersQuery();
  const [addProduct, { isLoading }] = useAddProductMutation();

  const handleSubmit = async (values: Product) => {
    try {
      await addProduct(values).unwrap();
      message.success('Product added successfully!');
    } catch (error) {
      if (error instanceof Error) {
        message.error(error.message);
      } else {
        message.error('An unexpected error occurred!');
      }
    } finally {
      resetFields();
      handleClose();
    }
  };

  const supplierOptions = optionSelector(
    suppliers || [],
    'supplier_name',
    '_id'
  );
  return (
    <CustomModal title={'Add Product'} open={isOpen} onCancel={handleClose}>
      <AddProductForm
        form={form}
        handleSubmit={handleSubmit}
        loading={isLoading}
        supplierOptions={supplierOptions}
      />
    </CustomModal>
  );
};

export default AddProduct;
