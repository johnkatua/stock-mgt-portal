import { FC } from 'react';
import CustomForm from '../components/shared/CustomForm';
import CustomFormItem from '../components/shared/CustomFormItem';
import CustomInput from '../components/shared/CustomInput';
import CustomSelect from '../components/shared/CustomSelect';
import { FormProps } from 'antd';
import CustomButton from '../components/shared/CustomButton';
import { primaryBtn } from '../styles/component.styles';
import { Option } from '../lib/OptionSelector';

export interface Product {
  product_name: string;
  quantity_in_stock: number;
  reorder_level: number;
  supplier_id: string;
  unit_price: string;
}

type HandleSubmitType = (_values: Product) => void;

interface AddProductFormProps extends FormProps {
  handleSubmit: HandleSubmitType;
  loading: boolean;
  supplierOptions: Option[];
}

const AddProductForm: FC<AddProductFormProps> = ({
  form,
  loading,
  handleSubmit,
  supplierOptions,
}) => {
  return (
    <CustomForm
      form={form}
      onFinish={handleSubmit}
      labelColor='var(--dark-black)'
      requiredMarkColor='var(--dark-black)'
    >
      <CustomFormItem
        name='product_name'
        label='Product Name'
        rules={[
          {
            required: true,
            message: 'Please enter product name',
          },
        ]}
      >
        <CustomInput placeholder='Enter product name' />
      </CustomFormItem>
      <CustomFormItem
        name='unit_price'
        label='Product Unit Price'
        rules={[
          {
            required: true,
            message: 'Please enter unit price',
          },
        ]}
      >
        <CustomInput placeholder='Enter Unit Price' type='number' />
      </CustomFormItem>
      <CustomFormItem
        name='supplier_id'
        label='Supplier'
        rules={[
          {
            required: true,
            message: 'Please select supplier',
          },
        ]}
      >
        <CustomSelect placeholder='Select Supplier' options={supplierOptions} />
      </CustomFormItem>
      <CustomFormItem name='quantity_in_stock' label='Quantity In Stock'>
        <CustomInput placeholder='Enter quantity in stock' type='number' />
      </CustomFormItem>
      <CustomFormItem name='reorder_level' label='Reorder Level'>
        <CustomInput placeholder='Enter reorder level' type='number' />
      </CustomFormItem>
      <CustomFormItem>
        <CustomButton
          text='Save Product Details'
          htmlType='submit'
          loading={loading}
          style={primaryBtn}
        />
      </CustomFormItem>
    </CustomForm>
  );
};

export default AddProductForm;
