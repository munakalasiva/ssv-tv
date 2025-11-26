import { useEffect, useState } from "react";
import API from "../../api";

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await API.get("/bookings");
      setBookings(res.data.data || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-bold mb-6">🛠️ Repair Booking Requests</h1>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : bookings.length === 0 ? (
        <p className="text-gray-500">No booking requests yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 border-b text-left font-semibold">Name</th>
                <th className="py-3 px-4 border-b text-left font-semibold">Phone</th>
                <th className="py-3 px-4 border-b text-left font-semibold">Address</th>
                <th className="py-3 px-4 border-b text-left font-semibold">TV Brand</th>
                <th className="py-3 px-4 border-b text-left font-semibold">Problem</th>
                <th className="py-3 px-4 border-b text-left font-semibold">Preferred</th>
                <th className="py-3 px-4 border-b text-left font-semibold">Photo</th>
                <th className="py-3 px-4 border-b text-left font-semibold">Submitted</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50 align-top">
                  <td className="py-3 px-4 border-b">{item.name}</td>
                  <td className="py-3 px-4 border-b">{item.phone}</td>
                  <td className="py-3 px-4 border-b whitespace-normal max-w-sm">
                    {item.address}
                  </td>

                  <td className="py-3 px-4 border-b">{item.tvBrand}</td>
                  <td className="py-3 px-4 border-b whitespace-normal max-w-sm">
                    {item.problemType}
                  </td>

                  <td className="py-3 px-4 border-b">
                    {item.date}
                    <br />
                    {item.time}
                  </td>

                  <td className="py-3 px-4 border-b">
                    {item.photo ? (
                      <a
                        href={item.photo}
                        download
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        Download
                      </a>
                    ) : (
                      <span className="text-gray-400">No file</span>
                    )}
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
