"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const featuredSchools = [
  {
    id: 1,
    name: "Auto-École Excellence",
    location: "Dakar, Plateau",
    rating: 4.8,
    reviews: 124,
    verified: true,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "École de Conduite Moderne",
    location: "Saint-Louis",
    rating: 4.6,
    reviews: 89,
    verified: true,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Auto-École Sécurité Plus",
    location: "Thiès",
    rating: 4.7,
    reviews: 156,
    verified: true,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400",
  },
]

export function FeaturedSchools() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Auto-écoles populaires
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSchools.map((school) => (
            <Card key={school.id} className="overflow-hidden">
              <img
                src={school.image}
                alt={school.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{school.name}</CardTitle>
                  {school.verified && (
                    <Badge variant="secondary">Vérifié</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{school.location}</p>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{school.rating}</span>
                  <span className="text-muted-foreground">
                    ({school.reviews} avis)
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}