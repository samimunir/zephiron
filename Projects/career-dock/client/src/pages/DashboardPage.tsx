import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import RecordCard from "../components/RecordCard";
import { toast } from "react-toastify";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
} from "recharts";

const COLORS = ["#0099ff", "#00ff99", "#ffcc00", "#ff0066", "#9966ff"];

const STATUS_COLORS: { [key: string]: string } = {
  accepted: "#4ade80", // green
  rejected: "#f87171", // red
  pending: "#facc15", // yellow
  closed: "#a78bfa", // purple
};

type Record = {
  _id: string;
  title: string;
  category: string;
  company: string;
  city: string;
  country: string;
  type: string;
  salary: number;
  description: string;
  url: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

const DashboardPage = () => {
  const { user } = useAuth();

  const userId = user?.id;

  const [records, setRecords] = useState<Record[]>([]);

  const total = records.length;
  const totalSalary = records.reduce((sum, r) => sum + r.salary, 0);
  const avgSalary = (totalSalary / total).toFixed(2);
  const highestSalary = Math.max(...records.map((r) => r.salary));
  const lowestSalary = Math.min(...records.map((r) => r.salary));

  const applicationsOverTime = Object.entries(
    records.reduce((acc, cur) => {
      const day = new Date(cur.createdAt).toLocaleDateString();
      acc[day] = (acc[day] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number })
  )
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const recordsByType = Object.entries(
    records.reduce((acc, cur) => {
      acc[cur.type] = (acc[cur.type] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number })
  ).map(([name, value]) => ({ name, value }));

  const recordsByCategory = Object.entries(
    records.reduce((acc, cur) => {
      acc[cur.category] = (acc[cur.category] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number })
  ).map(([name, value]) => ({ name, value }));

  const countryDistribution = Object.entries(
    records.reduce((acc, record) => {
      acc[record.country] = (acc[record.country] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number })
  ).map(([name, value]) => ({ name, value }));

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
      toast.error("Failed to delete record.", {
        autoClose: 3000,
        theme: "dark",
      });
    } else {
      toast.success("Successfully deleted record.", {
        autoClose: 3000,
        theme: "dark",
      });
    }
    fetchRecords();
  };

  const statusDistribution = Object.entries(
    records.reduce((acc, record) => {
      acc[record.status] = (acc[record.status] || 0) + 1;
      return acc;
    }, {} as { [key: string]: number })
  ).map(([name, value]) => ({ name, value }));

  const getStatusColor = (status: string, index: number): string => {
    return STATUS_COLORS[status] ?? COLORS[index % COLORS.length];
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <main className="p-8 w-full">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-4xl text-zinc-300">
            Welcome to your Dashboard{" "}
            <span className="text-sky-500 font-bold">
              {user?.firstName}, {user?.lastName[0]}.
            </span>
          </p>
        </div>
        <div>
          <p className="text-2xl text-amber-500 uppercase">{user?.email}</p>
        </div>
        {user?.location.country && (
          <div>
            <p className="text-2xl text-emerald-500 uppercase">
              {user?.location.country}
            </p>
          </div>
        )}
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 my-8">
        <div className="bg-zinc-800 text-white p-4 rounded-md shadow">
          <h3 className="text-sm text-zinc-400">Total Records</h3>
          <p className="text-2xl font-bold">{total}</p>
        </div>
        <div className="bg-zinc-800 text-white p-4 rounded-md shadow">
          <h3 className="text-sm text-zinc-400">Total Salary</h3>
          <p className="text-2xl font-bold">${totalSalary.toLocaleString()}</p>
        </div>
        <div className="bg-zinc-800 text-white p-4 rounded-md shadow">
          <h3 className="text-sm text-zinc-400">Avg Salary</h3>
          <p className="text-2xl font-bold">${avgSalary}</p>
        </div>
        <div className="bg-zinc-800 text-white p-4 rounded-md shadow">
          <h3 className="text-sm text-zinc-400">Salary Range</h3>
          <p className="text-lg font-bold">
            ${lowestSalary} - ${highestSalary}
          </p>
        </div>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-8 my-8 border-b-2 border-amber-500">
        {/* Pie */}
        <div className="bg-zinc-900 p-4 rounded shadow">
          <h2 className="text-2xl text-white mb-2">Job Type Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={recordsByType}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {recordsByType.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar */}
        <div className="bg-zinc-900 p-4 rounded shadow">
          <h2 className="text-2xl text-white mb-2">Records per Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={recordsByCategory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#00ff99" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line */}
        <div className="col-span-1 lg:col-span-2 bg-zinc-900 p-4 rounded shadow">
          <h2 className="text-2xl text-white mb-2">Applications Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={applicationsOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" stroke="#0099ff" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="col-span-1 lg:col-span-2 bg-zinc-900 p-4 rounded shadow">
          <h2 className="text-2xl text-white mb-2">Applications per Country</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={countryDistribution}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {countryDistribution.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="col-span-1 lg:col-span-2 bg-zinc-900 p-4 rounded shadow">
          <h2 className="text-2xl text-white mb-2">
            Application Status Breakdown
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={statusDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#60a5fa">
                {statusDistribution.map((entry, index) => (
                  <Cell
                    key={`bar-${index}`}
                    fill={getStatusColor(entry.name, index)}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex items-center gap-8 mt-8 mx-auto overflow-y-auto overflow-x-hidden py-4 flex-wrap">
        {records.length === 0 && (
          <p className="text-5xl text-rose-500 font-bold text-center">
            NO RECORDS
          </p>
        )}
        {records.map((record: Record) => (
          <RecordCard
            id={record._id}
            key={record._id}
            title={record.title}
            category={record.category}
            company={record.company}
            city={record.city}
            country={record.country}
            type={record.type}
            salary={record.salary}
            description={record.description}
            url={record.url}
            status={record.status}
            createdAt={record.createdAt}
            updatedAt={record.updatedAt}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </main>
  );
};

export default DashboardPage;
