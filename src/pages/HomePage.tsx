import React from 'react';
import { Search, Users, Award } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import NearbyAccountants from '../components/sections/NearbyAccountants';
import PremiumAccountants from '../components/sections/PremiumAccountants';
import ServiceCategories from '../components/sections/ServiceCategories';
import GeographicCategories from '../components/sections/GeographicCategories';

export default function HomePage() {
  const handleSearch = (query: string, filters: any) => {
    console.log('Search:', query, filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="relative">
            {/* Mobile background image */}
            <div className="md:hidden absolute inset-0 z-0">
              <img
                src="https://img.freepik.com/free-vector/accounting-concept-illustration_114360-23749.jpg"
                alt="Accounting illustration"
                className="w-full h-full object-cover opacity-20"
              />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="flex-1">
                <div className="max-w-xl">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center md:text-left">
                    Trova{' '}
                    <span className="relative">
                      <span className="relative z-10">il tuo commercialista</span>
                      <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/60 -rotate-1"></span>
                    </span>
                    {' '}ideale
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 text-center md:text-left">
                    Connettiti con professionisti qualificati nella tua zona
                  </p>
                  <SearchBar onSearch={handleSearch} />
                </div>
              </div>
              {/* Desktop image */}
              <div className="flex-1 hidden md:flex justify-center md:justify-end">
                <img
                  src="https://img.freepik.com/free-vector/accounting-concept-illustration_114360-23749.jpg"
                  alt="Accounting illustration"
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center md:flex-col md:items-center p-6">
            <Search className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mr-4 md:mr-0 md:mb-4" />
            <div className="md:text-center">
              <h3 className="text-xl font-semibold mb-2">Ricerca Facile</h3>
              <p className="text-gray-600">Trova il commercialista giusto con i nostri filtri di ricerca</p>
            </div>
          </div>
          <div className="flex items-center md:flex-col md:items-center p-6">
            <Users className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mr-4 md:mr-0 md:mb-4" />
            <div className="md:text-center">
              <h3 className="text-xl font-semibold mb-2">Professionisti Verificati</h3>
              <p className="text-gray-600">Tutti i commercialisti sono verificati e certificati</p>
            </div>
          </div>
          <div className="flex items-center md:flex-col md:items-center p-6">
            <Award className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mr-4 md:mr-0 md:mb-4" />
            <div className="md:text-center">
              <h3 className="text-xl font-semibold mb-2">Recensioni di Qualità</h3>
              <p className="text-gray-600">Leggi recensioni autentiche dai clienti</p>
            </div>
          </div>
        </div>
        
        <NearbyAccountants />
        <PremiumAccountants />
        <ServiceCategories />
        <GeographicCategories />
      </main>
    </div>
  );
}