
import { InfoCard } from '@/components/atoms/InfoCard'
import { FaBox, FaTruck, FaStore, FaChartLine, FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Panel główny</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Stan magazynowy */}
        <InfoCard title="Stan magazynowy" className="bg-base-100">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Warzywa</span>
              <span className="font-semibold">1,234 kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Owoce</span>
              <span className="font-semibold">856 kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Łącznie</span>
              <span className="font-semibold text-primary">2,090 kg</span>
            </div>
          </div>
        </InfoCard>

        {/* Aktywne dostawy */}
        <InfoCard title="Aktywne dostawy" className="bg-base-100">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Dzisiaj</span>
              <span className="font-semibold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">W trakcie</span>
              <span className="font-semibold">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Zakończone</span>
              <span className="font-semibold text-success">9</span>
            </div>
          </div>
        </InfoCard>

        {/* Stoiska */}
        <InfoCard title="Stoiska" className="bg-base-100">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Aktywne</span>
              <span className="font-semibold">8</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Oczekujące na dostawę</span>
              <span className="font-semibold text-warning">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Niedostępne</span>
              <span className="font-semibold text-error">2</span>
            </div>
          </div>
        </InfoCard>
      </div>

      {/* Szybkie akcje */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link href="/dashboard/delivery/new" className="btn btn-primary w-full">
          <FaTruck className="mr-2" />
          Nowa dostawa
        </Link>
        <Link href="/dashboard/products" className="btn btn-secondary w-full">
          <FaBox className="mr-2" />
          Zarządzaj produktami
        </Link>
        <Link href="/dashboard/tables" className="btn btn-secondary w-full">
          <FaStore className="mr-2" />
          Zarządzaj stoiskami
        </Link>
        <Link href="/dashboard/reports" className="btn btn-secondary w-full">
          <FaChartLine className="mr-2" />
          Raporty
        </Link>
      </div>

      {/* Ostrzeżenia */}
      <div className="card bg-warning/10 border-warning mb-8">
        <div className="card-body">
          <div className="flex items-center">
            <FaExclamationTriangle className="text-warning mr-2" />
            <h2 className="card-title text-warning">Ostrzeżenia</h2>
          </div>
          <div className="mt-4 space-y-2">
            <p>• Niski stan magazynowy: Pomidory (50 kg)</p>
            <p>• Opóźniona dostawa do Stoiska 3</p>
            <p>• 2 stoiska wymagają pilnej dostawy</p>
          </div>
        </div>
      </div>

      {/* Ostatnie dostawy */}
      <div className="card bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Ostatnie dostawy</h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Stoisko</th>
                  <th>Produkty</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-03-20</td>
                  <td>Stoisko 1</td>
                  <td>Pomidory, Ogórki, Jabłka</td>
                  <td><span className="badge badge-success">Zakończona</span></td>
                </tr>
                <tr>
                  <td>2024-03-20</td>
                  <td>Stoisko 2</td>
                  <td>Marchew, Ziemniaki, Banany</td>
                  <td><span className="badge badge-warning">W trakcie</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
