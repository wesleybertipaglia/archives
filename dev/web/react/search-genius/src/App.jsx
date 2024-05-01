import { useEffect, useState } from "react";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const darkThemeLocalStorage = localStorage.getItem("darkTheme") === "true"; // Convert to boolean
  const [darkTheme, setDarkTheme] = useState(darkThemeLocalStorage);

  useEffect(() => {
    localStorage.setItem("darkTheme", darkTheme);
  }, [darkTheme]);

  return (
    <div
      className={
        `flex flex-col min-h-screen
          bg-zinc-50 text-zinc-900
          dark:bg-zinc-900 dark:text-zinc-50
        ` + (darkTheme ? " dark" : "")
      }
    >
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />

      <main className="flex-1">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
