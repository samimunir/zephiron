import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

interface AuthFormProps {
  mode: "login" | "register";
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // only for register
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = mode === "login";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && !name)) {
      toast.error("Please fill all fields.");
      return;
    }

    login();
    toast.success(`${isLogin ? "Logged in" : "Registered"} successfully!`);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-900 shadow-lg p-8 rounded-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-white">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {!isLogin && (
          <div>
            <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
            />
          </div>
        )}

        <div>
          <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
            Password
          </label>
          <div className="flex items-center border rounded bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-transparent text-zinc-800 dark:text-white outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="px-3 text-sm text-blue-600 dark:text-blue-400"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-red-600 hover:bg-red-700 transition text-white rounded font-semibold"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="text-sm text-center text-zinc-600 dark:text-zinc-400">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Login
              </Link>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
