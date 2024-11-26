"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Car, Shield, Smartphone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Formulaire de connexion */}
          <Card className="w-full">
            <CardHeader className="space-y-2 text-center">
              <div className="flex justify-center mb-4">
                <Car className="w-12 h-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Connexion Auto-École</CardTitle>
              <CardDescription>
                Accédez à votre espace de gestion
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="contact@auto-ecole.sn" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" />
              </div>
              <Button className="w-full" size="lg">
                Se connecter
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                <Link href="#" className="hover:underline">
                  Mot de passe oublié ?
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Promotion Tegginu Yoon */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Découvrez Tegginu Yoon
              </h2>
              <p className="text-muted-foreground text-lg">
                La solution complète de gestion pour votre auto-école par Sahim Groupe
              </p>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Shield className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-2">Gestion Complète</h3>
                    <p className="text-muted-foreground">
                      Gérez vos élèves, moniteurs, planning et documents administratifs en un seul endroit.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Smartphone className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-semibold mb-2">Application Mobile</h3>
                    <p className="text-muted-foreground">
                      Offrez à vos élèves un accès aux cours de code de la route en ligne, où qu'ils soient.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/10 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Inclus avec votre abonnement :</h3>
              <ul className="space-y-2">
                {[
                  "Gestion des élèves et des moniteurs",
                  "Planning et réservation en ligne",
                  "Suivi des paiements",
                  "Application mobile pour vos élèves",
                  "Support technique 7j/7",
                  "Mises à jour régulières"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="w-full">
              Essayer Tegginu Yoon gratuitement
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}