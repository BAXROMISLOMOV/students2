import { Switch, Table } from "antd";
import { useGlobalStore } from "../store/store";
import { StudentForm } from "./StudentForm";
export function Userpage() {
  const groups = useGlobalStore((state) => state.groups);
  const students = useGlobalStore((state) => state.students);
  return (
    <div className="w-full mx-auto p-10">
      <div className="flex justify-between mb-5">
        <h1 className="text-4xl font-bold">Students</h1>
        <StudentForm />
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
              const group = groups.find((i) => i.id === group_id);
              return group?.name || "Noma'lum";
            },
          },
        ]}
        dataSource={students}
      />
    </div>
  );
}
