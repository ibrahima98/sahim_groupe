import { SearchFilters } from '@/components/search/filters'
import { SearchMap } from '@/components/search/map'
import { SchoolList } from '@/components/search/school-list'

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Trouver une auto-école</h1>
        <div className="grid lg:grid-cols-[350px,1fr] gap-8">
          <SearchFilters />
          <div className="space-y-8">
            <SearchMap />
            <SchoolList />
          </div>
        </div>
      </div>
    </main>
  )
}