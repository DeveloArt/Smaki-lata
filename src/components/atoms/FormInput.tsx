'use client'

import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FormValues } from '@/types/form'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  register: UseFormRegister<FormValues>
  name: keyof FormValues
  className?: string
  rightElement?: React.ReactNode
}

export const FormInput = ({ 
  label, 
  error, 
  register, 
  name, 
  className = '', 
  rightElement,
  ...props 
}: FormInputProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">{label}</span>
      </label>
      <div className="join w-full">
        <input
          {...register(name)}
          className={`join-item input input-bordered flex-1 focus:input-primary ${error ? 'input-error' : ''} ${className}`}
          {...props}
        />
        {rightElement && (
          <span className="join-item input input-bordered w-24 ">
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