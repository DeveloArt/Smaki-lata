import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'login' | 'register' | 'logout' | 'add' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'login',
  size = 'md',
  className = '',
  onClick,
  ...props
}) => {
  const baseStyles = 'btn rounded font-medium transition-colors cursor-pointer';

  const variantStyles = {
    login: 'bg-blue-600 text-white hover:bg-blue-700',
    register: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    logout: 'bg-red-600 text-white hover:bg-red-700',
    add: 'flex bg-[#1A77F2] text-white hover:bg-[#005fd8] hover:border-[#005fd8]',
    danger: 'bg-red-500 text-white hover:bg-red-600 border border-red-600',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
