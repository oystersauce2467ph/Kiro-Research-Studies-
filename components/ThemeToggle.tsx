"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

// Toggles a `data-theme` attribute on <html> and remembers the choice.
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
