import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { blogTopics } from '../data/blog';

const cities = [
  'Roma', 'Milano', 'Napoli', 'Torino', 'Palermo', 'Genova', 'Bologna',
  'Firenze', 'Bari', 'Catania', 'Venezia', 'Verona', 'Messina', 'Padova',
  'Trieste', 'Brescia', 'Parma', 'Taranto', 'Prato', 'Modena'
];

const services = [
  'Contabilità Aziendale',
  'Dichiarazione dei Redditi',
  'Consulenza Fiscale',
  'Pianificazione Fiscale',
  'Revisione Contabile',
  'Consulenza Societaria',
  'Gestione Paghe',
  'Contenzioso Tributario'
];

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter('location')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            Cerca per città
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          {activeDropdown === 'location' && (
            <div 
              className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
              onMouseEnter={() => handleMouseEnter('location')}
              onMouseLeave={handleMouseLeave}
            >
              <div className="grid grid-cols-2 gap-2 p-4">
                {cities.map((city) => (
                  <Link
                    key={city}
                    to={`/search?location=${encodeURIComponent(city)}`}
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter('practice')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            Cerca per servizio
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          {activeDropdown === 'practice' && (
            <div 
              className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
              onMouseEnter={() => handleMouseEnter('practice')}
              onMouseLeave={handleMouseLeave}
            >
              {services.map((service) => (
                <Link
                  key={service}
                  to={`/search?service=${encodeURIComponent(service)}`}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm"
                >
                  {service}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div
          className="relative group"
          onMouseEnter={() => handleMouseEnter('blog')}
          onMouseLeave={handleMouseLeave}
        >
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            Blog e Domande
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          {activeDropdown === 'blog' && (
            <div 
              className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
              onMouseEnter={() => handleMouseEnter('blog')}
              onMouseLeave={handleMouseLeave}
            >
              {blogTopics.map((topic) => (
                <Link
                  key={topic.id}
                  to={`/blog/topic/${topic.id}`}
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-50 text-sm"
                >
                  {topic.name}
                </Link>
              ))}
              <div className="border-t border-gray-100 mt-2 pt-2">
                <Link
                  to="/qa"
                  className="block px-4 py-2 text-blue-600 hover:bg-gray-50 text-sm font-medium"
                >
                  Fai una Domanda
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-600 hover:text-gray-900"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="p-4">
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mt-12 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Cerca per città</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {cities.slice(0, 8).map((city) => (
                      <Link
                        key={city}
                        to={`/search?location=${encodeURIComponent(city)}`}
                        className="text-gray-600 hover:text-blue-600 text-sm"
                        onClick={toggleMobileMenu}
                      >
                        {city}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Servizi</h3>
                  <div className="space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service}
                        to={`/search?service=${encodeURIComponent(service)}`}
                        className="block text-gray-600 hover:text-blue-600 text-sm"
                        onClick={toggleMobileMenu}
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Blog e Domande</h3>
                  <div className="space-y-2">
                    {blogTopics.map((topic) => (
                      <Link
                        key={topic.id}
                        to={`/blog/topic/${topic.id}`}
                        className="block text-gray-600 hover:text-blue-600 text-sm"
                        onClick={toggleMobileMenu}
                      >
                        {topic.name}
                      </Link>
                    ))}
                    <Link
                      to="/qa"
                      className="block text-blue-600 font-medium text-sm"
                      onClick={toggleMobileMenu}
                    >
                      Fai una Domanda
                    </Link>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Link
                    to="/login"
                    className="block w-full px-4 py-2 text-center text-blue-600 hover:bg-blue-50 rounded-lg transition-colors mb-2"
                    onClick={toggleMobileMenu}
                  >
                    Accedi
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    Registra Studio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}