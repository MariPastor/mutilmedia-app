'use client'

import { useState, useEffect } from 'react'

type ContentCounts = {
  images: number
  videos: number
  texts: number
}

export default function ContentList() {
  const [counts, setCounts] = useState<ContentCounts>({ images: 0, videos: 0, texts: 0 })

  useEffect(() => {
    const fetchCounts = async () => {
      const response = await fetch('/api/content/counts')
      const data = await response.json()
      setCounts(data)
    }

    fetchCounts()
    const interval = setInterval(fetchCounts, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Available Content</h2>
      <ul className="space-y-2">
        <li>Images: +{counts.images}</li>
        <li>Videos: +{counts.videos}</li>
        <li>Texts: +{counts.texts}</li>
      </ul>
    </div>
  )
}