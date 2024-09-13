'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Image, Video, FileText, Search } from 'lucide-react'

export default function ContentDashboard() {
  const [counts, setCounts] = useState({ images: 0, videos: 0, texts: 0 })
  const [themeSearch, setThemeSearch] = useState('')
  const [nameSearch, setNameSearch] = useState('')

  useEffect(() => {

    const interval = setInterval(() => {
      setCounts(prevCounts => ({
        images: prevCounts.images + Math.floor(Math.random() * 5),
        videos: prevCounts.videos + Math.floor(Math.random() * 3),
        texts: prevCounts.texts + Math.floor(Math.random() * 4)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Contents</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Images</CardTitle>
            <Image className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{counts.images}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Videos</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{counts.videos}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Texts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{counts.texts}</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search by theme"
            value={themeSearch}
            onChange={(e) => setThemeSearch(e.target.value)}
          />
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search Theme
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="Search by content name"
            value={nameSearch}
            onChange={(e) => setNameSearch(e.target.value)}
          />
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search Content
          </Button>
        </div>
      </div>

      <div className="mt-6 space-x-4">
        <Button variant="outline">Register as Reader</Button>
        <Button variant="outline">Register as Creator</Button>
      </div>
    </div>
  )
}