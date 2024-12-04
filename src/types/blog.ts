export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    topic: string;
    readTime: number;
    image: string;
  }
  
  export interface BlogTopic {
    id: string;
    name: string;
    description: string;
  }