'use client'

import { UseFormRegister } from 'react-hook-form'
import { FormValues, FormOption } from '@/types/form'

interface FormCheckboxGroupProps {
  label: string
  register: UseFormRegister<FormValues>
  name: keyof FormValues
  options: FormOption[]
}

export const FormCheckboxGroup = ({ 
  label, 
  register, 
  name, 
  options 
}: FormCheckboxGroupProps) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-semibold text-base">{label}</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option.value} className="label cursor-pointer gap-2 p-2 bg-base-100 rounded-lg border border-base-300 hover:border-primary transition-colors">
            <input
              type="checkbox"
              value={option.value}
              {...register(name)}
              className="checkbox checkbox-primary"
            />
            <span className="label-text">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
} 