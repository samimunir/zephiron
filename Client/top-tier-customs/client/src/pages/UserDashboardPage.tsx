// import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserDashboardPage = () => {
  const { user } = useAuth();
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (!user) {
  //       navigate("/login");
  //     }
  //   }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen px-6 py-10 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            Welcome, {user.firstName} {user.lastName}!
          </h1>
          <button
            onClick={() => toast("Edit profile coming soon")}
            className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        </div>

        <section className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
          <ul className="space-y-3">
            {/* Replace with dynamic orders later */}
            <li className="p-4 bg-white dark:bg-zinc-700 rounded-md shadow-sm">
              <strong>Order #12345</strong> – 2x Exhaust Kits – Placed on
              2024-06-01
            </li>
            <li className="p-4 bg-white dark:bg-zinc-700 rounded-md shadow-sm">
              <strong>Order #67890</strong> – 1x Suspension Upgrade – Placed on
              2024-06-05
            </li>
          </ul>
        </section>

        <section className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
          <ul className="space-y-3">
            {/* Replace with dynamic bookings later */}
            <li className="p-4 bg-white dark:bg-zinc-700 rounded-md shadow-sm">
              <strong>Ceramic Coating</strong> – Booked for 2024-06-10, 10:00 AM
            </li>
            <li className="p-4 bg-white dark:bg-zinc-700 rounded-md shadow-sm">
              <strong>Brake Replacement</strong> – Booked for 2024-06-14, 2:00
              PM
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UserDashboardPage;
