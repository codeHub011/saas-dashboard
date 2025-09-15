import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4 space-y-6">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <nav className="flex flex-col space-y-3">
        <Link to="/dashboard" className="hover:text-blue-400">Contracts</Link>
        <Link to="#" className="hover:text-blue-400">Insights</Link>
        <Link to="#" className="hover:text-blue-400">Reports</Link>
        <Link to="#" className="hover:text-blue-400">Settings</Link>
      </nav>
    </div>
  );
}
