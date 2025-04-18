'use client'

import { useRouter } from 'next/navigation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export const Pagination = ({ currentPage, totalPages, baseUrl }: PaginationProps) => {
  const router = useRouter()
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const handlePageChange = (page: number) => {
    const url = page === 1 ? baseUrl : `${baseUrl}?page=${page}`
    router.push(url, { scroll: false })
  }

  return (
    <div className="flex justify-center p-4">
      <div className="join">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="join-item btn"
            aria-label="Poprzednia strona"
          >
            <FaChevronLeft className="w-3 h-3" />
          </button>
        )}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`join-item btn ${currentPage === page ? 'btn-active' : ''}`}
            aria-label={`Strona ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="join-item btn"
            aria-label="Następna strona"
          >
            <FaChevronRight className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  )
}