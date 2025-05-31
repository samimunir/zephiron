import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import {
  MdAddBox,
  MdDashboard,
  MdApi,
  MdLogin,
  MdLogout,
  MdPersonAdd,
  MdArrowDownward,
} from "react-icons/md";

const Hero = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();
  return (
    <section className="border-1 border-white h-full flex items-center justify-center">
      <div>
        <div>
          <h1 className="flex items-center gap-2 text-5xl font-bold text-zinc-100 tracking-wide my-4">
            Welcome to{" "}
            <span className="text-amber-500 flex items-center gap-2">
              Career Dock <MdApi />
            </span>
          </h1>
          <h2 className="text-3xl font-semibold text-zinc-300 w-[800px] tracking-tight my-2">
            Track your job application journey with our user-friendly dashboard
            and data analytics.
          </h2>
          {user && (
            <div className="my-2">
              <h3 className="text-2xl text-zinc-500">
                View your current job application{" "}
                <span className="text-amber-500 italic">records</span> or track
                your <span className="text-amber-500 italic">metrics</span>.
              </h3>
              <div className="border-1 border-zinc-800 rounded-md flex items-center justify-evenly p-4 my-4">
                <p
                  onClick={() => navigate("/dashboard")}
                  className="border-2 border-amber-500 text-amber-500 text-lg px-2 py-1 font-semibold rounded-md w-[150px] flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-zinc-900 hover:scale-110 transition-all cursor-default"
                >
                  <span>Dashboard</span>
                  <span>
                    <MdDashboard />
                  </span>
                </p>
                <p
                  onClick={() => navigate("/record/create")}
                  className="border-2 border-sky-500 text-sky-500 text-lg px-2 py-1 font-semibold rounded-md w-[150px] flex items-center justify-center gap-2 hover:bg-sky-500 hover:text-zinc-100 hover:scale-110 transition-all cursor-default"
                >
                  <span>Create</span>
                  <span>
                    <MdAddBox />
                  </span>
                </p>
                <p
                  onClick={logout}
                  className="border-2 border-rose-500 text-rose-500 text-lg px-2 py-1 font-semibold rounded-md w-[150px] flex items-center justify-center gap-2 hover:bg-rose-500 hover:text-zinc-900 hover:scale-110 transition-all cursor-default"
                >
                  <span>Logout</span>
                  <span>
                    <MdLogout />
                  </span>
                </p>
              </div>
            </div>
          )}
          {!user && (
            <div className="my-2">
              <h3 className="text-2xl text-zinc-500 w-[800px]">
                Start tracking your job application records and track your
                metrics using our personalized user dashboard. .
              </h3>
              <h4 className="text-xl my-2 text-zinc-400 flex items-center gap-2 justify-center">
                <span>Get started below. Login OR SignUp!</span>
                <MdArrowDownward />
              </h4>
              <div className="border-1 border-zinc-800 rounded-md flex items-center justify-center gap-8 p-4 my-4 transition-all">
                <p
                  onClick={() => navigate("/login")}
                  className="border-2 border-amber-500 text-amber-500 text-lg px-2 py-1 font-semibold rounded-md w-[150px] flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-zinc-900 hover:scale-110 transition-all cursor-default"
                >
                  <span>Login</span>
                  <span>
                    <MdLogin />
                  </span>
                </p>
                <p
                  onClick={() => navigate("/register")}
                  className="border-2 border-emerald-500 text-emerald-500 text-lg px-2 py-1 font-semibold rounded-md w-[150px] flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-zinc-900 hover:scale-110 transition-all cursor-default"
                >
                  <span>Register</span>
                  <span>
                    <MdPersonAdd />
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
