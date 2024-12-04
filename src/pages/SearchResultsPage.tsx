import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { accountants, standardAccountants } from '../data/accountants';
import SearchBar from '../components/SearchBar';
import PageTitle from '../components/PageTitle';
import AccountantResults from '../components/SearchResults/AccountantResults';
import BlogResults from '../components/SearchResults/BlogResults';
import QAResults from '../components/SearchResults/QAResults';
import { useSearch } from '../hooks/useSearch';

// Mock data for blog posts and Q&A
const mockBlogPosts = [
  {
    id: '1',
    title: 'Come gestire la contabilità per le startup',
    excerpt: 'Una guida completa per startup e piccole imprese sulla gestione della contabilità...',
    date: '2024-03-15',
    author: 'Marco Rossi'
  },
  {
    id: '2',
    title: 'Novità fiscali 2024',
    excerpt: 'Tutte le novità fiscali e le modifiche normative per il 2024...',
    date: '2024-03-10',
    author: 'Laura Bianchi'
  }
];

const mockQA = [
  {
    id: '1',
    question: 'Come gestire la fatturazione elettronica?',
    answer: 'La fatturazione elettronica richiede l\'utilizzo di software specifici...',
    date: '2024-03-14',
    author: 'Giuseppe Verdi',
    replies: 5
  },
  {
    id: '2',
    question: 'Quali sono le scadenze fiscali più importanti?',
    answer: 'Le principali scadenze fiscali includono...',
    date: '2024-03-12',
    author: 'Anna Neri',
    replies: 3
  }
];

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const { handleSearch } = useSearch();
  
  const query = searchParams.get('q')?.toLowerCase() || '';
  const location = searchParams.get('location')?.toLowerCase() || '';
  const specialization = searchParams.get('specialization')?.toLowerCase() || '';
  const industry = searchParams.get('industry')?.toLowerCase() || '';

  const filterAccountant = (accountant: typeof accountants[0]) => {
    if (!query && !location && !specialization && !industry) return true;

    const matchesQuery = !query || 
      accountant.name.toLowerCase().includes(query) ||
      accountant.services.some(s => s.toLowerCase().includes(query)) ||
      accountant.specializations.some(s => s.toLowerCase().includes(query)) ||
      accountant.bio.toLowerCase().includes(query);

    const matchesLocation = !location ||
      accountant.address.city.toLowerCase().includes(location) ||
      accountant.address.zipCode.includes(location);

    const matchesSpecialization = !specialization ||
      accountant.specializations.some(s => s.toLowerCase().includes(specialization));

    const matchesIndustry = !industry ||
      accountant.industries.some(i => i.toLowerCase().includes(industry));

    return matchesQuery && matchesLocation && matchesSpecialization && matchesIndustry;
  };

  const filteredAccountants = [...accountants, ...standardAccountants].filter(filterAccountant);

  // Filter blog posts and QA based on query
  const filteredBlogPosts = query
    ? mockBlogPosts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      )
    : [];

  const filteredQA = query
    ? mockQA.filter(qa =>
        qa.question.toLowerCase().includes(query) ||
        qa.answer.toLowerCase().includes(query)
      )
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageTitle 
          title={query ? `Risultati per "${query}"` : 'Tutti i risultati'}
          subtitle={`${filteredAccountants.length + filteredBlogPosts.length + filteredQA.length} risultati trovati`}
        />

        <div className="space-y-12">
          <AccountantResults accountants={filteredAccountants} query={query} />
          <BlogResults posts={filteredBlogPosts} query={query} />
          <QAResults questions={filteredQA} query={query} />
        </div>
      </main>
    </div>
  );
}