"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export function SchoolProfile() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Informations générales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nom de l'auto-école</Label>
              <Input id="name" defaultValue="Auto-École Excellence" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input id="phone" defaultValue="+221 77 123 45 67" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Adresse</Label>
              <Input id="address" defaultValue="123 Rue Principal, Dakar" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="contact@auto-ecole.sn" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              defaultValue="Notre auto-école propose une formation de qualité avec des moniteurs expérimentés..."
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Services proposés</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Permis A (Moto)',
              'Permis B (Voiture)',
              'Permis C (Poids lourd)',
              'Cours en ligne',
              'Simulateur de conduite',
              'Paiement échelonné',
              'Cours en français',
              'Cours en wolof'
            ].map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox id={service} defaultChecked />
                <label htmlFor={service} className="text-sm">{service}</label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tarifs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="price-b">Prix Permis B</Label>
              <Input id="price-b" defaultValue="175000" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="price-a">Prix Permis A</Label>
              <Input id="price-a" defaultValue="125000" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button size="lg">Enregistrer les modifications</Button>
      </div>
    </div>
  )
}