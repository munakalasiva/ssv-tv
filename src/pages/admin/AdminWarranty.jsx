import { useState, useEffect } from "react";
import API from "../../api";

function AdminWarranty() {
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    tvBrand: "",
    partName: "",
    warrantyNumber: 0,
    warrantyUnit: "months",
  });

  const [warranties, setWarranties] = useState([]);
  console.log(warranties);
  // Fetch all warranties


  const fetchWarranties = async () => {
  const res = await API.get("/warranty/repairs");

  console.log("API →", res.data);

  setWarranties(res.data.data || []);
};


  useEffect(() => {
    fetchWarranties();
  }, []);

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/warranty/repair", form);
    alert("Warranty Created! ID: " + res.data.warrantyId);

    fetchWarranties(); // refresh after new insert
  };

  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Warranty Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl bg-white p-6 rounded-lg shadow">
        
        <input className="border p-2 w-full" placeholder="Customer Name"
          onChange={e => setForm({ ...form, customerName: e.target.value })} />

        <input className="border p-2 w-full" placeholder="Phone"
          onChange={e => setForm({ ...form, phone: e.target.value })} />

        <input className="border p-2 w-full" placeholder="TV Brand"
          onChange={e => setForm({ ...form, tvBrand: e.target.value })} />

        <input className="border p-2 w-full" placeholder="Part Name"
          onChange={e => setForm({ ...form, partName: e.target.value })} />

        <div className="flex gap-3">
          <select
            className="border p-2"
            onChange={e => setForm({ ...form, warrantyNumber: e.target.value })}
          >
            {[...Array(13).keys()].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>

          <select
            className="border p-2"
            onChange={e => setForm({ ...form, warrantyUnit: e.target.value })}
          >
            <option value="months">Months</option>
            <option value="years">Years</option>
          </select>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Repair & Generate Warranty
        </button>
      </form>

      {/* WARRANTY TABLE */}
      <h2 className="text-xl font-semibold mt-10 mb-4">All Warranties</h2>

      <div className="overflow-x-auto">
        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Customer</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Brand</th>
              <th className="border p-2">Part</th>
              <th className="border p-2">Warranty</th>
              <th className="border p-2">Warranty ID</th>
            </tr>
          </thead>

          <tbody>
            {warranties.map((w) => (
              <tr key={w._id}>
                <td className="border p-2">{w.customerName}</td>
                <td className="border p-2">{w.phone}</td>
                <td className="border p-2">{w.tvBrand}</td>
                <td className="border p-2">{w.partName}</td>
                <td className="border p-2">
                  {w.warrantyNumber} {w.warrantyUnit}
                </td>
                <td className="border p-2">{w.warrantyId}</td>
              </tr>
            ))}

            {warranties.length === 0 && (
              <tr>
                <td className="border p-2 text-center" colSpan="6">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminWarranty;


