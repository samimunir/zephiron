import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MdEmail, MdLogin, MdPassword } from "react-icons/md";
import { toast } from "react-toastify";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Failed to login. Please enter email & password.", {
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      // console.log(data);
      if (!res.ok) {
        // console.log("RES IS NOT OK");
        throw new Error(data.message || "Login failed.");
      }
      login(data.token, data.user);
      toast.success("Login successful!", {
        autoClose: 3000,
        theme: "dark",
      });
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err.message, {
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <main className="h-[100vh] flex items-center justify-center">
      <section className="">
        <h1 className="flex items-center gap-2 text-zinc-100 text-5xl font-semibold">
          <span>
            Login to your{" "}
            <span className="text-amber-500 font-bold">Career-Dock </span>
            account
          </span>
          <MdLogin className="text-amber-500 font-bold" />
        </h1>
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleFormSubmit}
            className="border-2 border-amber-500 p-16 my-16 rounded-md shadow-2xl"
          >
            <div className="text-2xl flex items-center gap-4 border-b-2 border-amber-500 py-4 shadow-2xl">
              <label>
                <MdEmail className="text-5xl text-amber-500" />
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
              />
            </div>
            <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
              <label>
                <MdPassword className="text-5xl text-amber-500" />
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
              />
            </div>
            <div className="flex items-center justify-center mt-8">
              <button
                type="submit"
                className="border-2 border-amber-500 rounded-md p-2 w-[250px] text-xl flex items-center justify-center gap-2 text-amber-500 font-semibold hover:bg-amber-500 hover:text-zinc-900 hover:scale-110 transition-all shadow-2xl"
              >
                Login <MdLogin />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
