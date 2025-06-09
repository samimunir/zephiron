// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import { useAuth } from "../context/AuthContext";

// interface AuthFormProps {
//   mode: "login" | "register";
// }

// const AuthForm = ({ mode }: AuthFormProps) => {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState(""); // only for register
//   const [showPassword, setShowPassword] = useState(false);

//   const isLogin = mode === "login";

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !password || (!isLogin && !name)) {
//       toast.error("Please fill all fields.");
//       return;
//     }

//     login();
//     toast.success(`${isLogin ? "Logged in" : "Registered"} successfully!`);
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-zinc-900 shadow-lg p-8 rounded-lg w-full max-w-md space-y-5"
//       >
//         <h2 className="text-2xl font-bold text-center text-zinc-800 dark:text-white">
//           {isLogin ? "Login" : "Create Account"}
//         </h2>

//         {!isLogin && (
//           <div>
//             <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
//               Name
//             </label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
//             />
//           </div>
//         )}

//         <div>
//           <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
//             Email
//           </label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
//             Password
//           </label>
//           <div className="flex items-center border rounded bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
//             <input
//               type={showPassword ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 bg-transparent text-zinc-800 dark:text-white outline-none"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword((prev) => !prev)}
//               className="px-3 text-sm text-blue-600 dark:text-blue-400"
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 bg-red-600 hover:bg-red-700 transition text-white rounded font-semibold"
//         >
//           {isLogin ? "Login" : "Register"}
//         </button>

//         <p className="text-sm text-center text-zinc-600 dark:text-zinc-400">
//           {isLogin ? (
//             <>
//               Don't have an account?{" "}
//               <Link
//                 to="/register"
//                 className="text-blue-600 dark:text-blue-400 hover:underline"
//               >
//                 Register
//               </Link>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 className="text-blue-600 dark:text-blue-400 hover:underline"
//               >
//                 Login
//               </Link>
//             </>
//           )}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default AuthForm;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
// import { useAuth } from "../context/AuthContext";

// interface AuthFormProps {
//   mode: "login" | "register";
// }

// const AuthForm = ({ mode }: AuthFormProps) => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const isLogin = mode === "login";

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     phone: "",
//     city: "",
//     country: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.email || !formData.password) {
//       toast.error("Email and password are required.");
//       return;
//     }

//     if (!isLogin) {
//       const { firstName, lastName, confirmPassword, phone, city, country } =
//         formData;

//       if (
//         !firstName ||
//         !lastName ||
//         !confirmPassword ||
//         !phone ||
//         !city ||
//         !country
//       ) {
//         toast.error("Please fill all registration fields.");
//         return;
//       }

//       if (formData.password !== formData.confirmPassword) {
//         toast.error("Passwords do not match.");
//         return;
//       }
//     }

//     login();
//     toast.success(`${isLogin ? "Logged in" : "Registered"} successfully!`);
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white dark:bg-zinc-900 shadow-xl p-8 rounded-lg w-full max-w-xl space-y-6"
//       >
//         <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-white">
//           {isLogin ? "Login" : "Register an Account"}
//         </h2>

//         {!isLogin && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
//                 City
//               </label>
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
//                 Country
//               </label>
//               <input
//                 type="text"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
//               />
//             </div>
//           </div>
//         )}

//         <div>
//           <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
//           />
//         </div>

//         <div>
//           <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
//             Password
//           </label>
//           <div className="flex items-center border rounded bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 bg-transparent text-zinc-800 dark:text-white outline-none"
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword((prev) => !prev)}
//               className="px-3 text-sm text-blue-600 dark:text-blue-400"
//             >
//               {showPassword ? "Hide" : "Show"}
//             </button>
//           </div>
//         </div>

//         {!isLogin && (
//           <div>
//             <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
//             />
//           </div>
//         )}

//         <button
//           type="submit"
//           className="w-full py-2 bg-red-600 hover:bg-red-700 transition text-white rounded font-semibold"
//         >
//           {isLogin ? "Login" : "Register"}
//         </button>

//         <p className="text-sm text-center text-zinc-600 dark:text-zinc-400">
//           {isLogin ? (
//             <>
//               Don't have an account?{" "}
//               <Link
//                 to="/register"
//                 className="text-blue-600 dark:text-blue-400 hover:underline"
//               >
//                 Register
//               </Link>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <Link
//                 to="/login"
//                 className="text-blue-600 dark:text-blue-400 hover:underline"
//               >
//                 Login
//               </Link>
//             </>
//           )}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default AuthForm;

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

  const isLogin = mode === "login";

  const [isAdmin, setIsAdmin] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
    country: "",
    adminCode: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Email and password are required.");
      return;
    }

    if (!isLogin) {
      const {
        firstName,
        lastName,
        confirmPassword,
        phone,
        city,
        country,
        adminCode,
      } = formData;

      if (
        !firstName ||
        !lastName ||
        !confirmPassword ||
        !phone ||
        !city ||
        !country
      ) {
        toast.error("Please fill all registration fields.");
        return;
      }

      if (formData.password !== confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }

      if (isAdmin && !adminCode) {
        toast.error("Admin Code is required for admin signup.");
        return;
      }
    }

    login();
    toast.success(`${isLogin ? "Logged in" : "Registered"} successfully!`);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-zinc-900 shadow-xl p-8 rounded-lg w-full max-w-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-white">
          {isLogin ? "Login" : "Register an Account"}
        </h2>

        {!isLogin && (
          <>
            <div className="flex items-center justify-between">
              <span className="text-zinc-700 dark:text-zinc-300 font-medium">
                Signing up as: {isAdmin ? "Admin" : "Customer"}
              </span>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={isAdmin}
                    onChange={() => setIsAdmin((prev) => !prev)}
                    className="sr-only"
                  />
                  <div className="w-10 h-4 bg-zinc-400 rounded-full shadow-inner"></div>
                  <div
                    className={`dot absolute left-0 top-0 bg-white w-6 h-6 rounded-full transition transform ${
                      isAdmin ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
                />
              </div>
              {isAdmin && (
                <div className="md:col-span-2">
                  <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
                    Admin Code
                  </label>
                  <input
                    type="text"
                    name="adminCode"
                    value={formData.adminCode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
                  />
                </div>
              )}
            </div>
          </>
        )}

        <div>
          <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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

        {!isLogin && (
          <div>
            <label className="block text-sm mb-1 text-zinc-700 dark:text-zinc-300">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-white outline-none focus:ring-2 ring-blue-500"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-red-600 hover:bg-red-700 transition text-white rounded font-semibold"
        >
          {isLogin ? "Login" : "Register"}
        </button>

        <p className="text-sm text-center text-zinc-600 dark:text-zinc-400">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
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
