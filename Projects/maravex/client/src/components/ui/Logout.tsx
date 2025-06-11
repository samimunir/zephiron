import { LogOut } from "lucide-react";
// import { useTheme } from "../../context/Theme";

interface LogoutProps {
  type: "icon" | "label";
}

const Logout = (props: LogoutProps) => {
  //   const { theme } = useTheme();
  //   const isDark = theme === "dark";

  if (props.type === "icon") {
    return (
      <button
        onClick={() => alert("logging out...")}
        className="p-2 rounded-full hover:text-rose-500 hover:scale-105"
        aria-label="Logout"
      >
        <LogOut className="w-6 h-6" />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => alert("logging out...")}
        className="p-2 rounded-full flex items-center gap-2 text-xl hover:text-rose-500 hover:scale-105"
        aria-label="Logout"
      >
        <p>Logout</p>
        <LogOut className="w-6 h-6" />
      </button>
    );
  }
};

export default Logout;
