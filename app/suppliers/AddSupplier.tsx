import { FC } from 'react';
import CustomModal from '../components/shared/CustomModal';
import AddSupplierForm, { Supplier } from './AddSupplierForm';
import { Form, message } from 'antd';
import { useAddSupplierMutation } from '../services/suppliers';

interface AddSupplierProps {
  isOpen: boolean;
  handleClose(): void;
}

const AddSupplier: FC<AddSupplierProps> = ({ isOpen, handleClose }) => {
  const [form] = Form.useForm();
  const { resetFields } = form;
  const [addSupplier, { isLoading }] = useAddSupplierMutation();

  const handleSubmit = async (values: Supplier) => {
    try {
      await addSupplier(values).unwrap();
      message.success('Supplier added successfully!');
    } catch (error) {
      message.error('Something went wrong while creating supplier!');
      console.log(error);
    } finally {
      resetFields();
      handleClose();
    }
  };
  return (
    <CustomModal open={isOpen} onCancel={handleClose}>
      <AddSupplierForm
        handleSubmit={handleSubmit}
        form={form}
        loading={isLoading}
      />
    </CustomModal>
  );
};

export default AddSupplier;
