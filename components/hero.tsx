"use client"

import { Button } from "@/components/ui/button"
import { Car, MapPin, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6">
          Trouvez votre auto-école idéale au Sénégal
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Comparez, choisissez et inscrivez-vous dans les meilleures auto-écoles. 
          Tout simplement.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <MapPin className="w-4 h-4" />
            Trouver une auto-école
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Car className="w-4 h-4" />
            Je suis une auto-école
          </Button>
        </div>
        <div className="mt-12 flex justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>Plus de 500 auto-écoles</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>14 régions couvertes</span>
          </div>
          <div className="flex items-center gap-2">
            <Car className="w-4 h-4 text-primary" />
            <span>Tous types de permis</span>
          </div>
        </div>
      </div>
    </section>
  )
}