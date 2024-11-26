"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function SearchSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex-1 max-w-lg">
            <Input 
              placeholder="Entrez votre ville ou quartier" 
              className="h-12"
            />
          </div>
          <Button size="lg" className="gap-2">
            <Search className="w-4 h-4" />
            Rechercher
          </Button>
        </div>
      </div>
    </section>
  )
}