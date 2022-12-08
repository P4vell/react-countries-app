import { createContext, useState, useContext, useEffect } from "react";

const getInitialTheme = () => {
  const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
  if (userMedia.matches) {
    return "dark";
  }
  return "light";
};

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const changeTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
  };

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
