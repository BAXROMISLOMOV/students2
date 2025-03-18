import { Button, Drawer, Form, Input, Switch } from "antd";
import { useState } from "react";
import { GetRandomId } from "../Math/math";

export function StudentsGroup() {

  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleFinish = (values: any) => {
    const newGroup = { ...values, firstNmae: GetRandomId() };
    ([newGroup]);
    form.resetFields();
    onClose();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Qoshish
      </Button>
      <Drawer title="Yangi Guruh" onClose={onClose} open={open}>
        <Form form={form} onFinish={handleFinish} layout="vertical">
          <Form.Item 
            label="Nomi" 
            name="name" 
            rules={[{ required: true, message: "Nomini kiriting!" }]}
          >
            <Input placeholder="Guruh nomi" />
          </Form.Item>
          
          <Form.Item label="Faollik" name="active" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Qoshish
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}