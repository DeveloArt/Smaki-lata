'use client'

import { SelectHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FormValues, FormOption } from '@/types/form'

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  register: UseFormRegister<FormValues>
  name: keyof FormValues
  options: FormOption[]
  className?: string
}

export const FormSelect = ({ 
  label, 
  error, 
  register, 
  name, 
  options, 
  className = '', 
  ...props 
}: FormSelectProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">{label}</span>
      </label>
      <select
        {...register(name)}
        className={`select select-bordered w-full focus:select-primary ${error ? 'select-error' : ''} ${className}`}
        {...props}
      >
        <option value="">Wybierz opcję</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  )
} 