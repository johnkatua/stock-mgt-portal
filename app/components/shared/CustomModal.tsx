import { Modal, ModalProps } from 'antd';
import { FC } from 'react';

const CustomModal: FC<ModalProps> = ({
  open,
  title,
  onCancel,
  children,
  ...rest
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onCancel={onCancel}
      footer={null}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
