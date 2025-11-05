import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="container-custom max-w-4xl text-center">
            <h1 className="text-5xl font-bold mb-6">About Code Tricks</h1>
            <p className="text-xl opacity-90">
              Your trusted resource for modern web development
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container-custom max-w-4xl py-16">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-dark">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Code Tricks is dedicated to helping developers of all skill levels master modern web development.
              We believe in practical, hands-on tutorials that you can immediately apply to your projects.
            </p>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-dark">What We Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3 text-dark">CSS & Design</h3>
                <p className="text-gray-600">
                  From Flexbox and Grid to animations and responsive design, we cover everything CSS.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3 text-dark">JavaScript</h3>
                <p className="text-gray-600">
                  Modern JavaScript, ES6+, TypeScript, and everything you need to write better code.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3 text-dark">React & Frameworks</h3>
                <p className="text-gray-600">
                  Deep dives into React, Next.js, and other modern frameworks and libraries.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-3 text-dark">Web Accessibility</h3>
                <p className="text-gray-600">
                  Building inclusive web applications that work for everyone.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-12 text-dark">Our Team</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our articles are written by experienced developers who are passionate about sharing their knowledge.
              Each author brings their unique perspective and real-world experience to help you learn effectively.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { name: 'Sarah Johnson', role: 'CSS Expert' },
                { name: 'Mike Chen', role: 'JavaScript Specialist' },
                { name: 'Emily Rodriguez', role: 'Accessibility Advocate' },
                { name: 'David Park', role: 'Full Stack Developer' },
                { name: 'Lisa Wang', role: 'React Engineer' },
                { name: 'Alex Turner', role: 'UI/UX Designer' },
              ].map((author) => (
                <div key={author.name} className="card p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-lg text-dark">{author.name}</h3>
                  <p className="text-gray-600 text-sm">{author.role}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6 mt-16 text-dark">Get In Touch</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Have questions, suggestions, or want to contribute? We'd love to hear from you!
              Join our community and let's learn together.
            </p>

            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-white text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="mb-6 opacity-90">
                Subscribe to our newsletter for weekly tips and tutorials
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
