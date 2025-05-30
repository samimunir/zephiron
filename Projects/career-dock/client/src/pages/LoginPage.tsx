import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
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

    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Login failed.");
      }

      alert("Login successful!");
      navigate("/dashboard");
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
          <button
            type="submit"
            className="px-2 py-1 border-1 border-red-500 text-zinc-100 bg-red-500"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
