import Link from 'next/link';
import type { Post } from '../data/posts';

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  return (
    <article className={`card ${featured ? 'md:col-span-2' : ''}`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">{post.readTime}</span>
        </div>

        <Link href={`/articles/${post.slug}`} className="no-underline">
          <h2 className={`mb-3 text-dark hover:text-primary transition-colors ${featured ? 'text-3xl' : 'text-2xl'}`}>
            {post.title}
          </h2>
        </Link>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold text-dark">{post.author}</p>
              <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
            </div>
          </div>

          <Link href={`/articles/${post.slug}`} className="text-primary font-semibold hover:text-secondary no-underline">
            Read More →
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map(tag => (
            <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
