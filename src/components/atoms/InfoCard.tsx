import { ReactNode } from 'react'

interface InfoCardProps {
  title: string
  children: ReactNode
  className?: string
}

export const InfoCard = ({ title, children, className = '' }: InfoCardProps) => {
  return (
    <div className={`bg-gray-50 dark:bg-gray-700 rounded-lg p-4 ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
} 