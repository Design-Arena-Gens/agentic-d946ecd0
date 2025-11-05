import Header from './components/Header';
import Footer from './components/Footer';
import PostCard from './components/PostCard';
import { getAllPosts, getFeaturedPosts } from './data/posts';
import Link from 'next/link';

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = getAllPosts().slice(0, 4);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Learn Modern Web Development
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Tutorials, tips, and tricks for CSS, JavaScript, React, and more.
                Level up your web development skills with practical, in-depth articles.
              </p>
              <div className="flex gap-4">
                <Link href="/articles" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all no-underline">
                  Browse Articles
                </Link>
                <button className="border-2 border-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="container-custom py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Featured Articles</h2>
            <Link href="/articles" className="text-primary font-semibold hover:text-secondary no-underline">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map(post => (
              <PostCard key={post.id} post={post} featured />
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-4xl font-bold mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {recentPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container-custom py-16">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest articles and tips delivered to your inbox weekly.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="text-4xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['CSS', 'JavaScript', 'React', 'Accessibility'].map(category => (
                <Link
                  key={category}
                  href={`/articles?category=${category}`}
                  className="card p-6 text-center hover:scale-105 transition-transform no-underline"
                >
                  <h3 className="text-2xl font-bold text-dark">{category}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
