import { useEffect, useState } from "react";
import API from "../../api";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const res = await API.get("/contacts");
      setContacts(res.data.data || []);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-bold mb-6">📩 Contact Form Submissions</h1>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : contacts.length === 0 ? (
        <p className="text-gray-500">No messages received yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b text-left font-semibold">Name</th>
                <th className="py-3 px-4 border-b text-left font-semibold">Email</th>
                <th className="py-3 px-4 border-b text-left font-semibold">Message</th>
                <th className="py-3 px-4 border-b text-left font-semibold">Submitted</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50 align-top">
                  <td className="py-3 px-4 border-b">{item.name}</td>
                  <td className="py-3 px-4 border-b">{item.email}</td>

                  {/* FULL message visible here */}
                  <td className="py-3 px-4 border-b whitespace-normal max-w-md">
                    {item.message}
                  </td>

                  <td className="py-3 px-4 border-b text-sm text-gray-500">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
