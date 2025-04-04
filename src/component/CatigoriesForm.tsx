import { Button, Drawer, Form, Input, Select, Switch } from "antd";
import { useState } from "react";
import { useGlobalStore } from "../store/store";
import { GetRandomId } from "../Math/math";

export function CatigoriesForm() {
  const catigories = useGlobalStore((state) => state.catigoria);
  const products = useGlobalStore((state) => state.products);
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Qoshish
      </Button>
      <Drawer onClose={onClose} open={open}>
        <Form
          form={form}
          onFinish={(values) => {
            const new_catigories = [
              {
                ...values,
                id: GetRandomId(),
              },
              ...catigories,
            ];
            useGlobalStore.setState({
              catigoria: new_catigories,
            });
            form.resetFields();
          }}
        >
        <Form.Item
            label="Nomi"
            name="nomi"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Faollik" name="active">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={() => {
                setOpen(false);
              }}
              htmlType="submit"
            >
              Qoshish
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
