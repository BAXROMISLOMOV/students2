import { Route, Routes } from "react-router";
import { GroupsPage } from "../component/GroupsPage";
import HomePage from "../component/HomePage";
import { Userpage } from "../component/Userpage";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/students" element={<Userpage />} />
      <Route path="/groups" element={<GroupsPage />} />
    </Routes>
  );
}

export default Main;
