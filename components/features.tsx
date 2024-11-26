"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Award, Share2 } from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Recherche Facile",
    description: "Trouvez rapidement les auto-écoles près de chez vous avec notre carte interactive.",
  },
  {
    icon: Users,
    title: "Communauté Active",
    description: "Échangez avec d'autres apprenants et partagez vos expériences.",
  },
  {
    icon: Award,
    title: "Auto-écoles Vérifiées",
    description: "Tous nos établissements partenaires sont soigneusement vérifiés.",
  },
  {
    icon: Share2,
    title: "Partage Simple",
    description: "Partagez facilement les informations via WhatsApp ou SMS.",
  },
]

export function Features() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Pourquoi nous choisir ?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <feature.icon className="w-12 h-12 mx-auto text-primary" />
                <CardTitle className="text-xl mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}