"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const promotions = [
  {
    id: 1,
    schoolName: "Auto-École Excellence",
    location: "Dakar, Plateau",
    title: "Offre spéciale rentrée",
    content: "20% de réduction sur le forfait code + conduite jusqu'au 30 septembre !",
    endDate: "2024-09-30",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    schoolName: "École de Conduite Moderne",
    location: "Saint-Louis",
    title: "Nouveaux simulateurs",
    content: "Venez découvrir nos nouveaux simulateurs de conduite dernière génération",
    endDate: "2024-12-31",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=400",
  }
]

export function PromotionsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Promotions et actualités</h2>
          <Link href="/promotions">
            <Button variant="outline">Voir toutes les offres</Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {promotions.map((promo) => (
            <Card key={promo.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 right-4">
                  Promotion
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="font-semibold">{promo.schoolName}</h3>
                </div>
                <h4 className="text-xl font-bold mb-2">{promo.title}</h4>
                <p className="text-muted-foreground mb-4">{promo.content}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    {promo.location}
                  </span>
                  <span className="flex items-center gap-1">
                    Jusqu'au {promo.endDate}
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