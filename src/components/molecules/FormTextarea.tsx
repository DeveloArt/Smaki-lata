'use client'

import { TextareaHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { FormValues } from '@/types/form'

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  register: UseFormRegister<FormValues>
  name: keyof FormValues
  className?: string
}

export const FormTextarea = ({ 
  label, 
  error, 
  register, 
  name, 
  className = '', 
  ...props 
}: FormTextareaProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">{label}</span>
      </label>
      <div className="relative">
        <textarea
          {...register(name)}
          className={`textarea textarea-bordered w-full focus:textarea-primary ${error ? 'textarea-error' : ''} ${className}`}
          {...props}
        />
        {error && (
          <label className="label absolute -bottom-6 left-0">
            <span className="label-text-alt text-error">{error}</span>
          </label>
        )}
      </div>
    </div>
  )
} 