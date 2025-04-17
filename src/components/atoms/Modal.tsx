'use client'

import { ReactNode, useEffect, useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  isDanger?: boolean
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  confirmText = 'Potwierdź',
  cancelText = 'Anuluj',
  onConfirm,
  isDanger = false
}: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
      setTimeout(() => setIsVisible(true), 10)
    } else {
      setIsVisible(false)
      setTimeout(() => setIsMounted(false), 200)
    }
  }, [isOpen])

  if (!isMounted) return null

  return (
    <div className="fixed inset-0 z-[9999]">
      <div 
        className={`fixed inset-0 bg-black/50 dark:bg-black/70 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div 
          className={`w-full max-w-lg rounded-lg bg-white dark:bg-gray-800 shadow-xl transition-all duration-200 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {title}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              {children}
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 flex justify-end gap-3 rounded-b-lg">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={onClose}
            >
              {cancelText}
            </button>
            {onConfirm && (
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isDanger 
                    ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500' 
                    : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                }`}
                onClick={onConfirm}
              >
                {confirmText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 