'use client'

import { useState } from 'react'

export default function Search() {
  const [theme, setTheme] = useState('')
  const [contentName, setContentName] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search logic here
    console.log('Searching for:', { theme, contentName })
  }

  return (
    <form onSubmit={handleSearch} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Search by theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by content name"
          value={contentName}
          onChange={(e) => setContentName(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  )
}