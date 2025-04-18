'use client';

import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../atoms/Button';
import { FormInput } from '../molecules/FormInput';
import { FormSelect } from '../molecules/FormSelect';
import { FormTextarea } from '../molecules/FormTextarea';
import { FormValues, FormOption } from '@/types/form';
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { ProductContainer } from '../atoms/ProductContainer';
import { createProduct, updateProduct } from '@/api/productsOperations';
import { useRouter } from 'next/navigation';
import { getAllCategories, createCategory } from '@/api/categoriesOperations';
import { getAllUnits, createUnit } from '@/api/unitsOperations';
import { InputWithRight } from '../atoms/InputWIthRight';
import { icons } from '@/assets/icons';

interface ProductFormProps {
  product?: Product;
  isEditMode?: boolean;
}

export const ProductForm = ({ product, isEditMode = false }: ProductFormProps) => {
  const router = useRouter();
  const [categories, setCategories] = useState<FormOption[]>([]);
  const [units, setUnits] = useState<FormOption[]>([]);
  const [newCategory, setNewCategory] = useState('');
  const [newUnit, setNewUnit] = useState('');
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);
  const [showNewUnitInput, setShowNewUnitInput] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const methods = useForm<FormValues>({
    defaultValues: {
      name: product?.name || '',
      category: product?.category || '',
      unit: product?.unit || '',
      description: product?.description || '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = methods;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesData, unitsData] = await Promise.all([getAllCategories(), getAllUnits()]);

        setCategories(
          categoriesData.map(cat => ({
            value: cat.value,
            label: cat.label,
          }))
        );

        setUnits(
          unitsData.map(unit => ({
            value: unit.value,
            label: unit.label,
          }))
        );

        if (product) {
          setValue('category', product.category);
          setValue('unit', product.unit);
        }
      } catch (err) {
        console.error('Błąd podczas pobierania danych:', err);
        setError('Nie udało się załadować danych');
      }
    };

    fetchData();
  }, [product, setValue]);

  const handleAddCategory = async () => {
    if (newCategory.trim()) {
      try {
        const newCategoryValue = newCategory.toLowerCase().replace(/\s+/g, '_');
        const newCategoryData = {
          value: newCategoryValue,
          label: newCategory.trim(),
        };

        const createdCategory = await createCategory(newCategoryData);
        setCategories([
          ...categories,
          { value: createdCategory.value, label: createdCategory.label },
        ]);
        setValue('category', createdCategory.value);

        setShowNewCategoryInput(false);
        setNewCategory('');
      } catch (err) {
        console.error('Błąd podczas dodawania kategorii:', err);
        setError('Nie udało się dodać nowej kategorii');
      }
    }
  };

  const handleAddUnit = async () => {
    if (newUnit.trim()) {
      try {
        const newUnitValue = newUnit.toLowerCase().replace(/\s+/g, '_');
        const newUnitData = {
          value: newUnitValue,
          label: newUnit.trim(),
        };

        const createdUnit = await createUnit(newUnitData);
        setUnits([...units, { value: createdUnit.value, label: createdUnit.label }]);
        setValue('unit', createdUnit.value);

        setShowNewUnitInput(false);
        setNewUnit('');
      } catch (err) {
        console.error('Błąd podczas dodawania jednostki:', err);
        setError('Nie udało się dodać nowej jednostki');
      }
    }
  };

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      setError(null);

      const productData = {
        name: data.name,
        category: data.category,
        unit: data.unit,
        description: data.description,
      };

      if (isEditMode && product) {
        await updateProduct(product.id, productData);
      } else {
        await createProduct(productData);
      }

      router.push('/dashboard/products');
      router.refresh();
    } catch (err) {
      setError('Wystąpił błąd podczas zapisywania produktu');
      console.error('Błąd podczas zapisywania produktu:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ProductContainer title={isEditMode ? 'Edytuj produkt' : 'Dodaj nowy produkt'}>
            {error && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-200">
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <FormInput
                  label="Nazwa produktu"
                  error={errors.name?.message}
                  register={register}
                  name="name"
                  required
                  placeholder="Wprowadź nazwę produktu"
                />
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <FormTextarea
                  label="Opis produktu"
                  error={errors.description?.message}
                  register={register}
                  name="description"
                  placeholder="Wprowadź opis produktu"
                  rows={4}
                />
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Kategoria
                    </label>
                    {!showNewCategoryInput && (
                      <Button
                        variant="add"
                        size="sm"
                        type="button"
                        onClick={() => setShowNewCategoryInput(true)}
                        className="text-sm"
                      >
                        <icons.add className="h-5 w-5" /> Nowa kategoria
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

                  {showNewCategoryInput && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-4">
                      <InputWithRight
                        label="Nazwa nowej kategorii"
                        value={newCategory}
                        onChange={e => setNewCategory(e.target.value)}
                        placeholder="Wprowadź nazwę kategorii"
                      />
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="danger"
                          size="sm"
                          type="button"
                          onClick={() => {
                            setShowNewCategoryInput(false);
                            setNewCategory('');
                          }}
                        >
                          Anuluj
                        </Button>
                        <Button variant="add" size="sm" type="button" onClick={handleAddCategory}>
                          Dodaj kategorię
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Jednostka miary
                    </label>
                    {!showNewUnitInput && (
                      <Button
                        variant="add"
                        size="sm"
                        type="button"
                        onClick={() => setShowNewUnitInput(true)}
                        className="text-sm"
                      >
                        <icons.add className="h-5 w-5" /> Nowa jednostka
                      </Button>
                    )}
                  </div>

                  <FormSelect
                    label="Wybierz jednostkę"
                    error={errors.unit?.message}
                    register={register}
                    name="unit"
                    options={units}
                    required
                  />

                  {showNewUnitInput && (
                    <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-4">
                      <InputWithRight
                        label="Nazwa nowej jednostki"
                        value={newUnit}
                        onChange={e => setNewUnit(e.target.value)}
                        placeholder="Wprowadź nazwę jednostki"
                      />
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="danger"
                          size="sm"
                          type="button"
                          onClick={() => {
                            setShowNewUnitInput(false);
                            setNewUnit('');
                          }}
                        >
                          Anuluj
                        </Button>
                        <Button variant="add" size="sm" type="button" onClick={handleAddUnit}>
                          Dodaj jednostkę
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="card-actions justify-end mt-8">
              <Button variant="danger" onClick={() => router.push('/dashboard/products')}>
                Anuluj
              </Button>
              <Button type="submit" variant="add" disabled={isSubmitting}>
                {isSubmitting ? 'Zapisywanie...' : isEditMode ? 'Zapisz zmiany' : 'Dodaj produkt'}
              </Button>
            </div>
          </ProductContainer>
        </form>
      </FormProvider>
    </div>
  );
};
