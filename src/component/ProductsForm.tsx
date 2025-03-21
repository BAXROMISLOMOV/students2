import { Button, Drawer, Form, Input, Select } from "antd";
import { useState } from "react";
import { GetRandomId } from "../Math/math";
import { useGlobalStore } from "../store/store";
export function ProductsForm() {
  const products = useGlobalStore((state) => state.products);
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button 
        type="primary" 
        onClick={showDrawer} 
        className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md"
      >
        + Yangi mahsulot
      </Button>

      <Drawer 
        title="Mahsulot qo'shish" 
        width={400} 
        onClose={onClose} 
        open={open}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            const newProducts = [{ ...values, id: GetRandomId() }, ...products];
            useGlobalStore.setState({ products: newProducts });
            form.resetFields();
            setOpen(false);
          }}
        >
                <Form.Item
                  label="Nomi"
                  name="nomi"
                 
                >
                  <Select
                    options={products?.map((i: { nomi: any; name: any }) => {
                      return {
                        label: i.nomi,
                        value: i.name,
                      };
                    })}
                  />{" "}
                </Form.Item>
          <Form.Item
            label="Narxi"
            name="narxi"
            rules={[{ required: true, message: "Narxni kiriting!" }]}
          >
            <Input 
              type="number" 
              placeholder="Narx (UZS)" 
              className="border border-gray-300 p-2 rounded-md shadow-sm"
            />
          </Form.Item>
          <Form.Item
                  label="Nomi"
                  name="nomi"
                >
                  <Select
                    options={products?.map((i: { nomi: any; name: any }) => {
                      return {
                        label: i.nomi,
                        value: i.name,
                      };
                    })}
                  />{" "}
                </Form.Item>
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg w-full shadow-md"
            >
              Qo'shish
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}

