import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CreatePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    company: "",
    type: "",
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

    if (
      !formData.title ||
      !formData.category ||
      !formData.company ||
      !formData.type
    ) {
      alert("Please provide all required fields.");
      return;
    }

    const newFormData = {
      userId: user?.id,
      title: formData.title,
      category: formData.category,
      company: formData.company,
      type: formData.type,
    };

    try {
      const res = await fetch("http://localhost:3000/api/records/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFormData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to create record.");
      }

      alert("Record created successfully.");
      navigate("/dashboard");
    } catch (err: any) {
      alert(err.message);
    }
  };
  return (
    <main className="h-[600px] border-1 border-red-500">
      <h1 className="text-center text-4xl text-zinc-100">CREATE PAGE</h1>
      <div className="flex items-center justify-center mt-32">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="title"
            className="block border-1 border-zinc-100 text-zinc-100 placeholder:text-zinc-100"
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="category"
            className="block border-1 border-zinc-100 text-zinc-100 placeholder:text-zinc-100"
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="company"
            className="block border-1 border-zinc-100 text-zinc-100 placeholder:text-zinc-100"
          />
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            placeholder="type"
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

export default CreatePage;
