"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Smartphone } from "lucide-react"
import Image from 'next/image'

export function PromoTegginu() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/Tegginu-Yoon.png"
            alt="Logo Tegginu Yoon"
            width={300}
            height={100}
            priority
            className="mb-8"
          />
         
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            La solution complète pour moderniser et optimiser la gestion de votre auto-école
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gestion Simplifiée</h3>
                <p className="text-muted-foreground">
                  Gérez vos élèves, planning et documents en un seul endroit
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">App Mobile</h3>
                <p className="text-muted-foreground">
                  Cours de code en ligne pour vos élèves
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gain de Temps</h3>
                <p className="text-muted-foreground">
                  Automatisez vos tâches administratives
                </p>
              </CardContent>
            </Card>
          </div>

          <Button size="lg" className="gap-2">
            <Shield className="w-4 h-4" />
            Découvrir Tegginu Yoon
          </Button>
        </div>
      </div>
    </section>
  )
}