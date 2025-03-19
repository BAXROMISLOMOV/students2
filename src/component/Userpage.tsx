import { Button, Switch, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useGlobalStore } from "../store/store";
import { StudentForm } from "./StudentForm";

export function Userpage() {
  const groups = useGlobalStore((state) => state.groups);
  const students = useGlobalStore((state) => state.students);

  return (
    <div className=" w-full mx-auto p-10">
  <div className="flex justify-between mb-5">
    <h1 className="text-4xl font-bold">Students</h1>
    <StudentForm />
  </div>
  <div className="flex gap-3 pb-5">
    <Button type="primary" className="flex items-center gap-1">
      Umumiy: <span className="font-bold">{students.length}</span>
    </Button>
    <Button type="primary" className="flex items-center gap-1">
      Faollar:{" "}
      <span className="font-bold">
        {students.filter((item) => item.active).length}
      </span>
    </Button>
    <Button type="primary" danger className="flex items-center gap-1">
      NoFaollar:{" "}
      <span className="font-bold">
        {students.filter((item) => !item.active).length}
      </span>
    </Button>
  </div>

 <Table 
    bordered
    rowKey="id"
    className="shadow-lg rounded-lg w-full"
    style={{ width: "1645px" }}
    columns={[
      {
        title: "ID",
        dataIndex: "id",
      },
      {
        title: "NAME",
        dataIndex: "firstName",
      },
      {
        title: "Faollik",
            dataIndex: "active",
            render: (active, student) => (
              <Switch
                checked={active}
             onChange={(checked) => {
               const new_Students = students.map((item) =>
                 item.id === student.id ? { ...item, active: checked } : item
               );
              useGlobalStore.setState({
                 students: new_Students,
                  });
                }}
              />
            ),
          },
          {
            title: "Guruh",
            dataIndex: "group_id",
            render: (group_id) => {
              const group = groups?.find((i) => i.id === group_id);
              return group?.name || "Noma'lum";
            },
          },
          {
            title: "Amallar",
            render: (_, student) => (
              <Button className="p-10"
                danger
      type="primary"
      icon={<DeleteOutlined />}
      size="small"
      onClick={() => {
        const new_students = students.filter(
          (i) => i.id !== student.id
        );
        useGlobalStore.setState({ students: new_students });
      }}
    >
      
               </Button>
            ),
          },
        ]}
        dataSource={students}
      />
    </div>
  );
}
