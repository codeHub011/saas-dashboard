import { useAuth } from "../context/AuthContext";

export default function Topbar() {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3">
      <h1 className="text-xl font-semibold">Contracts Dashboard</h1>
      <div>
        {user && (
          <div className="flex items-center space-x-4">
            <span className="font-medium">{user.username}</span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
