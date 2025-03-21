import { GroupOutlined, HomeOutlined, ProductOutlined, UnorderedListOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Link from "antd/es/typography/Link";

function Sidebar({ collapsed }: { collapsed: boolean }) {
  return (
    <Menu
      className=""
      style={{ maxWidth: 180, background: "black", height: "90vh", padding: 4 }}
      defaultSelectedKeys={[location.pathname]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      inlineCollapsed={collapsed}
      selectedKeys={['/student']}
      items={[
        {
          key: "/",
          label: <Link href="/"> Home</Link>,
          icon: <HomeOutlined />,
        },

        {
          key: "/students",
          label: <Link href="/students"> Students</Link>,
          icon: <UsergroupAddOutlined />,
        },
        {
          key: "/groups",
          label: <Link href="/groups"> Groups</Link>,
          icon: <GroupOutlined/>,
        },
        {
          key: "/products",
          label: <Link href="/products"> Products</Link>,
          icon: <ProductOutlined />,
        },
        {
          key: "/catigories",
          label: <Link href="/catigories"> Catigories</Link>,
          icon: <UnorderedListOutlined /> ,
        },
      ]}
    />
  );
}

export default Sidebar;
