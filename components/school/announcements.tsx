"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Megaphone, Calendar, Tag } from "lucide-react"

const announcements = [
  {
    id: 1,
    title: "Offre spéciale rentrée",
    content: "20% de réduction sur le forfait code + conduite jusqu'au 30 septembre !",
    type: "promotion",
    startDate: "2024-09-01",
    endDate: "2024-09-30",
    status: "active"
  },
  {
    id: 2,
    title: "Nouveaux simulateurs",
    content: "Venez découvrir nos nouveaux simulateurs de conduite dernière génération",
    type: "news",
    startDate: "2024-08-15",
    endDate: "2024-12-31",
    status: "active"
  }
]

export function SchoolAnnouncements() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone className="w-5 h-5" />
            Créer une annonce
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Titre de l'annonce</Label>
            <Input id="title" placeholder="Ex: Offre spéciale rentrée" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Contenu</Label>
            <Textarea
              id="content"
              placeholder="Décrivez votre annonce..."
              className="min-h-[100px]"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Type d'annonce</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="promotion">Promotion</SelectItem>
                  <SelectItem value="news">Actualité</SelectItem>
                  <SelectItem value="event">Événement</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Durée de publication</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choisir une durée" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1week">1 semaine</SelectItem>
                  <SelectItem value="2weeks">2 semaines</SelectItem>
                  <SelectItem value="1month">1 mois</SelectItem>
                  <SelectItem value="3months">3 mois</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-full">Publier l'annonce</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vos annonces actives</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {announcement.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {announcement.content}
                      </p>
                    </div>
                    <Badge variant={announcement.type === "promotion" ? "default" : "secondary"}>
                      {announcement.type === "promotion" ? "Promotion" : "Actualité"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Du {announcement.startDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Au {announcement.endDate}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}