
import { Table } from "antd";
import { useGlobalStore } from "../store/store";
import { CatigoriesForm } from "./CatigoriesForm";

export function CatigoriaPage() {
  const catigories = useGlobalStore((state)=>state.catigoria)
  console.log(111, catigories);
  
  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-between mb-5 ">
        <h1 className="text-4xl font-bold">Catigoria Page </h1>
        <CatigoriesForm />
      </div>
  
      <Table
        style={{ width: "1300px" }}
        columns={[
          {
            title: "Id",
            dataIndex: "id",
          },
          {
            title: "nomi",
            dataIndex: "nomi",
          },
          {
            title: "Image",
            dataIndex: "image",
          },
        
          
          {
            title: "Delete",
            render: (del) => {
              return (
                <div>
                  <button 
                  className="bg-red-500 p-2 rounded-xl text-white"
                    onClick={() => {
                      const new_catigories = catigories.filter((i: { id: any; }) => {
                        if (i.id !== del.id) {
                          return i;
                        }
                      });
                      useGlobalStore.setState({ catigoria: new_catigories });
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            },
          },
        ]}
        dataSource={catigories}
      />
    </div>
  );
}
