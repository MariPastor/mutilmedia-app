'use client'

import { useState } from 'react'

export default function RegistrationForm() {
  const [userType, setUserType] = useState<'reader' | 'creator'>('reader')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement registration logic here
    console.log('Registering as:', userType)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-2">Register as:</label>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value as 'reader' | 'creator')}
          className="w-full p-2 border rounded"
        >
          <option value="reader">Reader</option>
          <option value="creator">Creator</option>
        </select>
      </div>
      {/* Add more fields as needed */}
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  )
}