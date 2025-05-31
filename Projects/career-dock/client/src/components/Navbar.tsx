import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  MdAddBox,
  MdDashboard,
  MdApi,
  MdLogin,
  MdLogout,
  MdPersonAdd,
} from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-2xl">
      <div
        onClick={() => navigate("/")}
        className="text-amber-500 cursor-pointer"
      >
        <h1 className="flex items-center text-5xl font-bold gap-2 uppercase">
          <span>
            <MdApi />
          </span>
          <span>Career Dock</span>
        </h1>
      </div>
      <div className="border-1 border-zinc-900 flex gap-4 cursor-default">
        {!user && (
          <>
            <p
              onClick={() => navigate("/login")}
              className="border-2 border-amber-500 text-amber-500 text-lg px-2 py-1 font-semibold rounded-md w-[120px] flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-zinc-900 transition-all"
            >
              <span>Login</span>
              <span>
                <MdLogin />
              </span>
            </p>
            <p
              onClick={() => navigate("/register")}
              className="border-2 border-emerald-500 text-emerald-500 text-lg px-2 py-1 font-semibold rounded-md w-[120px] flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-zinc-100 transition-all"
            >
              <span>Register</span>
              <span>
                <MdPersonAdd />
              </span>
            </p>
          </>
        )}
        {user && (
          <>
            <p
              onClick={() => navigate("/dashboard")}
              className="border-2 border-amber-500 text-amber-500 text-lg px-2 py-1 font-semibold rounded-md w-[150px] flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-zinc-900 transition-all"
            >
              <span>Dashboard</span>
              <span>
                <MdDashboard />
              </span>
            </p>
            <p
              onClick={() => navigate("/record/create")}
              className="border-2 border-sky-500 text-sky-500 text-lg px-2 py-1 font-semibold rounded-md w-[120px] flex items-center justify-center gap-2 hover:bg-sky-500 hover:text-zinc-100 transition-all"
            >
              <span>Create</span>
              <span>
                <MdAddBox />
              </span>
            </p>
            <p
              onClick={logout}
              className="border-2 border-rose-500 text-rose-500 text-lg px-2 py-1 font-semibold rounded-md w-[120px] flex items-center justify-center gap-2 hover:bg-rose-500 hover:text-zinc-900 transition-all"
            >
              <span>Logout</span>
              <span>
                <MdLogout />
              </span>
            </p>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
