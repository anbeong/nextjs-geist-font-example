'use client'

import React from 'react'
import { Media } from '../types'
import { MediaCard } from './MediaCard'

interface CardGridProps {
  mediaList: Media[]
}

export function CardGrid({ mediaList }: CardGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {mediaList.map((media) => (
        <MediaCard key={media.id} media={media} />
      ))}
    </div>
  )
}
