import { Button, Drawer, Form, Input, Select, Switch } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { useGlobalStore } from "../store/store";
import { useState } from "react";

export function StudentForm() {
  const groups = useGlobalStore((state) => state.groups);
  const students = useGlobalStore((s) => s.students);
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
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />} className="flex items-center gap-2">
        Qoshish
      </Button>

      <Drawer title="Talaba qo'shish" onClose={onClose} open={open} className="p-4">
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            const new_students = [{ ...values }, ...students];
            useGlobalStore.setState({ students: new_students });
            form.resetFields();
          }}
        >
          <Form.Item
            label="Ism"
            name="firstName"
            rules={[{ required: true, message: "Ismni kiriting!" }]}
          >
            <Input placeholder="Talaba ismini kiriting" />
          </Form.Item>

          <Form.Item
            label="Guruh"
            name="group_id"
            rules={[{ required: true, message: "Guruhni tanlang!" }]}
          >
            <Select
              placeholder="Guruhni tanlang"
              options={groups?.map((i) => ({ label: i.name, value: i.id }))}
            />
          </Form.Item>

          <Form.Item label="Faollik" name="active" valuePropName="checked">
            <Switch />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-between">
              <Button onClick={onClose} icon={<CloseOutlined />} danger>
                Bekor qilish
              </Button>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                Qoshish
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
