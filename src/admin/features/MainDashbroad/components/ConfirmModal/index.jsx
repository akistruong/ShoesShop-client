import React from "react";
import "./ConfirmModal.css";
import { Modal, Button } from "antd";
import useDispatchCustom from "../../../../../hooks/useDispatch";
const ConfirmModal = ({ _id }) => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const { deleteProduct } = useDispatchCustom().ProductDispatch;
  const handleOk = () => {
    deleteProduct(_id);
    setVisible(false);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const showModal = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Xóa
      </Button>
      <Modal
        title="Xác nhận"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okButtonProps={{ danger: 1, type: "primary" }}
      >
        <p>Bạn có chắc muốn xóa sản phẩm này</p>
      </Modal>
    </>
  );
};

export default ConfirmModal;
