import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/contracts.json")
      .then((res) => res.json())
      .then((data) => {
        setContracts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6">
          {loading ? (
            <p>Loading...</p>
          ) : contracts.length === 0 ? (
            <p>No contracts yet</p>
          ) : (
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Parties</th>
                  <th className="p-2 border">Expiry</th>
                  <th className="p-2 border">Status</th>
                  <th className="p-2 border">Risk</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="p-2 border">
                      <Link to={`/contracts/${c.id}`} className="text-blue-600">
                        {c.name}
                      </Link>
                    </td>
                    <td className="p-2 border">{c.parties}</td>
                    <td className="p-2 border">{c.expiry}</td>
                    <td className="p-2 border">{c.status}</td>
                    <td className="p-2 border">{c.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
