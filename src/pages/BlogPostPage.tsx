import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blog';

export default function BlogPostPage() {
  const { topic, slug } = useParams<{ topic: string; slug: string }>();
  const post = blogPosts.find(p => p.topic === topic && p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime} min lettura
              </div>
            </div>

            <div className="prose prose-blue max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600 leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}