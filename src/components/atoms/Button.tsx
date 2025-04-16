'use client'

import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'login' | 'register' | 'logout'
  icon?: ReactNode
  onClick?: () => void
  className?: string
}

export const Button = ({ children, variant = 'primary', icon, onClick, className = '' }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center px-4 py-2 rounded-lg transition-colors'
  
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white',
    secondary: 'bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/50 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-400',
    danger: 'bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white',
    login: 'bg-blue-500 hover:bg-blue-600 text-white',
    register: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    logout: 'bg-red-500 hover:bg-red-600 text-white'
  }

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  )
}
