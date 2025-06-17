import { User } from "lucide-react";
// import { useTheme } from "../../context/Theme";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
  type: "icon" | "label";
}

const Profile = (props: ProfileProps) => {
  //   const { theme, toggleTheme } = useTheme();
  //   const isDark = theme === "dark";
  const navigate = useNavigate();

  if (props.type === "icon") {
    return (
      <button
        onClick={() => navigate("/login")}
        className="p-2 rounded-full hover:text-indigo-500 hover:scale-105"
        aria-label="Logout"
      >
        <User className="w-6 h-6" />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => navigate("/login")}
        className="p-2 rounded-full flex items-center gap-2 text-xl hover:text-indigo-500 hover:scale-105"
        aria-label="User"
      >
        <p>Login</p>
        <User className="w-6 h-6" />
      </button>
    );
  }
};

export default Profile;
