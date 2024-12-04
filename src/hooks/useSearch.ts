import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function useSearch() {
  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = useCallback((query: string, filters: any = {}) => {
    setIsSearching(true);
    const searchParams = new URLSearchParams();
    
    if (query) {
      searchParams.set('q', query);
    }
    
    if (filters.location) {
      searchParams.set('location', filters.location);
    }
    
    if (filters.specialization) {
      searchParams.set('specialization', filters.specialization);
    }
    
    if (filters.industry) {
      searchParams.set('industry', filters.industry);
    }

    navigate(`/search?${searchParams.toString()}`);
    setIsSearching(false);
  }, [navigate]);

  return {
    handleSearch,
    isSearching
  };
}