'use client'

import { Button } from "../atoms/Button"



export const ProductActions = () => {
  const handleEdit = () => {
    // TODO: Implement edit functionality
    console.log('Edit clicked')
  }

  const handleDelete = () => {
    // TODO: Implement delete functionality
    console.log('Delete clicked')
  }

  return (
    <div className="flex gap-4">
      <Button variant="primary" onClick={handleEdit}>
        Edytuj
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Usuń
      </Button>
    </div>
  )
} 