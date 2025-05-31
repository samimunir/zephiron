import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Record = {
  _id: string;
  title: string;
  category: string;
  company: string;
  type: string;
};

const DashboardPage = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  const userId = user?.id;

  const [records, setRecords] = useState<Record[]>([]);

  const fetchRecords = async () => {
    const res = await fetch("http://localhost:3000/api/records/user-records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    const data = await res.json();

    setRecords(data);
  };

  const handleDelete = async (recordId: string) => {
    const res = await fetch(`http://localhost:3000/api/records/${recordId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Failed to delete record.");
    } else {
      alert("Successfully deleted record.");
    }
    fetchRecords();
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <main className="h-[600px] border-1 border-red-500">
      <h1 className="text-center text-4xl text-zinc-300">DASHBOARD PAGE</h1>
      <h2 className="text-3xl">
        <span className="text-zinc-100 font-semibold">Welcome, </span>
        <span className="text-sky-500 font-bold">
          {user?.firstName}, {user?.lastName[0]}.
        </span>
      </h2>
      <p className="text-2xl text-zinc-500">{user?.email}</p>
      <div className="flex items-center justify-center gap-8 mt-8">
        {records.length === 0 && (
          <p className="text-5xl text-rose-500 font-bold text-center">
            NO RECORDS
          </p>
        )}
        {records.map((record: Record) => (
          <div
            key={record._id}
            className="bg-zinc-800 border-1 border-zinc-100 p-4 rounded-md w-[200px] hover:shadow-2xl transition-all"
          >
            <h1 className="text-sky-500 font-semibold">{record.title}</h1>
            <h2 className="">{record.category}</h2>
            <h3 className="text-zinc-100 font-bold">{record.company}</h3>
            <h4 className="text-zinc-300">{record.type}</h4>
            <div>
              <button
                onClick={() => navigate(`/record/edit/${record._id}`)}
                className="px-2 py-1 bg-amber-500 border-1 border-amber-500 text-zinc-900 font-semibold hover:bg-zinc-900 hover:text-amber-500 transition-all cursor-default"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(record._id)}
                className="px-2 py-1 bg-rose-500 border-1 border-rose-500 text-zinc-100 font-semibold hover:bg-zinc-100 hover:text-rose-500 transition-all cursor-default"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default DashboardPage;
