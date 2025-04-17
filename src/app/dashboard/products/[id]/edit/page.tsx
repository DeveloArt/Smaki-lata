import { ProductForm } from '@/components/organisms/ProductForm'
import { getProduct } from '@/helpers/productHelpers'
import { getProductStalls } from '@/helpers/productStallsHelpers'

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)
  const productStalls = await getProductStalls(params.id)

  if (!product) {
    return <div>Produkt nie znaleziony</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <ProductForm 
          product={product}
          productStalls={productStalls}
          isEditMode={true}
        />
      </div>
    </div>
  )
} 