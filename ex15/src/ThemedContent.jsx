import React from "react";
import { useTheme } from "./ThemeContext";

function ThemedContent() {
  const { theme } = useTheme();
  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    marginTop: "10px",
  };

  return <div style={style}>This content is themed!</div>;
}

export default ThemedContent;