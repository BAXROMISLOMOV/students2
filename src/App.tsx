import { useState } from "react";

import Main from "./page.tsx/Main";
import Sidebar from "./page.tsx/Sidebar";
import Navbar from "./component/Navbar";

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <Navbar setCollapsed={collapsed} />

      <div className="flex h-full">
        <Sidebar collapsed={collapsed} />
        <main>
          <Main />
        </main>
      </div>
    </div>
  );
}

export default App;
