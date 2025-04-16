export const UNITS = {
  KILOGRAM: 'kg',
  PIECE: 'szt',
  PACKAGE: 'op'
} as const

export type Unit = typeof UNITS[keyof typeof UNITS]

export const UNIT_LABELS: Record<Unit, string> = {
  [UNITS.KILOGRAM]: 'kilogram',
  [UNITS.PIECE]: 'sztuka',
  [UNITS.PACKAGE]: 'opakowanie'
} 