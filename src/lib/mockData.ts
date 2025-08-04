import { Media } from '../types'

export const mockMedia: Media[] = [
  {
    id: 1,
    title: 'Legend of the Female General',
    poster: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ee2f7f08-6cbe-49b1-8ccc-fec035c9ee18.png',
    rating: 8.5,
    episode: 18,
  },
  {
    id: 2,
    title: 'Revenged Love',
    poster: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ae4387a7-8e3a-465e-94fe-ffb055b8877e.png',
    rating: 7.9,
    episode: 18,
  },
  {
    id: 3,
    title: 'The Immortal Ascension',
    poster: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/334337cc-8267-483b-bbc1-af916101e7eb.png',
    rating: 8.2,
    episode: 17,
  },
  {
    id: 4,
    title: 'The Fragrant Flower Blooms with Dignity',
    poster: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4d37f608-aabb-40cb-ba93-d83049b9ec6c.png',
    rating: 7.5,
    episode: 5,
  },
  {
    id: 5,
    title: 'True Beauty',
    poster: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27a10679-f3e3-4f56-95b5-9b42c5073b65.png',
    rating: 8.0,
    episode: 16,
  },
  {
    id: 6,
    title: 'Lovely Runner',
    poster: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d1391977-73c7-4820-abbd-5446d3ff68a3.png',
    rating: 7.8,
    episode: 16,
  },
  {
    id: 7,
    title: 'Twinkling Watermelon',
    poster: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1be566b-de50-4a84-91d0-858435e94c89.png',
    rating: 7.3,
    episode: 16,
  },
  {
    id: 8,
    title: 'My Demon',
    poster: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7a2e65e5-47e7-4cd2-a71e-8508294f198b.png',
    rating: 7.6,
    episode: 12,
  },
  // ... add more items up to 50
]

// For brevity, generate more mock items programmatically
for (let i = 9; i <= 50; i++) {
  mockMedia.push({
    id: i,
    title: `Anime Title ${i}`,
    poster: `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9538c6c9-16a2-4c00-9e89-bd7a6a5e3019.png}`,
    rating: +(6 + Math.random() * 3).toFixed(1),
    episode: Math.floor(Math.random() * 20) + 1,
  })
}
