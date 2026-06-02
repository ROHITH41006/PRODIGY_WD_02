import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/dashboard"
          className="text-2xl font-bold text-blue-500"
        >
          EMS
        </Link>

        <div className="flex gap-6 items-center">

          <Link
            to="/dashboard"
            className="hover:text-blue-400"
          >
            Dashboard
          </Link>

          <Link
            to="/add-employee"
            className="hover:text-blue-400"
          >
            Add Employee
          </Link>

          <Link
            to="/employees"
            className="hover:text-blue-400"
          >
            Employees
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;