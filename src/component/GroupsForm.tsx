import { Button, Drawer, Form, Select, Switch } from "antd";
import { useState } from "react";
import { GetRandomId } from "../Math/math";
import { useGlobalStore } from "../store/store";

export function GroupsForm() {
  const groups = useGlobalStore((state) => state.groups);

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
            
            const new_groups = [
              {
                ...values,
                id: GetRandomId(),
              },
              ...(groups),
            ];
            useGlobalStore.setState({
              groups: new_groups,
            });
            form.resetFields();
          }}
        >
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
