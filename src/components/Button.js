// src/components/Button.js
import React from "react";

const Button = ({ children, onClick, variant = "primary" }) => {
  const baseStyle = "px-4 py-2 rounded transition duration-300 font-semibold";
  const styles = {
    primary: `${baseStyle} bg-yellow-300 text-white hover:bg-blue-600`,
    danger: `${baseStyle} bg-red-500 text-white hover:bg-red-600`,
    secondary: `${baseStyle} bg-gray-300 text-black hover:bg-gray-400`,
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
};

export default Button;
