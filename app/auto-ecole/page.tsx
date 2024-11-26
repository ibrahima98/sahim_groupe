import { SchoolAnnouncements } from '@/components/school/announcements'
import { SchoolDashboard } from '@/components/school/dashboard'
import { SchoolProfile } from '@/components/school/profile'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SchoolPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Espace Auto-École</h1>
        
        <Tabs defaultValue="dashboard">
          <TabsList className="mb-8">
            <TabsTrigger value="dashboard">Tableau de bord</TabsTrigger>
            <TabsTrigger value="announcements">Annonces</TabsTrigger>
            <TabsTrigger value="profile">Profil</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <SchoolDashboard />
          </TabsContent>
          
          <TabsContent value="announcements">
            <SchoolAnnouncements />
          </TabsContent>
          
          <TabsContent value="profile">
            <SchoolProfile />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
