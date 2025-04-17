'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Przykładowe dane - w rzeczywistości powinny pochodzić z API
const salesData = [
  { name: 'Styczeń', sprzedane: 400, niesprzedane: 100 },
  { name: 'Luty', sprzedane: 300, niesprzedane: 200 },
  { name: 'Marzec', sprzedane: 500, niesprzedane: 50 },
  { name: 'Kwiecień', sprzedane: 600, niesprzedane: 100 },
  { name: 'Maj', sprzedane: 800, niesprzedane: 200 },
  { name: 'Czerwiec', sprzedane: 1000, niesprzedane: 300 },
]

export function SalesChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={salesData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sprzedane" fill="#4f46e5" name="Sprzedane" />
          <Bar dataKey="niesprzedane" fill="#ef4444" name="Niesprzedane" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
} 