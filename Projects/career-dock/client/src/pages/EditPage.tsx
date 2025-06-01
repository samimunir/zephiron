import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  MdAssignment,
  MdCategory,
  MdHub,
  MdLogin,
  MdTitle,
} from "react-icons/md";
import { toast } from "react-toastify";

const EditPage = () => {
  const { user } = useAuth();

  const params = useParams();
  const recordId = params.id;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    company: "",
    type: "",
    url: "",
    status: "",
    city: "",
    state: "",
    country: "",
    description: "",
    salary: 0.0,
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
      toast.error("Please provide all required fields.", {
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    const newFormData = {
      userId: user?.id,
      title: formData.title,
      category: formData.category,
      company: formData.company,
      type: formData.type,
      url: formData.url,
      status: formData.status,
      city: formData.city,
      state: formData.state,
      country: formData.country,
      description: formData.description,
      salary: formData.salary,
    };

    try {
      const res = await fetch(`http://localhost:3000/api/records/${recordId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newFormData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to update record.");
      }

      toast.success("Record updated successfully.", {
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

  const fetchRecord = async () => {
    const res = await fetch(`http://localhost:3000/api/records/${recordId}`, {
      method: "GET",
    });

    const data = await res.json();

    const record = data.record;
    setFormData({
      title: record.title,
      category: record.category,
      company: record.company,
      type: record.type,
      url: record.url,
      status: record.status,
      city: record.city,
      state: record.state,
      country: record.country,
      description: record.description,
      salary: record.salary,
    });
  };

  useEffect(() => {
    fetchRecord();
  }, []);

  return (
    <main className="flex items-center justify-center">
      <section>
        <h1 className="flex items-center justify-center gap-2 text-zinc-100 text-5xl font-semibold">
          <span>
            Edit your{" "}
            <span className="text-amber-500 font-bold">Career-Dock </span>
            Record
          </span>
          <MdLogin className="text-amber-500 font-bold" />
        </h1>
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleFormSubmit}
            className="border-2 border-amber-500 p-16 my-16 rounded-md shadow-2xl w-[100%]"
          >
            <div className="flex items-center justify-between">
              <div className="text-2xl flex items-center gap-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdTitle className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Title"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdCategory className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="Category"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
              <div className="text-2xl flex items-center gap-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdHub className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdAssignment className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  placeholder="on-site | hybrid | remote"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdAssignment className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="url"
                  value={formData.url}
                  onChange={handleInputChange}
                  placeholder="URL"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdAssignment className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  placeholder="Status"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdAssignment className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdAssignment className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdAssignment className="text-5xl text-amber-500" />
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
            </div>
            <div className="flex items-center">
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl w-full">
                <label>
                  <MdAssignment className="text-5xl text-amber-500" />
                </label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-2xl flex items-center gap-4 my-4 border-b-2 border-amber-500 py-4 shadow-2xl">
                <label>
                  <MdAssignment className="text-5xl text-amber-500" />
                </label>
                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="$/YEAR"
                  className="outline-none text-amber-500 placeholder:text-amber-500 px-2 py-1"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button
                type="submit"
                className="border-2 border-amber-500 rounded-md p-2 w-full text-xl flex items-center justify-center gap-2 text-amber-500 font-semibold hover:bg-amber-500 hover:text-zinc-900 hover:scale-110 transition-all shadow-2xl"
              >
                Update Record <MdLogin />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default EditPage;
