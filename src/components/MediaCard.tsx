'use client'

import React from 'react'
import { Media } from '../types'

interface MediaCardProps {
  media: Media
}

export function MediaCard({ media }: MediaCardProps) {
  return (
    <div className="relative cursor-pointer overflow-hidden rounded-md bg-gray-900 shadow-md transition-transform duration-300 hover:scale-105">
      <img
        src={media.poster}
        alt={media.title}
        className="h-[300px] w-full object-cover"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/52ce3c74-44be-40b1-ba24-4383ffe6c850.png'
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
        <h3 className="text-sm font-semibold line-clamp-2">{media.title}</h3>
        <div className="mt-1 flex items-center justify-between text-xs text-gray-300">
          <span>⭐ {media.rating.toFixed(1)}</span>
          {media.episode !== undefined && <span>EP {media.episode}</span>}
        </div>
      </div>
    </div>
  )
}
