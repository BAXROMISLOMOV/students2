import { Route, Routes } from "react-router";
import { GroupsPage } from "../component/GroupsPage";
import HomePage from "../component/HomePage";
import { Userpage } from "../component/Userpage";
import { ProductsPage } from "../component/ProductsPage";
import { CatigoriaPage } from "../component/CatigoriesPage";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/students" element={<Userpage />} />
      <Route path="/groups" element={<GroupsPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/catigories" element={<CatigoriaPage />} />
    </Routes>
  );
}

export default Main;
