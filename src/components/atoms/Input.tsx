'use client'

import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  className?: string
  rightElement?: React.ReactNode
}

export const Input = ({ 
  label, 
  error, 
  className = '', 
  rightElement,
  ...props 
}: InputProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">{label}</span>
      </label>
      <div className="join w-full">
        <input
          className={`join-item input input-bordered flex-1 focus:input-primary ${error ? 'input-error' : ''} ${className}`}
          {...props}
        />
        {rightElement && (
          <span className="join-item input input-bordered w-24">
            {rightElement}
          </span>
        )}
      </div>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  )
}
