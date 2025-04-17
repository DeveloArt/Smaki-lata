import { ProductForm } from '@/components/organisms/ProductForm'
import { getProductById } from '@/api/productsOperations'

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const productId = params.id
  const product = await getProductById(productId)

  if (!product) {
    return <div>Produkt nie znaleziony</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <ProductForm 
          product={product}
          isEditMode={true}
        />
      </div>
    </div>
  )
} 