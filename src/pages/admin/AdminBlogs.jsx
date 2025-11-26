import { useEffect, useState } from "react";
import API from "../../api";

function AdminBlogs() {
  const [file, setFile] = useState(null);

  const [form, setForm] = useState({
    title: "",
    category: "",
    date: "",
    excerpt: "",
    content: "",
  });

  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null); // ⬅ EDIT MODE FLAG

  const fetchBlogs = async () => {
    const res = await API.get("/blogs");
    setBlogs(res.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // -------------------------------
  // ADD or UPDATE Blog
  // -------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", form.title);
    data.append("category", form.category);
    data.append("date", form.date);
    data.append("excerpt", form.excerpt);
    data.append("content", form.content);

    if (file) data.append("image", file);

    try {
      if (editId) {
        // ---------------- UPDATE MODE ----------------
        await API.put(`/blogs/${editId}`, data);
        alert("Blog updated!");
      } else {
        // ---------------- ADD MODE -------------------
        if (!file) return alert("Please upload an image");
        await API.post("/blogs", data);
        alert("Blog added!");
      }

      // Reset form
      setForm({
        title: "",
        category: "",
        date: "",
        excerpt: "",
        content: "",
      });
      setFile(null);
      setEditId(null);

      fetchBlogs();
    } catch (error) {
      console.error("Blog Error:", error);
    }
  };

  // -------------------------------
  // DELETE BLOG
  // -------------------------------
  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    await API.delete(`/blogs/${id}`);
    fetchBlogs();
  };

  // -------------------------------
  // LOAD BLOG INTO FORM FOR EDITING
  // -------------------------------
  const editBlog = (blog) => {
    setEditId(blog._id);

    setForm({
      title: blog.title,
      category: blog.category,
      date: blog.date,
      excerpt: blog.excerpt,
      content: blog.content,
    });

    setFile(null); // optional: user can upload new image
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Blogs Admin</h1>

      {/* Blog Form */}
      {/* <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Blog Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          type="text"
          className="w-full border p-2 rounded"
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />

        <input
          type="date"
          className="w-full border p-2 rounded"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />

      
        <div className="flex flex-col gap-3">
          <label className="font-medium text-gray-700">
            {editId ? "Update Blog Image (Optional)" : "Upload Blog Image"}
          </label>

          <div className="flex items-center gap-4">
            <label
              htmlFor="blogFile"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
            >
              Choose File
            </label>

            <span className="text-gray-600 text-sm">
              {file ? file.name : "No file chosen"}
            </span>
          </div>

          <input
            id="blogFile"
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <textarea
          className="w-full border p-2 rounded"
          placeholder="Excerpt"
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          required
        />

        <textarea
          className="w-full border p-2 rounded h-40"
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          {editId ? "Update Blog" : "Add Blog"}
        </button>
      </form> */}
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-3 p-4">

  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    <input
      type="text"
      className="border p-2 rounded text-sm"
      placeholder="Blog Title"
      value={form.title}
      onChange={(e) => setForm({ ...form, title: e.target.value })}
      required
    />

    <input
      type="text"
      className="border p-2 rounded text-sm"
      placeholder="Category"
      value={form.category}
      onChange={(e) => setForm({ ...form, category: e.target.value })}
      required
    />

    <input
      type="date"
      className="border p-2 rounded text-sm"
      value={form.date}
      onChange={(e) => setForm({ ...form, date: e.target.value })}
      required
    />
  </div>

  {/* File Upload */}
  <div className="space-y-1">
    <label className="text-sm font-medium text-gray-700">
      {editId ? "Update Blog Image (Optional)" : "Upload Blog Image"}
    </label>

    <div className="flex items-center gap-2">
      <label
        htmlFor="blogFile"
        className="px-3 py-1.5 bg-blue-600 text-white rounded cursor-pointer text-sm"
      >
        Choose File
      </label>

      <span className="text-gray-600 text-xs">
        {file ? file.name : "No file chosen"}
      </span>
    </div>

    <input
      id="blogFile"
      type="file"
      className="hidden"
      onChange={(e) => setFile(e.target.files[0])}
    />
  </div>

  <textarea
    className="w-full border p-2 rounded text-sm"
    placeholder="Excerpt"
    rows="2"
    value={form.excerpt}
    onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
    required
  />

  <textarea
    className="w-full border p-2 rounded text-sm"
    placeholder="Content(HTML allowed)"
    rows="4"
    value={form.content}
    onChange={(e) => setForm({ ...form, content: e.target.value })}
    required
  />

  <button className="bg-green-600 text-white px-4 py-2 rounded">
    {editId ? "Update Blog" : "Add Blog"}
  </button>
</form>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {blogs.map((blog) => (
          <div key={blog._id} className="rounded shadow border p-3 flex flex-col">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover rounded"
            />

            <h2 className="font-semibold text-lg mt-2">{blog.title}</h2>
            <p className="text-sm text-gray-600">
              {blog.category} • {blog.date}
            </p>
            <p className="text-sm mt-2 text-gray-700">{blog.excerpt}</p>

            <div className="flex justify-between mt-3">
  <button
    onClick={() => editBlog(blog)}
    className="bg-blue-600 text-white px-4 py-2 rounded w-50"
  >
    Edit
  </button>

  <button
    onClick={() => deleteBlog(blog._id)}
    className="bg-red-600 text-white px-4 py-2 rounded w-50"
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

export default AdminBlogs;






// import { useEffect, useState } from "react";
// import API from "../../api";

// function AdminBlogs() {
//   const [file, setFile] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     category: "",
//     date: "",
//     excerpt: "",
//     content: "",
//   });

//   const [blogs, setBlogs] = useState([]);

//   // Load all blogs
//   const fetchBlogs = async () => {
//     const res = await API.get("/blogs");
//     setBlogs(res.data.blogs);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   // Add Blog
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert("Please upload an image");
//       return;
//     }

//     const data = new FormData();
//     data.append("title", form.title);
//     data.append("category", form.category);
//     data.append("date", form.date);
//     data.append("excerpt", form.excerpt);
//     data.append("content", form.content);
//     data.append("image", file); // ⬅ FILE for cloudinary upload

//     try {
//       await API.post("/blogs", data);
//       alert("Blog added!");

//       setForm({
//         title: "",
//         category: "",
//         date: "",
//         excerpt: "",
//         content: "",
//       });
//       setFile(null);

//       fetchBlogs();
//     } catch (error) {
//       console.error("Blog Upload Error:", error);
//     }
//   };

//   // Delete blog
//   const deleteBlog = async (id) => {
//     if (!window.confirm("Are you sure?")) return;

//     await API.delete(`/blogs/${id}`);
//     fetchBlogs();
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">Blogs Admin</h1>

//       {/* Blog Form */}
//       <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">

//         <input
//           type="text"
//           className="w-full border p-2 rounded"
//           placeholder="Blog Title"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           required
//         />

//         <input
//           type="text"
//           className="w-full border p-2 rounded"
//           placeholder="Category"
//           value={form.category}
//           onChange={(e) => setForm({ ...form, category: e.target.value })}
//           required
//         />

//         <input
//           type="date"
//           className="w-full border p-2 rounded"
//           value={form.date}
//           onChange={(e) => setForm({ ...form, date: e.target.value })}
//           required
//         />

//         {/* Choose File (Same as Gallery Style) */}
//         <div className="flex flex-col gap-3">
//           <label className="font-medium text-gray-700">Upload Blog Image</label>

//           <div className="flex items-center gap-4">
//             <label
//               htmlFor="blogFile"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
//             >
//               Choose File
//             </label>

//             <span className="text-gray-600 text-sm">
//               {file ? file.name : "No file chosen"}
//             </span>
//           </div>

//           <input
//             id="blogFile"
//             type="file"
//             className="hidden"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>

//         <textarea
//           className="w-full border p-2 rounded"
//           placeholder="Excerpt"
//           value={form.excerpt}
//           onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
//           required
//         />

//         <textarea
//           className="w-full border p-2 rounded h-40"
//           placeholder="Content (HTML allowed)"
//           value={form.content}
//           onChange={(e) => setForm({ ...form, content: e.target.value })}
//           required
//         />

//         <button className="bg-green-600 text-white px-4 py-2 rounded">
//           Add Blog
//         </button>
//       </form>

//       {/* All Blogs */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//         {blogs.map((blog) => (
//           <div
//             key={blog._id}
//             className="rounded shadow border p-3 flex flex-col"
//           >
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="w-full h-40 object-cover rounded"
//             />

//             <h2 className="font-semibold text-lg mt-2">{blog.title}</h2>
//             <p className="text-sm text-gray-600">{blog.category} • {blog.date}</p>
//             <p className="text-sm mt-2 text-gray-700">{blog.excerpt}</p>

//             <button
//               onClick={() => deleteBlog(blog._id)}
//               className="bg-red-600 text-white px-4 py-2 rounded mt-3"
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AdminBlogs;
