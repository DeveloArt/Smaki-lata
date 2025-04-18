import { ProductHeader } from '@/components/molecules/ProductHeader'
import { ProductBasicInfo } from '@/components/organisms/ProductBasicInfo'
import { ProductStats } from '@/components/organisms/ProductStats'
import { ProductStalls } from '@/components/organisms/ProductStalls'
// import { Button } from '@/components/atoms/Button'
import { InfoCard } from '@/components/atoms/InfoCard'
import { getProductById } from '@/api/productsOperations'
import { SalesChart } from '@/components/organisms/SalesChart'
import { getProductStalls } from '@/helpers/productStallsHelpers'

interface PageParams {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: PageParams) {
  const resolvedParams = await params
  const id = resolvedParams.id
  const product = await getProductById(id)

  if (!product) {
    return <div>Produkt nie znaleziony</div>
  }

  const productStalls = await getProductStalls(id)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <ProductHeader productId={product.id} productName={product.name} />

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-gray-800 dark:to-gray-700 p-6">
              <h1 className="text-3xl font-bold text-white">{product.name}</h1>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <ProductBasicInfo 
                    productStalls={productStalls}
                  />
                  <ProductStats />
                  {/* <InfoCard title="Szybkie akcje">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex-1 whitespace-nowrap justify-center">
                        Dodaj do zamówienia
                      </Button>
                      <Button className="flex-1 whitespace-nowrap justify-center">
                        Historia zmian
                      </Button>
                    </div>
                  </InfoCard> */}
                </div>

                <div className="space-y-6">
                  <ProductStalls productId={product.id} />
                  <InfoCard title="Statystyki sprzedaży">
                    <SalesChart />
                  </InfoCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 