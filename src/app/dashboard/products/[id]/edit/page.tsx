import { ProductForm } from '@/components/organisms/ProductForm'
import { getProductById } from '@/api/productsOperations'

interface PageParams {
  params: Promise<{
    id: string
  }>
}

export default async function EditProductPage({ params }: PageParams) {
  const resolvedParams = await params
  const productId = resolvedParams.id
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