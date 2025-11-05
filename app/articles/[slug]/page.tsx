import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getPostBySlug, getAllPosts } from '../../data/posts';
import Link from 'next/link';

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const formattedContent = post ? parseContent(post.content) : [];

  if (!post) {
    return (
      <>
        <Header />
        <main className="container-custom py-16 min-h-screen">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/articles" className="btn-primary inline-block">
            Back to Articles
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const relatedPosts = getAllPosts()
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3);

  return (
    <>
      <Header />
      <main>
        {/* Article Header */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-16">
          <div className="container-custom max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white text-primary px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              <span className="opacity-90">{post.readTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="opacity-90">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="container-custom max-w-4xl py-12">
          <div className="prose prose-lg max-w-none">
            {formattedContent}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="container-custom">
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    href={`/articles/${relatedPost.slug}`}
                    className="card hover:shadow-2xl transition-all no-underline"
                  >
                    <div className="p-6">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-bold mt-4 mb-2 text-dark">{relatedPost.title}</h3>
                      <p className="text-gray-600 text-sm">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function parseContent(content: string): JSX.Element[] {
  const lines = content.trim().split('\n');
  const elements: JSX.Element[] = [];
  let currentCodeBlock: string[] = [];
  let codeLanguage = '';
  let inCodeBlock = false;
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block detection
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.slice(3).trim() || 'javascript';
        currentCodeBlock = [];
      } else {
        inCodeBlock = false;
        elements.push(
          <div key={key++} className="my-6 rounded-lg overflow-hidden bg-gray-900">
            <pre className="p-6 overflow-x-auto">
              <code className="text-green-400 font-mono text-sm">{currentCodeBlock.join('\n')}</code>
            </pre>
          </div>
        );
        currentCodeBlock = [];
      }
      continue;
    }

    if (inCodeBlock) {
      currentCodeBlock.push(line);
      continue;
    }

    // Headers
    if (line.startsWith('# ')) {
      elements.push(<h1 key={key++} className="text-4xl font-bold mt-8 mb-4 text-dark">{line.slice(2)}</h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={key++} className="text-3xl font-bold mt-8 mb-4 text-dark">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={key++} className="text-2xl font-bold mt-6 mb-3 text-dark">{line.slice(4)}</h3>);
    }
    // Paragraphs
    else if (line.trim() !== '') {
      elements.push(<p key={key++} className="mb-4 text-gray-700 leading-relaxed">{line}</p>);
    }
  }

  return elements;
}
