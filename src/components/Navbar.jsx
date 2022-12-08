import { useThemeContext } from "../context/ThemeContext";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme } = useThemeContext();
  const isDark = theme === "dark";

  const changeTheme = () => {
    isDark ? setTheme("light") : setTheme("dark");
  };

  return (
    <header className="w-full h-22 px-4 py-6 flex items-center justify-between bg-secondary drop-shadow-md">
      <Link to="/">
        <h1 className="text-md font-bold">Where in the world?</h1>
      </Link>

      <button onClick={changeTheme} className="flex items-center">
        {isDark ? <HiMoon /> : <HiOutlineMoon />}
        <span className="ml-2 font-semibold">Dark Mode</span>
      </button>
    </header>
  );
};

export default Navbar;
