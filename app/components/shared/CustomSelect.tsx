import { Select, SelectProps } from 'antd';
import { FC } from 'react';

const CustomSelect: FC<SelectProps> = ({ placeholder, options, ...rest }) => {
  return (
    <Select
      showSearch
      placeholder={placeholder}
      optionFilterProp='label'
      options={options}
      {...rest}
    />
  );
};

export default CustomSelect;
