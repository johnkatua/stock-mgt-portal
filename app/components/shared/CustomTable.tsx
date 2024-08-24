import { Table, TableProps } from 'antd';
import { FC } from 'react';

const CustomTable: FC<TableProps> = ({ dataSource, columns }) => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default CustomTable;
