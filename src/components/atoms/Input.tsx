import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'search';
}

export const Input: React.FC<InputProps> = ({ variant = 'default', className = '', ...props }) => {
  const baseStyles =
    'input px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500';

  const variantStyles = {
    default: '',
    search: 'flex-1',
  };

  return <input className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props} />;
};
