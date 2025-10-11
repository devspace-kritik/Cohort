import React from "react";
import { createRoot } from "react-dom/client";

const Grid = () => {
  return (
    <div className="container">
      <div className="first">this is first container</div>
      <div className="second">this is second container</div>
    </div>
  );
};

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a React root
const root = createRoot(rootElement);

// Render the component
root.render(<Grid />);
