import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  const linkClasses = ({ isActive }) =>
    `px-4 py-3 rounded-md transition ${
      isActive
        ? "bg-blue-600 text-white font-semibold"
        : "hover:bg-gray-700"
    }`;

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col py-6 px-4 fixed left-0 top-0 shadow-xl">

      {/* Logo */}
      <h1 className="text-2xl font-semibold mb-10 text-center tracking-wider">
        Admin Panel
      </h1>

      <nav className="flex flex-col gap-4">

        {/* ---------------------- CRM SECTION ---------------------- */}
        <h2 className="text-sm text-gray-400 uppercase tracking-wider mt-2 pl-3">
          CRM
        </h2>

        <NavLink to="/admin/dashboard/contacts" className={linkClasses}>
          Contacts
        </NavLink>

        <NavLink to="/admin/dashboard/bookings" className={linkClasses}>
          Booking Form
        </NavLink>

        {/* ---------------------- WCM SECTION ---------------------- */}
        <h2 className="text-sm text-gray-400 uppercase tracking-wider mt-6 pl-3">
          Website Content Management
        </h2>

        <NavLink to="/admin/dashboard/gallery" className={linkClasses}>
          Gallery
        </NavLink>

        <NavLink to="/admin/dashboard/blogs" className={linkClasses}>
          Blogs
        </NavLink>

        <NavLink to="/admin/dashboard/services" className={linkClasses}>
          Services
        </NavLink>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-6 px-4 py-3 rounded-md transition hover:bg-red-700 bg-red-600 text-white font-semibold"
        >
          Logout
        </button>

      </nav>
    </div>
  );
}

export default AdminNavbar;





// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// function AdminNavbar() {

//      const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("adminToken"); // remove login key
//     navigate("/admin"); // redirect to login
//   };
   
//   return (
//     <div className="w-64 h-screen bg-gray-900 text-white flex flex-col py-6 px-4 fixed left-0 top-0 shadow-xl">

//       {/* Logo */}
//       <h1 className="text-2xl font-semibold mb-10 text-center tracking-wider">
//         Admin Panel
//       </h1>

//       {/* Menu Items */}
//       <nav className="flex flex-col gap-4">

//         <NavLink
//           to="/admin/dashboard/contacts"   
//           className={({ isActive }) =>
//             `px-4 py-3 rounded-md transition ${
//               isActive
//                 ? "bg-blue-600 text-white font-semibold"
//                 : "hover:bg-gray-700"
//             }`
//           }
//         >
//           Contacts
//         </NavLink>

//         <NavLink
//           to="/admin/dashboard/bookings"
//           className={({ isActive }) =>
//             `px-4 py-3 rounded-md transition ${
//               isActive
//                 ? "bg-blue-600 text-white font-semibold"
//                 : "hover:bg-gray-700"
//             }`
//           }
//         >
//           Booking Form
//         </NavLink>

//         <NavLink
//           to="/admin/dashboard/gallery"
//           className={({ isActive }) =>
//             `px-4 py-3 rounded-md transition ${
//               isActive
//                 ? "bg-blue-600 text-white font-semibold"
//                 : "hover:bg-gray-700"
//             }`
//           }
//         >
//           Gallery
//         </NavLink>

//         <NavLink
//           to="/admin/dashboard/blogs"
//           className={({ isActive }) =>
//             `px-4 py-3 rounded-md transition ${
//               isActive
//                 ? "bg-blue-600 text-white font-semibold"
//                 : "hover:bg-gray-700"
//             }`
//           }
//         >
//           Blogs
//         </NavLink>

        
//         <NavLink
//           to="/admin/dashboard/services"
//           className={({ isActive }) =>
//             `px-4 py-3 rounded-md transition ${
//               isActive
//                 ? "bg-blue-600 text-white font-semibold"
//                 : "hover:bg-gray-700"
//             }`
//           }
//         >
//           Services
//         </NavLink>

//          <button
//       onClick={handleLogout}
//       className="px-4 py-3 rounded-md transition hover:bg-red-700 bg-red-600 text-white font-semibold"
//     >
//       Logout
//     </button>

//       </nav>
//     </div>
//   );
// }

// export default AdminNavbar;
