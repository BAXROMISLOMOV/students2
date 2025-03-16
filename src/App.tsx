import { create } from 'zustand';
import { Table, Button, Drawer, Form, Input } from 'antd';
import { useState } from 'react';

interface Student {
  id: number;
  name: string;
  age: number;
}

interface StudentStore {
  students: Student[];
  addStudent: (student: Omit<Student, 'id'>) => void;
  deleteStudent: (id: number) => void;
}

const useStudentStore = create<StudentStore>((set) => ({
  students: [],
  addStudent: (student) =>
    set((state) => ({
      students: [...state.students, { id: Date.now(), ...student }],
    })),
  deleteStudent: (id) =>
    set((state) => ({
      students: state.students.filter((student) => student.id !== id),
    })),
}));

// Main component
const StudentTable: React.FC = () => {
  const { students, addStudent, deleteStudent } = useStudentStore();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      addStudent(values);
      form.resetFields();
      setOpen(false);
    });
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: Student) => (
        <Button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => deleteStudent(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div className="p-5 w-300  h-200">
      <Button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setOpen(true)}>
        Add Student
      </Button>
      <div className="mt-5">
        <Table columns={columns} dataSource={students} rowKey="id" className="w-full border border-gray-300 rounded-lg" />
      </div>
      <Drawer
        title="Add New Student"
        open={open}
        onClose={() => setOpen(false)}
        className="p-5"
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit} className="space-y-4">
          <Form.Item name="name" label="Name" rules={[{ required: true }]}> 
            <Input className="border border-gray-300 rounded px-3 py-2 w-full" />
          </Form.Item>
          <Form.Item name="age" label="Age" rules={[{ required: true }]}> 
            <Input type="number" className="border border-gray-300 rounded px-3 py-2 w-full" />
          </Form.Item>
          <Button type="primary" htmlType="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
            Submit
          </Button>
        </Form>
      </Drawer>
    </div>
  );
};

export default StudentTable;