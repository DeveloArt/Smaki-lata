import { notFound } from 'next/navigation'
import { mockProducts } from '@/app/dashboard/products/page'
import { ProductHeader } from '@/components/molecules/ProductHeader'
import { ProductBasicInfo } from '@/components/organisms/ProductBasicInfo'
import { ProductStats } from '@/components/organisms/ProductStats'
import { ProductStalls } from '@/components/organisms/ProductStalls'
import { Button } from '@/components/atoms/Button'
import { InfoCard } from '@/components/atoms/InfoCard'

interface Product {
  id: string
  name: string
  price: number
  unit: string
  quantity: number
}

async function getProduct(id: string): Promise<Product | null> {
  return mockProducts.find(product => product.id === id) || null
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <ProductHeader />

          {/* Karta produktu */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* Nagłówek karty */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 p-6">
              <h1 className="text-3xl font-bold text-white">{product.name}</h1>
            </div>

            {/* Zawartość karty */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Lewa kolumna */}
                <div className="space-y-6">
                  <ProductBasicInfo 
                    price={product.price}
                    unit={product.unit}
                    quantity={product.quantity}
                  />
                  <ProductStats unit={product.unit} />
                  <InfoCard title="Szybkie akcje">
                    <div className="grid grid-cols-2 gap-4">
                      <Button variant="secondary">
                        Dodaj do zamówienia
                      </Button>
                      <Button variant="secondary">
                        Historia zmian
                      </Button>
                    </div>
                  </InfoCard>
                </div>

                {/* Prawa kolumna */}
                <div className="space-y-6">
                  <ProductStalls productId={product.id} />
                  <InfoCard title="Historia cen">
                    <div className="h-48 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                      <span className="text-gray-400 dark:text-gray-500">Wykres cen będzie dostępny wkrótce</span>
                    </div>
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