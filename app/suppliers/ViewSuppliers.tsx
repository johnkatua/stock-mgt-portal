import CustomButton from '../components/shared/CustomButton';
import CustomTable from '../components/shared/CustomTable';
import {
  useDeleteSupplierMutation,
  useGetSuppliersQuery,
} from '../services/suppliers';
import { Space, message } from 'antd';
import { primaryBtn } from '../styles/component.styles';

const ViewSuppliers = () => {
  const { data: suppliers, isLoading } = useGetSuppliersQuery();
  const [deleteSupplier] = useDeleteSupplierMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteSupplier(id).unwrap();
      message.success('Supplier Deleted Successfully!');
    } catch (error) {
      message.error('Unable to delete supplier!');
      console.error(error);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'supplier_name',
    },
    {
      title: 'Contact Person',
      dataIndex: 'contact_name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Actions',
      key: 'action',
      render: ({ _id }: { _id: string }) => (
        <Space>
          <CustomButton
            text='Update'
            onClick={() => console.log(_id)}
            style={primaryBtn}
          />
          <CustomButton
            text='Delete'
            onClick={() => handleDelete(_id)}
            style={primaryBtn}
            data-testid='delete-supplier-btn'
          />
        </Space>
      ),
    },
  ];

  return (
    <CustomTable dataSource={suppliers} columns={columns} loading={isLoading} />
  );
};

export default ViewSuppliers;
