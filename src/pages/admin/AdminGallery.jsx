import { useEffect, useState } from "react";
import API from "../../api";

function AdminGallery() {
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({ title: "", description: "" });
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load gallery items
  const fetchGallery = async () => {
    try {
      const res = await API.get("/gallery");
      setItems(res.data.data || []);
    } catch (error) {
      console.error("Fetch Gallery Error:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // Add or Update item
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    if (file) data.append("image", file);

    try {
      if (editId) {
        await API.put(`/gallery/${editId}`, data);
        alert("Gallery item updated!");
      } else {
        await API.post("/gallery", data);
        alert("Gallery item added!");
      }

      fetchGallery();
      setForm({ title: "", description: "" });
      setFile(null);
      setEditId(null);
    } catch (error) {
      console.error("Gallery Save Error:", error);
    }
  };

  // Delete item
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await API.delete(`/gallery/${id}`);
      alert("Gallery item deleted!");
      fetchGallery();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  // Edit item
  const handleEdit = (item) => {
    setEditId(item._id);
    setForm({ title: item.title, description: item.description });
    setFile(null);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Gallery Admin</h1>

      {/* Upload / Edit Form */}
      <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        {/* File Upload UI */}
        <div className="flex flex-col gap-3">
          <label className="font-medium text-gray-700">Upload File</label>

          <div className="flex items-center gap-4">
            <label
              htmlFor="fileUpload"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
            >
              Choose File
            </label>

            <span className="text-gray-600 text-sm">
              {file
                ? file.name
                : editId
                ? "Keep old image (optional)"
                : "No file chosen"}
            </span>
          </div>

          <input
            id="fileUpload"
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div className="flex gap-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            {editId ? "Update Item" : "Upload"}
          </button>

          {editId && (
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setEditId(null);
                setForm({ title: "", description: "" });
                setFile(null);
              }}
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* Gallery Items */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="rounded shadow border p-2 relative"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover rounded"
            />

            <p className="font-semibold mt-2">{item.title}</p>
            <p className="text-sm text-gray-600">{item.description}</p>

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
        ))}
      </div>
    </div>
  );
}

export default AdminGallery;






// import { useEffect, useState } from "react";
// import API from "../../api";

// function AdminGallery() {
//   const [file, setFile] = useState(null);
//   const [form, setForm] = useState({ title: "", description: "" });
//   const [items, setItems] = useState([]);

//   // Load gallery images
//   const fetchGallery = async () => {
//     const res = await API.get("/gallery");
//     setItems(res.data.data);
//   };

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("title", form.title);
//     data.append("description", form.description);
//     data.append("image", file);

//     try {
//       await API.post("/gallery", data);
//       alert("Gallery item added!");
//       fetchGallery();
//     } catch (error) {
//       console.error("Gallery Upload Error:", error);
//     }
//   };

//   return (
//     <div className="p-6">

//       <h1 className="text-2xl font-semibold mb-4">Gallery Admin</h1>

//       {/* Upload Form */}
//       <form onSubmit={handleUpload} className="space-y-4 max-w-lg">

//         <input
//           type="text"
//           className="w-full border p-2 rounded"
//           placeholder="Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//         />

//         <textarea
//           className="w-full border p-2 rounded"
//           placeholder="Description"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         />

//         {/* <input
//           type="file"
//           onChange={(e) => setFile(e.target.files[0])}
//         /> */}

//         <div className="flex flex-col gap-3">
//   <label className="font-medium text-gray-700">Upload File</label>

//   <div className="flex items-center gap-4">
//     <label
//       htmlFor="fileUpload"
//       className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
//     >
//       Choose File
//     </label>

//     <span className="text-gray-600 text-sm">
//       {file ? file.name : "No file chosen"}
//     </span>
//   </div>

//   <input
//     id="fileUpload"
//     type="file"
//     className="hidden"
//     onChange={(e) => setFile(e.target.files[0])}
//   />
// </div>


//         <button className="bg-green-600 text-white px-4 py-2 rounded">
//           Upload
//         </button>
//       </form>

//       {/* Preview */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
//         {items.map((item) => (
//           <div key={item._id} className="rounded shadow border p-2">
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-full h-32 object-cover rounded"
//             />
//             <p className="font-semibold mt-2">{item.title}</p>
//             <p className="text-sm text-gray-600">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminGallery;
