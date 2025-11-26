import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar fixed width */}
      <div className="w-64">
        <AdminNavbar />
      </div>

      {/* Content shifted to the right */}
      <div className="flex-1 p-6 ml-0">
        <Outlet />
      </div>

    </div>
  );
};

export default AdminLayout;
