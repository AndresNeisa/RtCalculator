import React from "react";

import Sidebar from "./SideBar";
import Footer from "./Footer";

const Dashboard = ({ children }) => (
  <React.Fragment>
    <div className="wrapper">
      <Sidebar />
      <main className="main">
        {/* <Navbar /> */}
        <div className="content">{children}</div>
        {/* <Footer /> */}
      </main>
    </div>
  </React.Fragment>
);

export default Dashboard;