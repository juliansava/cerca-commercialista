import { BlogPost, BlogTopic } from '../types/blog';

export const blogTopics: BlogTopic[] = [
  {
    id: 'novita-fiscali',
    name: 'Novità Fiscali',
    description: 'Aggiornamenti e novità in ambito fiscale e tributario'
  },
  {
    id: 'guide-pratiche',
    name: 'Guide Pratiche',
    description: 'Guide step-by-step per gestire adempimenti fiscali'
  },
  {
    id: 'casi-studio',
    name: 'Casi Studio',
    description: 'Analisi dettagliate di casi reali e soluzioni pratiche'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Novità Fiscali 2024: Cosa Cambia per le Partite IVA',
    excerpt: 'Una panoramica completa delle principali novità fiscali per il 2024 e come impattano le partite IVA.',
    content: `Le novità fiscali del 2024 portano importanti cambiamenti per le partite IVA. 
    In questo articolo analizziamo nel dettaglio le principali modifiche normative e il loro impatto...`,
    date: '2024-03-15',
    author: 'Marco Rossi',
    topic: 'novita-fiscali',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '2',
    title: 'Guida alla Fatturazione Elettronica per Principianti',
    excerpt: 'Tutto quello che devi sapere per iniziare con la fatturazione elettronica in modo corretto.',
    content: `La fatturazione elettronica è ormai obbligatoria per la maggior parte delle attività. 
    Questa guida ti aiuterà a comprendere i principi base...`,
    date: '2024-03-10',
    author: 'Laura Bianchi',
    topic: 'guide-pratiche',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '3',
    title: 'Case Study: Ottimizzazione Fiscale per Startup Innovative',
    excerpt: 'Analisi di un caso reale di ottimizzazione fiscale per una startup del settore tech.',
    content: `In questo caso studio analizziamo come una startup innovativa del settore tech 
    ha ottimizzato la propria gestione fiscale...`,
    date: '2024-03-05',
    author: 'Giuseppe Verdi',
    topic: 'casi-studio',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000'
  }
];