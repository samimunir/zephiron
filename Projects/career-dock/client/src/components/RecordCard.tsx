import { useNavigate } from "react-router-dom";

type RecordCardProps = {
  id: string;
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
  handleDelete: (recordId: string) => Promise<void>;
};

const RecordCard = (props: RecordCardProps) => {
  const navigate = useNavigate();

  const createdDate = props.createdAt.substring(0, 10);
  const createdTime = props.createdAt.substring(11, 16);
  const updatedDate = props.updatedAt.substring(0, 10);
  const updatedTime = props.updatedAt.substring(11, 16);

  return (
    <div className="border-1 border-amber-500 w-[600px] shadow-2xl rounded-md p-4 cursor-default hover:scale-105 transition-all">
      <div className="flex items-center justify-between p-2">
        <h1 className="text-2xl text-amber-500 font-bold truncate">
          {props.title}
        </h1>
        <h2 className="text-md text-zinc-300 uppercase truncate">
          {props.category}
        </h2>
        <h3 className="text-2xl text-zinc-100 font-semibold truncate">
          {props.company}
        </h3>
      </div>
      <div className="flex items-center justify-between p-2">
        <h1 className="text-2xl text-emerald-500">
          {props.city}, {props.country}
        </h1>
        <h2 className="text-2xl text-amber-500 uppercase">{props.type}</h2>
        <h3 className="text-2xl text-sky-500 uppercase">
          $
          {props.salary
            ? props.salary
                .toString()
                .substring(0, props.salary.toString().length - 3)
            : 0}
          K/yr
        </h3>
      </div>
      <div className="p-2">
        <p className="text-lg text-zinc-100">{props.description}</p>
      </div>
      <div className="p-2">
        <a
          href={props.url}
          target="_blank"
          className="text-sky-500 underline font-semibold"
        >
          {props.url}
        </a>
      </div>
      <div className="flex items-center justify-between p-2 my-4">
        <button
          onClick={() => navigate(`/record/edit/${props.id}`)}
          className="border-2 border-emerald-500 text-emerald-500 font-semibold px-2 py-1 w-[120px] rounded-md hover:bg-emerald-500 hover:text-zinc-900 transition-all"
        >
          View
        </button>
        <button
          onClick={() => navigate(`/record/edit/${props.id}`)}
          className="border-2 border-amber-500 text-amber-500 font-semibold px-2 py-1 w-[120px] rounded-md hover:bg-amber-500 hover:text-zinc-900 transition-all"
        >
          Edit
        </button>
        <button
          onClick={() => props.handleDelete(props.id)}
          className="border-2 border-rose-500 text-rose-500 font-semibold px-2 py-1 w-[120px] rounded-md hover:bg-rose-500 hover:text-zinc-900 transition-all"
        >
          Delete
        </button>
      </div>
      <div className="flex items-center justify-between p-2">
        <p className="text-lg text-zinc-500">
          <span className="font-bold">Created At:</span>{" "}
          {createdDate === updatedDate ? createdTime : createdDate}
        </p>
        <p
          className={`text-xl uppercase ${
            props.status === "closed" || props.status === "rejected"
              ? "text-rose-500"
              : "text-amber-500"
          } ${
            props.status === "accepted" ? "text-emerald-500" : "text-amber-500"
          }`}
        >
          {props.status}
        </p>
        <p className="text-lg text-zinc-500">
          <span className="font-bold">Updated At:</span>{" "}
          {updatedDate === createdDate ? updatedTime : updatedDate}
        </p>
      </div>
    </div>
  );
};

export default RecordCard;
