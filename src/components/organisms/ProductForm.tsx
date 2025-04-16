'use client'

import { useForm } from 'react-hook-form'
import { Button } from '../atoms/Button'
import { FormInput } from '../atoms/FormInput'
import { FormSelect } from '../atoms/FormSelect'
import { FormTextarea } from '../atoms/FormTextarea'
import { FormCheckboxGroup } from '../atoms/FormCheckboxGroup'
import { FormValues, FormOption } from '@/types/form'

const categories: FormOption[] = [
  { value: 'fruits', label: 'Owoce' },
  { value: 'vegetables', label: 'Warzywa' },
  { value: 'berries', label: 'Owoce jagodowe' },
  { value: 'exotic', label: 'Owoce egzotyczne' },
  { value: 'herbs', label: 'Zioła' },
]

const stalls: FormOption[] = [
  { value: 'stall1', label: 'Stoisko owocowe' },
  { value: 'stall2', label: 'Stoisko warzywne' },
  { value: 'stall3', label: 'Stoisko ziołowe' },
  { value: 'stall4', label: 'Stoisko egzotyczne' },
  { value: 'stall5', label: 'Stoisko sezonowe' },
]

const units: FormOption[] = [
  { value: 'kg', label: 'Kilogram' },
  { value: 'g', label: 'Gram' },
  { value: 'szt', label: 'Sztuka' },
  { value: 'op', label: 'Opakowanie' },
  { value: 'kratka', label: 'Kratka' },
  { value: 'skrzynka', label: 'Skrzynka' },
]

export const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      stalls: [],
      unit: 'szt',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-8 text-primary">Dodaj nowy produkt</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormInput
            label="Nazwa produktu"
            error={errors.name?.message}
            register={register}
            name="name"
            required
            placeholder="Wprowadź nazwę produktu"
          />

          <FormSelect
            label="Kategoria"
            error={errors.category?.message}
            register={register}
            name="category"
            options={categories}
            required
          />

          <FormInput
            label="Cena"
            error={errors.price?.message}
            register={register}
            name="price"
            type="number"
            step="0.01"
            required
            placeholder="0.00"
            rightElement="PLN"
          />

          <FormSelect
            label="Jednostka"
            error={errors.unit?.message}
            register={register}
            name="unit"
            options={units}
            required
          />

          <FormTextarea
            label="Opis produktu"
            error={errors.description?.message}
            register={register}
            name="description"
            required
            placeholder="Wprowadź opis produktu"
            rows={4}
          />

          <div className="md:col-span-2">
            <FormCheckboxGroup
              label="Przypisz do stoisk"
              register={register}
              name="stalls"
              options={stalls}
            />
          </div>
        </div>

        <div className="card-actions justify-end mt-8">
          <Button
            variant="secondary"
            onClick={() => reset()}
          >
            Wyczyść
          </Button>
          <Button
            type="submit"
            variant="primary"
          >
            Dodaj produkt
          </Button>
        </div>
      </div>
    </form>
  )
} 