interface ProductInfoRowProps {
  label: string
  value: string | number
  isPrice?: boolean
}

export const ProductInfoRow = ({ label, value, isPrice = false }: ProductInfoRowProps) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600 dark:text-gray-300">{label}</span>
      <span className={`text-xl font-bold ${isPrice ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-gray-100'}`}>
        {value}
      </span>
    </div>
  )
} 