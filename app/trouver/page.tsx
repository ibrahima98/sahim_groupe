"use client";

import { SearchFilters } from '@/components/search/filters';
import { SchoolList } from '@/components/search/school-list';
import dynamic from 'next/dynamic';

const SearchMapComponent = dynamic(
  () => import('@/components/search/map').then(mod => mod.SearchMap),
  { 
    ssr: false,
    loading: () => <div>Chargement de la carte...</div>
  }
);

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Trouver une auto-école</h1>
        <div className="grid lg:grid-cols-[350px,1fr] gap-8">
          <SearchFilters />
          <div className="space-y-8">
            <SearchMapComponent />
            <SchoolList />
          </div>
        </div>
      </div>
    </main>
  )
}