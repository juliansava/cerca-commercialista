import React from 'react';
import { HelpCircle, MessageCircle } from 'lucide-react';

interface QAItem {
  id: string;
  question: string;
  answer: string;
  date: string;
  author: string;
  replies: number;
}

interface QAResultsProps {
  questions: QAItem[];
  query: string;
}

export default function QAResults({ questions, query }: QAResultsProps) {
  if (questions.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        Domande e Risposte ({questions.length})
      </h2>
      <div className="space-y-4">
        {questions.map((qa) => (
          <div
            key={qa.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-500">{qa.date}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {qa.question}
            </h3>
            <p className="text-gray-600 mb-4">{qa.answer}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>By {qa.author}</span>
                <span>•</span>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {qa.replies} risposte
                </div>
              </div>
              <a
                href={`/qa/${qa.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Vedi discussione
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}