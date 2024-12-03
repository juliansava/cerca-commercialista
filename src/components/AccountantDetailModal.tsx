import React from 'react';
import { X, Star, MapPin, Phone, Mail, Globe, Clock, Award, Building, Briefcase } from 'lucide-react';
import type { Accountant } from '../types';

interface AccountantDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  accountant: Accountant;
  onConsultationClick: () => void;
}

export default function AccountantDetailModal({ 
  isOpen, 
  onClose, 
  accountant,
  onConsultationClick 
}: AccountantDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start md:items-center justify-center z-50 p-0 md:p-4 overflow-y-auto">
      <div className="bg-white w-full md:max-w-4xl md:rounded-xl relative min-h-screen md:min-h-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            <img
              src={accountant.photoUrl}
              alt={accountant.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto md:mx-0"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">{accountant.name}</h2>
                {accountant.isPremium && (
                  <span className="px-4 py-1.5 text-sm font-medium text-amber-700 bg-amber-50 rounded-full inline-block mt-2 md:mt-0">
                    Premium
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <Star className="w-5 h-5 text-amber-400 mr-1" />
                <span className="font-medium">{accountant.rating.toFixed(1)}</span>
                <span className="mx-1">·</span>
                <span>{accountant.reviewCount} recensioni</span>
              </div>
              <p className="mt-3 text-gray-600">{accountant.bio}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Informazioni di Contatto</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                  <span>{accountant.address.street}, {accountant.address.city}, {accountant.address.state} {accountant.address.zipCode}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                  <a href={`tel:${accountant.contact.phone}`} className="hover:text-blue-600">
                    {accountant.contact.phone}
                  </a>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                  <a href={`mailto:${accountant.contact.email}`} className="hover:text-blue-600 break-all">
                    {accountant.contact.email}
                  </a>
                </div>
                {accountant.contact.website && (
                  <div className="flex items-center text-gray-600">
                    <Globe className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                    <a 
                      href={accountant.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 break-all"
                    >
                      {accountant.contact.website}
                    </a>
                  </div>
                )}
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                  <span>
                    {Object.entries(accountant.officeHours).map(([days, hours]) => (
                      `${days}: ${hours}`
                    ))}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Certificazioni</h3>
                <div className="space-y-2">
                  {accountant.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <Award className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Servizi Offerti</h3>
                <div className="space-y-2">
                  {accountant.services.map((service, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <Briefcase className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Settori di Competenza</h3>
                <div className="space-y-2">
                  {accountant.industries.map((industry, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <Building className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                      <span>{industry}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Specializzazioni</h3>
                <div className="flex flex-wrap gap-2">
                  {accountant.specializations.map((spec, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Chiudi
            </button>
            <button
              onClick={() => {
                onConsultationClick();
                onClose();
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Richiedi Consulenza
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}