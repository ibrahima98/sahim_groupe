"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Share2, Star } from "lucide-react"

const schools = [
  {
    id: 1,
    name: "Auto-École Excellence",
    location: "123 Rue Félix Faure, Dakar",
    rating: 4.8,
    reviews: 124,
    verified: true,
    price: "175 000 FCFA",
    phone: "+221 77 123 45 67",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    features: ["Cours en ligne", "Simulateur", "Paiement échelonné"]
  },
  {
    id: 2,
    name: "École de Conduite Moderne",
    location: "45 Avenue Lamine Gueye, Saint-Louis",
    rating: 4.6,
    reviews: 98,
    verified: true,
    price: "160 000 FCFA",
    phone: "+221 77 234 56 78",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    features: ["Cours intensif", "Simulateur", "WiFi gratuit"]
  },
  {
    id: 3,
    name: "Auto-École Yoff Plage",
    location: "Route de l'Aéroport, Yoff",
    rating: 4.7,
    reviews: 156,
    verified: true,
    price: "170 000 FCFA",
    phone: "+221 77 345 67 89",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    features: ["Cours bilingue", "Parking", "Climatisation"]
  },
  {
    id: 4,
    name: "Auto-École Rufisque Centre",
    location: "Boulevard Maurice Gueye, Rufisque",
    rating: 4.5,
    reviews: 87,
    verified: true,
    price: "155 000 FCFA",
    phone: "+221 77 456 78 90",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    features: ["Cours du soir", "Paiement mobile", "Salle multimédia"]
  },
  {
    id: 5,
    name: "Ziguinchor Driving School",
    location: "Avenue du Général de Gaulle, Ziguinchor",
    rating: 4.9,
    reviews: 112,
    verified: true,
    price: "150 000 FCFA",
    phone: "+221 77 567 89 01",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    features: ["Cours en diola", "Simulateur", "Climatisation"]
  },
  {
    id: 6,
    name: "Auto-École Thiès Express",
    location: "Avenue Léopold Sédar Senghor, Thiès",
    rating: 4.7,
    reviews: 143,
    verified: true,
    price: "165 000 FCFA",
    phone: "+221 77 678 90 12",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    features: ["Formation accélérée", "Wifi gratuit", "Parking"]
  },
  {
    id: 7,
    name: "Kaolack Permis Plus",
    location: "Boulevard des 30 mètres, Kaolack",
    rating: 4.6,
    reviews: 91,
    verified: true,
    price: "155 000 FCFA",
    phone: "+221 77 789 01 23",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    features: ["Cours du weekend", "Simulateur", "Salle climatisée"]
  },
  {
    id: 8,
    name: "Auto-École Mbour Saly",
    location: "Route de Saly, Mbour",
    rating: 4.8,
    reviews: 167,
    verified: true,
    price: "170 000 FCFA",
    phone: "+221 77 890 12 34",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    features: ["Cours en anglais", "Piscine", "Restaurant"]
  },
  {
    id: 9,
    name: "Touba Conduite",
    location: "Avenue Cheikh Ahmadou Bamba, Touba",
    rating: 4.7,
    reviews: 134,
    verified: true,
    price: "160 000 FCFA",
    phone: "+221 77 901 23 45",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    features: ["Cours en wolof", "Parking", "Climatisation"]
  },
  {
    id: 10,
    name: "Auto-École Parcelles",
    location: "Parcelles Assainies Unité 15, Dakar",
    rating: 4.5,
    reviews: 78,
    verified: true,
    price: "165 000 FCFA",
    phone: "+221 77 012 34 56",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
    features: ["Cours du soir", "Wifi gratuit", "Parking"]
  },
  // ... Suite dans le prochain message à cause de la limite de caractères ...
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