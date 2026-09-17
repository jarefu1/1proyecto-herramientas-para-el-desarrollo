import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import RightPanel from "../components/RightPanel";
import "./DashboardLayout.css";

function DashboardLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="layout__main">
        <Topbar />
        <div className="layout__content">
          <Outlet />
        </div>
      </div>

      <RightPanel />
    </div>
  );
}

export default DashboardLayout;