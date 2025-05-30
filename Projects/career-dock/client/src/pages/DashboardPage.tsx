import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();
  return (
    <main className="h-[600px] border-1 border-red-500">
      <h1>DASHBOARD PAGE</h1>
      <h2>
        {user?.firstName}, {user?.lastName}
      </h2>
      <p>{user?.email}</p>
    </main>
  );
};

export default DashboardPage;
