// // import { useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";

// const UserDashboardPage = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   //   useEffect(() => {
//   //     if (!user) {
//   //       navigate("/login");
//   //     }
//   //   }, [user, navigate]);

//   if (!user) return null;

//   return (
//     <div className="min-h-screen px-6 py-10 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
//       <div className="max-w-5xl mx-auto space-y-10 mt-16">
//         <div className="flex items-center justify-between">
//           <h1 className="text-3xl font-bold">
//             Welcome, {user.firstName} {user.lastName}!
//           </h1>
//           <button
//             onClick={() => navigate("/profile/edit")}
//             className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//           >
//             Edit Profile
//           </button>
//         </div>

//         <section className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow">
//           <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
//           <ul className="space-y-3">
//             {/* Replace with dynamic orders later */}
//             <li className="p-4 bg-white dark:bg-zinc-700 rounded-md shadow-sm">
//               <strong>Order #12345</strong> – 2x Exhaust Kits – Placed on
//               2024-06-01
//             </li>
//             <li className="p-4 bg-white dark:bg-zinc-700 rounded-md shadow-sm">
//               <strong>Order #67890</strong> – 1x Suspension Upgrade – Placed on
//               2024-06-05
//             </li>
//           </ul>
//         </section>

//         <section className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow">
//           <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
//           <ul className="space-y-3">
//             {/* Replace with dynamic bookings later */}
//             <li className="p-4 bg-white dark:bg-zinc-700 rounded-md shadow-sm">
//               <strong>Ceramic Coating</strong> – Booked for 2024-06-10, 10:00 AM
//             </li>
//             <li className="p-4 bg-white dark:bg-zinc-700 rounded-md shadow-sm">
//               <strong>Brake Replacement</strong> – Booked for 2024-06-14, 2:00
//               PM
//             </li>
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default UserDashboardPage;

// import { useTheme } from "../context/ThemeContext";
// import { useEffect } from "react";
// import { motion } from "framer-motion";

// const metrics = [
//   { label: "Total Orders", value: 12 },
//   { label: "Services Booked", value: 5 },
//   { label: "Cart Items", value: 3 },
//   { label: "Wishlist", value: 8 },
// ];

// const recentOrders = [
//   {
//     id: "#A1001",
//     product: "Carbon Fiber Spoiler",
//     status: "Delivered",
//     date: "2024-05-02",
//   },
//   {
//     id: "#A1002",
//     product: "Performance Air Intake",
//     status: "Processing",
//     date: "2024-05-07",
//   },
// ];

// const recentBookings = [
//   {
//     id: "#B1001",
//     service: "Brake Pad Replacement",
//     status: "Completed",
//     date: "2024-05-01",
//   },
//   {
//     id: "#B1002",
//     service: "Oil Change",
//     status: "Upcoming",
//     date: "2024-06-14",
//   },
// ];

// const UserDashboardPage = () => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <main
//       className={`pt-28 px-6 pb-16 min-h-screen transition-colors duration-300 ${
//         isDark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
//       }`}
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-3xl font-bold mb-8 text-center"
//       >
//         Welcome to Your Dashboard
//       </motion.h1>

//       {/* KPI Cards */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//         {metrics.map((metric, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className={`rounded-xl shadow-md p-6 ${
//               isDark
//                 ? "bg-zinc-900 border border-zinc-700"
//                 : "bg-white border border-zinc-200"
//             }`}
//           >
//             <p className="text-sm uppercase text-zinc-500 dark:text-zinc-400">
//               {metric.label}
//             </p>
//             <p className="text-2xl font-bold mt-2">{metric.value}</p>
//           </motion.div>
//         ))}
//       </section>

//       {/* Orders & Bookings */}
//       <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* Recent Orders */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className={`rounded-xl shadow-md p-6 ${
//             isDark
//               ? "bg-zinc-900 border border-zinc-700"
//               : "bg-white border border-zinc-200"
//           }`}
//         >
//           <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
//           <ul className="space-y-3">
//             {recentOrders.map((order) => (
//               <li key={order.id} className="flex justify-between items-center">
//                 <div>
//                   <p className="font-medium">{order.product}</p>
//                   <p className="text-sm text-zinc-500">{order.date}</p>
//                 </div>
//                 <span className="text-sm px-3 py-1 rounded-full bg-blue-500 text-white">
//                   {order.status}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Recent Bookings */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className={`rounded-xl shadow-md p-6 ${
//             isDark
//               ? "bg-zinc-900 border border-zinc-700"
//               : "bg-white border border-zinc-200"
//           }`}
//         >
//           <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
//           <ul className="space-y-3">
//             {recentBookings.map((booking) => (
//               <li
//                 key={booking.id}
//                 className="flex justify-between items-center"
//               >
//                 <div>
//                   <p className="font-medium">{booking.service}</p>
//                   <p className="text-sm text-zinc-500">{booking.date}</p>
//                 </div>
//                 <span
//                   className={`text-sm px-3 py-1 rounded-full ${
//                     booking.status === "Completed"
//                       ? "bg-green-500 text-white"
//                       : "bg-yellow-500 text-white"
//                   }`}
//                 >
//                   {booking.status}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </section>
//     </main>
//   );
// };

// export default UserDashboardPage;

import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Link } from "react-router-dom";

const metrics = [
  { label: "Total Orders", value: 12 },
  { label: "Services Booked", value: 5 },
  { label: "Cart Items", value: 3 },
  { label: "Wishlist", value: 8 },
];

const recentOrders = [
  {
    id: "#A1001",
    product: "Carbon Fiber Spoiler",
    status: "Delivered",
    date: "2024-05-02",
  },
  {
    id: "#A1002",
    product: "Performance Air Intake",
    status: "Processing",
    date: "2024-05-07",
  },
];

const recentBookings = [
  {
    id: "#B1001",
    service: "Brake Pad Replacement",
    status: "Completed",
    date: "2024-05-01",
  },
  {
    id: "#B1002",
    service: "Oil Change",
    status: "Upcoming",
    date: "2024-06-14",
  },
];

const chartData = [
  { name: "Jan", Orders: 2, Bookings: 1 },
  { name: "Feb", Orders: 3, Bookings: 2 },
  { name: "Mar", Orders: 4, Bookings: 1 },
  { name: "Apr", Orders: 2, Bookings: 3 },
];

const UserDashboardPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Sample user info — replace with auth context or props
  const user = {
    name: "Sami Munir",
    email: "sami@example.com",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className={`pt-28 px-6 pb-20 min-h-screen transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
      }`}
    >
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
          <p className="text-zinc-500 dark:text-zinc-400">{user.email}</p>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/edit-profile"
            className="px-5 py-2 rounded-full border border-zinc-600 dark:border-zinc-400 hover:bg-zinc-800 transition"
          >
            Edit Profile
          </Link>
          <Link
            to="/products"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full"
          >
            Shop Products
          </Link>
          <Link
            to="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full"
          >
            Book a Service
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-xl shadow-md p-6 ${
              isDark
                ? "bg-zinc-900 border border-zinc-700"
                : "bg-white border border-zinc-200"
            }`}
          >
            <p className="text-sm uppercase text-zinc-500 dark:text-zinc-400">
              {metric.label}
            </p>
            <p className="text-2xl font-bold mt-2">{metric.value}</p>
          </motion.div>
        ))}
      </section>

      {/* Chart */}
      <section
        className={`mb-12 rounded-xl shadow-md p-6 ${
          isDark
            ? "bg-zinc-900 border border-zinc-700"
            : "bg-white border border-zinc-200"
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">Monthly Activity</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" stroke={isDark ? "#d4d4d8" : "#333"} />
            <YAxis stroke={isDark ? "#d4d4d8" : "#333"} />
            <Tooltip />
            <Bar dataKey="Orders" fill="#ef4444" />
            <Bar dataKey="Bookings" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      {/* Orders & Bookings */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`rounded-xl shadow-md p-6 ${
            isDark
              ? "bg-zinc-900 border border-zinc-700"
              : "bg-white border border-zinc-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
          <ul className="space-y-3">
            {recentOrders.map((order) => (
              <li key={order.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{order.product}</p>
                  <p className="text-sm text-zinc-500">{order.date}</p>
                </div>
                <span className="text-sm px-3 py-1 rounded-full bg-blue-500 text-white">
                  {order.status}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`rounded-xl shadow-md p-6 ${
            isDark
              ? "bg-zinc-900 border border-zinc-700"
              : "bg-white border border-zinc-200"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
          <ul className="space-y-3">
            {recentBookings.map((booking) => (
              <li
                key={booking.id}
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{booking.service}</p>
                  <p className="text-sm text-zinc-500">{booking.date}</p>
                </div>
                <span
                  className={`text-sm px-3 py-1 rounded-full ${
                    booking.status === "Completed"
                      ? "bg-green-500 text-white"
                      : "bg-yellow-500 text-white"
                  }`}
                >
                  {booking.status}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>
    </main>
  );
};

export default UserDashboardPage;
