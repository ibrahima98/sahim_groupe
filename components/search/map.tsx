"use client"

import { Card } from "@/components/ui/card"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react"

// Chargement dynamique de react-leaflet côté client
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

// Définir les icônes personnalisées pour les marqueurs
const icon = L.icon({
  iconUrl: "/marker-icon.png", // Assurez-vous d'avoir cette image dans votre dossier public
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
})

// Exemple de données d'auto-écoles
const autoEcoles = [
  {
    id: 1,
    name: "Auto-École Excellence",
    position: [14.6937, -17.4441] as [number, number],
    address: "123 Rue Félix Faure, Dakar",
    phone: "+221 77 123 45 67",
  },
  {
    id: 2,
    name: "École de Conduite Moderne",
    position: [16.0326, -16.4818] as [number, number],
    address: "45 Avenue Lamine Gueye, Saint-Louis",
    phone: "+221 77 234 56 78",
  },
]

export function SearchMap() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <Card className="p-0 overflow-hidden">
      <MapContainer
        center={[14.6937, -17.4441]} // Centre sur Dakar
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {autoEcoles.map((ecole) => (
          <Marker 
            key={ecole.id} 
            position={ecole.position} 
            icon={icon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold">{ecole.name}</h3>
                <p className="text-sm">{ecole.address}</p>
                <p className="text-sm">{ecole.phone}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Card>
  )
}