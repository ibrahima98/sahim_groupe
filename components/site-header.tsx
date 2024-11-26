"use client"

import { Button } from "@/components/ui/button"
import { Car, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Car className="h-6 w-6" />
            <span className="font-bold">Sahim Groupe</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="/trouver"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Trouver une auto-école
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
        {/* Desktop Button */}
        <div className="ml-auto hidden md:flex items-center space-x-4">
          <Link href="/auto-ecole/connexion">
            <Button variant="outline">Espace Auto-École</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-background">
          <nav className="container flex flex-col space-y-4 py-4">
            <Link
              href="/trouver"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              Trouver une auto-école
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link href="/auto-ecole/connexion" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full">
                Espace Auto-École
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}