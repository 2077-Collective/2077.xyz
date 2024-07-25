import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import React from "react";

export function ModeToggle({ className }: { className?: string }) {
  const [theme, setThemeState] = React.useState<"light" | "dark" | "system">(
    "dark"
  );

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <Button
      variant="outline"
      size="icon"
      className={className ?? ""}
      onClick={() => {
        if (theme == "light") {
          setThemeState("dark");
        } else {
          setThemeState("light");
        }
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
