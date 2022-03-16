import React, { useEffect, useLayoutEffect } from "react";
import { List, Typography, Spin } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import useDispatchCustom from "../../hooks/useDispatch";
import useSelectorCustom from "../../hooks/useSelector";
import { useParams } from "react-router-dom";
const { Text } = Typography;

export const ListUpload = ({
  list = [],
  isEdit,
  setFileList,
  setFieldValue,
}) => {
  const { DestroyImgsProduct } = useDispatchCustom().UploadDispatch;
  const { imgs } = useSelectorCustom().UploadSelector;
  const { updateProduct } = useDispatchCustom().ProductDispatch;
  const { id } = useParams();

  useLayoutEffect(() => {
    setFileList([...imgs]);
    setFieldValue("imgs", [...imgs]);
  }, [imgs]);
  const handleDelete = ({ public_id }) => {
    console.log({ id });
    if (isEdit) {
      DestroyImgsProduct({ id: public_id, _id: id });
      console.log({ imgRemains: imgs });
      setFileList([...imgs]);
    } else {
      DestroyImgsProduct({ id: public_id });
      setFileList([...imgs]);
    }
  };
  return (
    <List
      itemLayout="horizontal"
      dataSource={list}
      renderItem={(item) => (
        console.log(item),
        (
          <List.Item
            actions={[
              item.isLoading && <Spin />,
              <DeleteOutlined onClick={() => handleDelete(item)} />,
            ]}
          >
            <List.Item.Meta
              title={
                <Text
                  type={
                    item.status == "done"
                      ? "success"
                      : item.status == "uploading"
                      ? "secondary"
                      : "danger"
                  }
                >
                  {item?.url}
                </Text>
              }
            />
          </List.Item>
        )
      )}
    />
  );
};
