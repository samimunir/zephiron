import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdAdminPanelSettings,
  MdEmail,
  MdLocationPin,
  MdLogin,
  MdPassword,
  MdPerson,
  MdShortText,
} from "react-icons/md";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    adminCode: "",
    country: "",
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

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.", {
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    const newFormData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      adminCode: formData.adminCode,
      country: formData.country,
    };

    try {
      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFormData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      toast.success("Registration successful! Please log in.", {
        autoClose: 3000,
        theme: "dark",
      });
      navigate("/login");
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
            Register for a new{" "}
            <span className="text-amber-500 font-bold">Career-Dock </span>
            account
          </span>
          <MdLogin className="text-amber-500 font-bold" />
        </h1>
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleFormSubmit}
            className="border-2 border-amber-500 p-16 my-16 rounded-md shadow-2xl w-[1000px]"
          >
            <div className="flex items-center justify-between">
              <div className="text-2xl flex items-center gap-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdPerson className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdShortText className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
            </div>
            <div>
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
            </div>
            <div className="flex items-center justify-between">
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
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdPassword className="text-5xl text-amber-500" />
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdLocationPin className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdAdminPanelSettings className="text-5xl text-amber-500" />
                </label>
                <input
                  type="password"
                  name="adminCode"
                  value={formData.adminCode}
                  onChange={handleInputChange}
                  placeholder="Optional"
                  className="outline-none text-amber-700 placeholder:text-amber-700 px-2 py-1"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button
                type="submit"
                className="border-2 border-amber-500 rounded-md p-2 w-full text-xl flex items-center justify-center gap-2 text-amber-500 font-semibold hover:bg-amber-500 hover:text-zinc-900 hover:scale-110 transition-all shadow-2xl"
              >
                Create Account <MdLogin />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
