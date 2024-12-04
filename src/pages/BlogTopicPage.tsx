import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileText, Clock } from 'lucide-react';
import { blogPosts, blogTopics } from '../data/blog';
import PageTitle from '../components/PageTitle';

export default function BlogTopicPage() {
  const { topic } = useParams<{ topic: string }>();
  const topicInfo = blogTopics.find(t => t.id === topic);
  const topicPosts = blogPosts.filter(post => post.topic === topic);

  if (!topicInfo) {
    return <div>Topic not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageTitle
          title={topicInfo.name}
          subtitle={topicInfo.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {topicPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${topic}/${post.slug}`}
              className="group"
            >
              <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group-hover:shadow-md transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime} min
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}