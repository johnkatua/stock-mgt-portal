import { FC } from 'react';
import { FormProps } from 'antd';
import CustomForm from '../components/shared/CustomForm';
import CustomFormItem from '../components/shared/CustomFormItem';
import CustomInput from '../components/shared/CustomInput';
import CustomButton from '../components/shared/CustomButton';
import { primaryBtn } from '../styles/component.styles';

export interface Supplier {
  supplier_name: string;
  contact_name: string;
  phone: string;
  address: string;
}

type HandleSubmitType = (_values: Supplier) => void;

interface AddSupplierFormProps extends FormProps {
  handleSubmit: HandleSubmitType;
  loading: boolean;
}

const AddSupplierForm: FC<AddSupplierFormProps> = ({
  handleSubmit,
  form,
  loading,
}) => {
  return (
    <CustomForm
      onFinish={handleSubmit}
      form={form}
      labelColor='var(--dark-black)'
      requiredMarkColor='var(--dark-black)'
    >
      <CustomFormItem
        name='supplier_name'
        label='Supplier Name'
        rules={[
          {
            required: true,
            message: 'Please enter supplier name',
          },
        ]}
      >
        <CustomInput
          placeholder='Enter Supplier Name'
          data-testid='supplier-name-input'
        />
      </CustomFormItem>
      <CustomFormItem
        name='contact_name'
        label='Contact Person Name'
        rules={[
          {
            required: true,
            message: 'Please enter contact person name',
          },
        ]}
      >
        <CustomInput
          placeholder='Enter Contact Person Name'
          data-testid='contact-name-input'
        />
      </CustomFormItem>
      <CustomFormItem
        name='phone'
        label='Phone Number'
        rules={[
          {
            required: true,
            message: 'Please enter phone number',
          },
        ]}
      >
        <CustomInput
          placeholder='Enter Phone Number'
          data-testid='supplier-phone-input'
        />
      </CustomFormItem>
      <CustomFormItem
        name='address'
        label='Physical Address'
        rules={[
          {
            required: true,
            message: 'Please enter physical address',
          },
        ]}
      >
        <CustomInput
          placeholder='Enter Physical Address'
          data-testid='supplier-address-input'
        />
      </CustomFormItem>
      <CustomFormItem>
        <CustomButton
          text='Save Supplier Details'
          htmlType='submit'
          loading={loading}
          style={primaryBtn}
          data-testid='save-supplier-btn'
        />
      </CustomFormItem>
    </CustomForm>
  );
};

export default AddSupplierForm;
