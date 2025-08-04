'use client'

import React from 'react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-black bg-opacity-90 px-4 py-3 shadow-md">
      <div className="flex items-center space-x-4">
        <button aria-label="Menu" className="text-white focus:outline-none">
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="text-xl font-bold text-white">
          <span className="text-orange-500">KISS</span>
          <span className="text-white">KH</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button aria-label="Search" className="text-white focus:outline-none">
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <button className="rounded border border-white px-3 py-1 text-white hover:bg-white hover:text-black transition">
          Sign in
        </button>
      </div>
    </header>
  )
}
