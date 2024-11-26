"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SearchFilters() {
  return (
    <Card className="p-6 space-y-6">
      <div className="space-y-2">
        <Label>Localisation</Label>
        <Input placeholder="Ville ou quartier" />
      </div>

      <div className="space-y-2">
        <Label>Type de permis</Label>
        <div className="space-y-2">
          {['A (Moto)', 'B (Voiture)', 'C (Poids lourd)', 'D (Transport en commun)'].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox id={type} />
              <label htmlFor={type} className="text-sm">{type}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Budget maximum (FCFA)</Label>
        <Slider
          defaultValue={[150000]}
          max={300000}
          step={5000}
          className="mt-2"
        />
        <div className="text-sm text-muted-foreground">150 000 FCFA</div>
      </div>

      <div className="space-y-2">
        <Label>Langue d'enseignement</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choisir une langue" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="francais">Français</SelectItem>
            <SelectItem value="wolof">Wolof</SelectItem>
            <SelectItem value="both">Les deux</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Autres filtres</Label>
        <div className="space-y-2">
          {[
            'École vérifiée',
            'Cours en ligne disponibles',
            'Paiement en plusieurs fois',
            'Simulateur de conduite'
          ].map((filter) => (
            <div key={filter} className="flex items-center space-x-2">
              <Checkbox id={filter} />
              <label htmlFor={filter} className="text-sm">{filter}</label>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}