"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Phone, Share2 } from "lucide-react"

const schools = [
  {
    id: 1,
    name: "Auto-École Excellence",
    location: "Dakar, Plateau",
    rating: 4.8,
    reviews: 124,
    verified: true,
    price: "175 000 FCFA",
    phone: "+221 77 123 45 67",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    features: ["Cours en ligne", "Simulateur", "Paiement échelonné"]
  },
  // ... autres écoles
]

export function SchoolList() {
  return (
    <div className="space-y-6">
      {schools.map((school) => (
        <Card key={school.id} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <img
              src={school.image}
              alt={school.name}
              className="w-full md:w-48 h-48 object-cover"
            />
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold">{school.name}</h3>
                    {school.verified && (
                      <Badge variant="secondary">Vérifié</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4" />
                    {school.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">{school.price}</div>
                  <div className="text-sm text-muted-foreground">Prix du permis B</div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{school.rating}</span>
                <span className="text-muted-foreground">
                  ({school.reviews} avis)
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {school.features.map((feature) => (
                  <Badge key={feature} variant="outline">{feature}</Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <Button className="gap-2">
                  <Phone className="w-4 h-4" />
                  {school.phone}
                </Button>
                <Button variant="outline" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Partager
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}