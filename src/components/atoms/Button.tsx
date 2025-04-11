import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "login" | "register" | "logout";
  size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "login",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles = "rounded font-medium transition-colors";

  const variantStyles = {
    login: "bg-blue-600 text-white hover:bg-blue-700",
    register: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    logout: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
