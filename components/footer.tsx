"use client";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold">Auto-Écoles Sénégal</h3>
            <p className="text-sm mt-2">© 2024 Tous droits réservés.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:underline">À propos</a>
            <a href="#" className="text-sm hover:underline">Contact</a>
            <a href="#" className="text-sm hover:underline">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 