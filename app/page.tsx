import { FeaturedSchools } from '@/components/featured-schools'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { PromoTegginu } from '@/components/promo-tegginu'
import { PromotionsSection } from '@/components/promotions-section'
import { SearchSection } from '@/components/search-section'
import type { JSX } from 'react'

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <SearchSection />
      <PromotionsSection />
      <FeaturedSchools />
      <Features />
      <PromoTegginu />
    </main>
  )
}