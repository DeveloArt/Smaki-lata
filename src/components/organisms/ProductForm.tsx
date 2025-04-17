'use client'

import { useForm } from 'react-hook-form'
import { Button } from '../atoms/Button'
import { FormInput } from '../atoms/FormInput'
import { FormSelect } from '../atoms/FormSelect'
import { FormTextarea } from '../atoms/FormTextarea'
import { FormCheckboxGroup } from '../atoms/FormCheckboxGroup'
import { FormValues, FormOption } from '@/types/form'
import { useState } from 'react'
import { Product, ProductStall } from '@/types/product'

const initialCategories: FormOption[] = [
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

interface ProductFormProps {
  product?: Product
  productStalls?: ProductStall[]
  isEditMode?: boolean
}

export const ProductForm = ({ product, productStalls = [], isEditMode = false }: ProductFormProps) => {
  const [categories, setCategories] = useState<FormOption[]>(initialCategories)
  const [newCategory, setNewCategory] = useState('')
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      name: product?.name || '',
      category: product?.category || '',
      description: product?.description || '',
      unit: product?.unit || 'szt',
      stalls: productStalls.map(stall => stall.stallId) || [],
    },
  })

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      const newCategoryValue = newCategory.toLowerCase().replace(/\s+/g, '_')
      const newCategoryOption = {
        value: newCategoryValue,
        label: newCategory.trim()
      }
      
      setCategories([...categories, newCategoryOption])
      setValue('category', newCategoryValue)
      setNewCategory('')
      setShowNewCategoryInput(false)
    }
  }

  const onSubmit = (data: FormValues) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {isEditMode ? 'Edytuj produkt' : 'Dodaj nowy produkt'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <FormInput
              label="Nazwa produktu"
              error={errors.name?.message}
              register={register}
              name="name"
              required
              placeholder="Wprowadź nazwę produktu"
            />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Kategoria
                </label>
                {!showNewCategoryInput && (
                  <Button
                    variant="primary"
                    size="sm"
                    type="button"
                    onClick={() => setShowNewCategoryInput(true)}
                    className="text-sm transition-all duration-300 ease-in-out hover:scale-105"
                  >
                    + Nowa kategoria
                  </Button>
                )}
              </div>
              <FormSelect
                label="Wybierz kategorię"
                error={errors.category?.message}
                register={register}
                name="category"
                options={categories}
                required
              />
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${showNewCategoryInput ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-3">
                  <FormInput
                    label="Nazwa nowej kategorii"
                    register={register}
                    name="newCategory"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Wprowadź nazwę kategorii"
                    className="mb-2"
                  />
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="danger"
                      size="sm"
                      type="button"
                      onClick={() => {
                        setShowNewCategoryInput(false)
                        setNewCategory('')
                      }}
                      className="transition-all duration-300 ease-in-out hover:scale-105"
                    >
                      Anuluj
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      type="button"
                      onClick={handleAddCategory}
                      className="transition-all duration-300 ease-in-out hover:scale-105"
                    >
                      Dodaj kategorię
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <FormSelect
              label="Jednostka"
              error={errors.unit?.message}
              register={register}
              name="unit"
              options={units}
              required
            />
          </div>

          <div className="space-y-4">
            <FormTextarea
              label="Opis produktu"
              error={errors.description?.message}
              register={register}
              name="description"
              required
              placeholder="Wprowadź opis produktu"
              rows={4}
            />

            <div className="space-y-2">
              <FormCheckboxGroup
                label="Przypisz do stoisk"
                register={register}
                name="stalls"
                options={stalls}
                className="grid grid-cols-2 gap-2"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Button
            variant="danger"
            type="button"
            onClick={() => reset()}
            className="transition-all duration-300 ease-in-out hover:scale-105"
          >
            Wyczyść formularz
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="transition-all duration-300 ease-in-out hover:scale-105"
          >
            {isEditMode ? 'Zapisz zmiany' : 'Dodaj produkt'}
          </Button>
        </div>
      </div>
    </form>
  )
} 