"use client";
import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'

export default function Navbar() {
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">Multimedia App</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <Link href="/" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="outline" className="ml-4" onClick={() => setIsSignInOpen(true)}>
                Sign In
              </Button>
              <Button className="ml-4" onClick={() => setIsSignUpOpen(true)}>
                Sign Up
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-4">
                  <Link href="/" className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                  <div className="relative mt-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search content..."
                      className="block w-full pl-10 pr-3 py-2 border border-input rounded-md leading-5 bg-background focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    />
                  </div>
                  <Button variant="outline" className="mt-4" onClick={() => setIsSignInOpen(true)}>
                    Sign In
                  </Button>
                  <Button className="mt-4" onClick={() => setIsSignUpOpen(true)}>
                    Sign Up
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <SignInModal isOpen={isSignInOpen} onClose={() => setIsSignInOpen(false)} />
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
    </nav>
  )
}