import { MdApi } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full absolute bottom-0 bg-zinc-900 shadow-2xl px-48 py-8 flex items-center justify-between border-t-2 border-amber-500 cursor-default">
      <div>
        <h1 className="text-2xl flex items-center gap-2 text-amber-500">
          Career Dock <MdApi />
        </h1>
        <h2 className="text-lg text-zinc-300 tracking-tight">
          Track your job application journey with our user-friendly dashboard
          and data analytics.
        </h2>
        <p className="text-md text-zinc-500">Developed by Zephiron</p>
      </div>
      <div>
        <ul className="text-zinc-300 uppercase">
          <li className="my-2">Home</li>
          <li className="my-2">About</li>
          <li className="my-2">Contact</li>
          <li className="my-2">Docs</li>
        </ul>
      </div>
      <div>
        <ul className="text-zinc-300 uppercase">
          <li className="my-2">FAQs</li>
          <li className="my-2">Services</li>
          <li className="my-2">Pricing</li>
          <li className="my-2">Features</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
