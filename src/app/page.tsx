'use client'

import React, { useState, useMemo } from 'react'
import { Header } from '../components/Header'
import { HeroCarousel } from '../components/HeroCarousel'
import { SearchBar } from '../components/SearchBar'
import { CardGrid } from '../components/CardGrid'
import { Pagination } from '../components/Pagination'
import { mockMedia } from '../lib/mockData'
import { Media } from '../types'

const ITEMS_PER_PAGE = 12

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredMedia = useMemo(() => {
    if (!searchQuery) return mockMedia
    return mockMedia.filter((media) =>
      media.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  const totalPages = Math.ceil(filteredMedia.length / ITEMS_PER_PAGE)

  const paginatedMedia = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredMedia.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredMedia, currentPage])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6">
        <HeroCarousel />
        <SearchBar onSearch={handleSearch} />
        <CardGrid mediaList={paginatedMedia} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  )
}
