'use client'

import React, { useState, useEffect } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState('')

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(input.trim())
    }, 300)

    return () => clearTimeout(handler)
  }, [input, onSearch])

  return (
    <div className="mb-6 w-full max-w-md">
      <input
        type="text"
        placeholder="Search anime..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-2 text-white placeholder-gray-500 focus:border-white focus:outline-none"
      />
    </div>
  )
}
