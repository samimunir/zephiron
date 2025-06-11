import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const EditProfileForm = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const isDark = theme === "dark";

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-12">
      <div
        className={`rounded-lg shadow-lg p-6 space-y-6 border ${
          isDark
            ? "bg-zinc-900 border-zinc-700 text-zinc-100"
            : "bg-white border-zinc-200 text-zinc-900"
        }`}
      >
        <h2 className="text-2xl font-bold text-center">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["firstName", "lastName", "phone", "city", "country"].map(
              (field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark
                      ? "bg-zinc-800 text-zinc-100 border-zinc-600"
                      : "bg-white text-zinc-900 border-zinc-300"
                  }`}
                />
              )
            )}

            <input
              name="email"
              type="email"
              disabled
              value={formData.email}
              className={`w-full px-4 py-2 rounded border cursor-not-allowed opacity-70 ${
                isDark
                  ? "bg-zinc-800 text-zinc-400 border-zinc-600"
                  : "bg-zinc-100 text-zinc-500 border-zinc-300"
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
