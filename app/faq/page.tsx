"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mic, MicOff, Send, Bot } from "lucide-react"

const faqs = [
  {
    question: "Comment choisir une auto-école ?",
    answer: "Pour choisir une auto-école, considérez plusieurs critères : la localisation, les avis des anciens élèves, les tarifs, les taux de réussite, et les services proposés (cours en ligne, simulateur, etc.)."
  },
  {
    question: "Quels documents sont nécessaires pour s'inscrire ?",
    answer: "Pour l'inscription, vous aurez besoin d'une pièce d'identité valide, de photos d'identité récentes, d'un certificat médical d'aptitude à la conduite, et d'un justificatif de domicile."
  },
  {
    question: "Combien coûte le permis de conduire ?",
    answer: "Le coût du permis varie selon les auto-écoles et les régions. En moyenne, comptez entre 150 000 et 250 000 FCFA pour un permis B complet (code + conduite)."
  },
  {
    question: "Quelle est la durée moyenne de la formation ?",
    answer: "La durée de formation varie selon votre progression. En général, comptez 1-2 mois pour le code et 2-3 mois pour la conduite avec une pratique régulière."
  },
  {
    question: "Comment fonctionne le paiement échelonné ?",
    answer: "De nombreuses auto-écoles proposent des facilités de paiement. Vous pouvez généralement échelonner le paiement sur 3 à 6 mois, selon les conditions de l'établissement."
  }
]

export default function FAQPage() {
  const [isListening, setIsListening] = useState(false)
  const [message, setMessage] = useState("")

  const toggleVoice = () => {
    setIsListening(!isListening)
  }

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Centre d'aide</h1>
            <p className="text-xl text-muted-foreground">
              Trouvez rapidement des réponses à vos questions
            </p>
          </div>

          <Tabs defaultValue="faq" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="faq">Questions fréquentes</TabsTrigger>
              <TabsTrigger value="chat">Assistant virtuel</TabsTrigger>
            </TabsList>

            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Questions fréquentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chat">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    Assistant Auto-École
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Zone de chat */}
                    <div className="h-[400px] border rounded-lg p-4 space-y-4 overflow-y-auto">
                      <div className="flex gap-2">
                        <div className="bg-primary/10 rounded-lg p-3 max-w-[80%]">
                          <p>Bonjour ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?</p>
                        </div>
                      </div>
                    </div>

                    {/* Zone de saisie */}
                    <div className="flex gap-2">
                      <Button
                        variant={isListening ? "destructive" : "outline"}
                        size="icon"
                        onClick={toggleVoice}
                      >
                        {isListening ? (
                          <MicOff className="h-4 w-4" />
                        ) : (
                          <Mic className="h-4 w-4" />
                        )}
                      </Button>
                      <Input
                        placeholder="Tapez votre message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <Button size="icon">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Instructions vocales */}
                    {isListening && (
                      <div className="text-sm text-muted-foreground text-center animate-pulse">
                        Parlez maintenant... Je vous écoute
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}