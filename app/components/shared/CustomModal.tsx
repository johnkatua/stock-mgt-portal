import { Modal, ModalProps } from 'antd';
import { FC } from 'react';

const CustomModal: FC<ModalProps> = ({ open, onCancel, children, ...rest }) => {
  return (
    <Modal open={open} onCancel={onCancel} footer={null} {...rest}>
      {children}
    </Modal>
  );
};

export default CustomModal;
