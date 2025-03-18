import { Avatar, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import mylogo from "../assents/MYLOGO.jpeg"; 

function Navbar({ setCollapsed, collapsed }: { setCollapsed: (arg0: boolean) => void; collapsed: boolean }) {
  return (
    <>
      <nav className="flex items-center gap-2 p-5 justify-between bg-black text-white">
        <div className="flex gap-1 items-center h-4">
          <Button
            type="link"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <p>Logo</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar className="cursor-pointer" size="large" src={mylogo} />
          <div>
            <p>Baxrom</p>
            <p>Bahromislomov324@gmail.com</p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
