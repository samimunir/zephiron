import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  return (
    <nav>
      <div>
        <h1 className="text-4xl font-bold">Career Dock</h1>
      </div>
      <div className="border-1 border-zinc-900 flex gap-8 cursor-default">
        {!user && (
          <>
            <p onClick={() => navigate("/login")}>Login</p>
            <p onClick={() => navigate("/register")}>Register</p>
          </>
        )}
        {user && (
          <>
            <p
              onClick={() => navigate("/dashboard")}
              className="text-amber-500 font-semibold"
            >
              Dashboard
            </p>
            <p
              onClick={() => navigate("/record/create")}
              className="text-sky-500 font-semibold"
            >
              Create
            </p>
            <p onClick={logout} className="text-red-500 font-semibold">
              Logout
            </p>
          </>
        )}
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
