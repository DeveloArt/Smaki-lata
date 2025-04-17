export interface FormValues {
  name: string
  category: string
  price: number
  description: string
  stalls: string[]
  unit?: string
  newCategory?: string
}

export interface FormOption {
  value: string
  label: string
} 