import { useEffect, useState } from "react";
import API from "../../api";

function AdminServices() {
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({ title: "", description: "" });
  const [services, setServices] = useState([]);

  const [editId, setEditId] = useState(null); // 🔥 Track whether we are editing

  const fetchServices = async () => {
    try {
      const res = await API.get("/services");
      setServices(res.data?.data || []);
    } catch (error) {
      console.error("Fetch Services Error:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // 🔥 ADD OR UPDATE SERVICE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    if (file) data.append("image", file); // Allow optional new image

    try {
      if (editId) {
        // UPDATE
        await API.put(`/services/${editId}`, data);
        alert("Service updated!");
      } else {
        // CREATE
        await API.post("/services", data);
        alert("Service added!");
      }

      fetchServices();
      setForm({ title: "", description: "" });
      setFile(null);
      setEditId(null);

    } catch (error) {
      console.error("Service Submit Error:", error);
    }
  };

  // 🔥 DELETE SERVICE
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;

    try {
      await API.delete(`/services/${id}`);
      alert("Service deleted!");
      fetchServices();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  // 🔥 EDIT SERVICE
  const handleEdit = (item) => {
    setEditId(item._id);
    setForm({ title: item.title, description: item.description });
    setFile(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Services Admin</h1>

      {/* Upload / Edit Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">

        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Service Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Service Description"
          rows={3}
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <div className="flex flex-col gap-3">
          <label className="font-medium text-gray-700">Upload Image</label>

          <div className="flex items-center gap-4">
            <label
              htmlFor="fileUpload"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
            >
              Choose File
            </label>

            <span className="text-gray-600 text-sm">
              {file ? file.name : editId ? "Keep old image (optional)" : "No file chosen"}
            </span>
          </div>

          <input
            id="fileUpload"
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          {editId ? "Update Service" : "Add Service"}
        </button>

        {editId && (
          <button
            type="button"
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => {
              setEditId(null);
              setForm({ title: "", description: "" });
              setFile(null);
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      {/* Services Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {services?.length > 0 ? (
          services.map((item) => (
            <div key={item._id} className="rounded shadow border p-2 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover rounded"
              />

              <p className="font-semibold mt-2">{item.title}</p>
              <p className="text-sm text-gray-600">{item.description}</p>

              {/* Buttons */}
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="flex-1 bg-red-600 text-white p-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No services added yet.</p>
        )}
      </div>
    </div>
  );
}

export default AdminServices;





// import { useEffect, useState } from "react";
// import API from "../../api";

// function AdminServices() {
//   const [file, setFile] = useState(null);
//   const [form, setForm] = useState({ title: "", description: "" });
//   const [services, setServices] = useState([]);

//   const fetchServices = async () => {
//     try {
//       const res = await API.get("/services");
//       setServices(res.data?.data || []);
//     } catch (error) {
//       console.error("Fetch Services Error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("title", form.title);
//     data.append("description", form.description);
//     data.append("image", file);

//     try {
//       await API.post("/services", data);
//       alert("Service added!");
//       fetchServices();
//       setForm({ title: "", description: "" });
//       setFile(null);
//     } catch (error) {
//       console.error("Service Upload Error:", error);
//     }
//   };

//   // 🔥 DELETE SERVICE
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this service?")) return;

//     try {
//       await API.delete(`/services/${id}`);
//       alert("Service deleted!");
//       fetchServices();
//     } catch (error) {
//       console.error("Delete Error:", error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">Services Admin</h1>

//       {/* Upload Form */}
//       <form onSubmit={handleUpload} className="space-y-4 max-w-lg">
//         <input
//           type="text"
//           className="w-full border p-2 rounded"
//           placeholder="Service Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//         />

//         <textarea
//           className="w-full border p-2 rounded"
//           placeholder="Service Description"
//           rows={3}
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         />

//         <div className="flex flex-col gap-3">
//           <label className="font-medium text-gray-700">Upload Image</label>

//           <div className="flex items-center gap-4">
//             <label
//               htmlFor="fileUpload"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
//             >
//               Choose File
//             </label>

//             <span className="text-gray-600 text-sm">
//               {file ? file.name : "No file chosen"}
//             </span>
//           </div>

//           <input
//             id="fileUpload"
//             type="file"
//             className="hidden"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>

//         <button className="bg-green-600 text-white px-4 py-2 rounded">
//           Add Service
//         </button>
//       </form>

//       {/* Services Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
//         {services?.length > 0 ? (
//           services.map((item) => (
//             <div key={item._id} className="rounded shadow border p-2 relative">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-32 object-cover rounded"
//               />
//               <p className="font-semibold mt-2">{item.title}</p>
//               <p className="text-sm text-gray-600">{item.description}</p>

//               {/* Delete button */}
//               <button
//                 onClick={() => handleDelete(item._id)}
//                 className="mt-3 w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No services added yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AdminServices;
