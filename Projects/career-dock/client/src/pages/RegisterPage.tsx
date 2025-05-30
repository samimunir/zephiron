import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      alert("Passwords do not match.");
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

      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <main className="h-[600px] border-1 border-red-500">
      <h1 className="text-center text-4xl text-zinc-100">REGISTER PAGE</h1>
      <div className="flex items-center justify-center mt-32">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="firstName"
            className="block border-1 border-zinc-100 text-zinc-100 placeholder:text-zinc-100"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="lastName"
            className="block border-1 border-zinc-100 text-zinc-100 placeholder:text-zinc-100"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="email"
            className="block border-1 border-zinc-100 text-zinc-100 placeholder:text-zinc-100"
          />
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="password"
            className="block border-1 border-zinc-100 text-zinc-100 placeholder:text-zinc-100"
          />
          <input
            type="text"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="confirmPassword"
            className="block border-1 border-zinc-100 text-zinc-100 placeholder:text-zinc-100"
          />
          <input
            type="text"
            name="adminCode"
            value={formData.adminCode}
            onChange={handleInputChange}
            placeholder="adminCode"
            className="block border-1 border-zinc-100 text-zinc-100 placeholder:text-zinc-100"
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            placeholder="country"
            className="block border-1 border-zinc-100 text-zinc-100 placeholder:text-zinc-100"
          />
          <button
            type="submit"
            className="px-2 py-1 border-1 border-red-500 text-zinc-100 bg-red-500"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
