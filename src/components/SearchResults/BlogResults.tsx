import React from 'react';
import { FileText } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

interface BlogResultsProps {
  posts: BlogPost[];
  query: string;
}

export default function BlogResults({ posts, query }: BlogResultsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        Articoli del Blog ({posts.length})
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-500">{post.date}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">By {post.author}</span>
              <a
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Leggi di più
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}