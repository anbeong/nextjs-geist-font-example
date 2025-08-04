'use client'

import React, { useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    title: 'Legend of the Female General',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a6fb6852-bcb7-40cd-afc3-24b71fc4ddf9.png',
  },
  {
    id: 2,
    title: 'Revenged Love',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ad5213c0-1b19-45c3-9aa7-0d430ed27588.png',
  },
  {
    id: 3,
    title: 'The Immortal Ascension',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0ebd717f-3a32-42d2-af80-192623f3228e.png',
  },
  {
    id: 4,
    title: 'The Fragrant Flower Blooms with Dignity',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/00acf6d1-556e-4b77-a3d6-d9a803e5d1f3.png',
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-md">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="h-[300px] w-full object-cover brightness-90"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ca0a0de2-db55-4b91-8229-4c98dd707549.png'
              }}
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 px-3 py-1 rounded text-white text-lg font-semibold">
              {slide.title}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-8 rounded-full transition-colors ${
              idx === current ? 'bg-white' : 'bg-gray-600'
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
