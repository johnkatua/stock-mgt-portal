import { Table, TableProps } from 'antd';
import { FC } from 'react';

const CustomTable: FC<TableProps> = ({ dataSource, columns, ...rest }) => {
  return <Table dataSource={dataSource} columns={columns} {...rest} />;
};

export default CustomTable;
