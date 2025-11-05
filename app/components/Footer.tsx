export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Code Tricks</h3>
            <p className="text-gray-400">
              Your go-to resource for modern web development tutorials, tips, and tricks.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/articles?category=CSS" className="text-gray-400 hover:text-secondary no-underline">CSS</a></li>
              <li><a href="/articles?category=JavaScript" className="text-gray-400 hover:text-secondary no-underline">JavaScript</a></li>
              <li><a href="/articles?category=React" className="text-gray-400 hover:text-secondary no-underline">React</a></li>
              <li><a href="/articles?category=Accessibility" className="text-gray-400 hover:text-secondary no-underline">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-secondary no-underline">Home</a></li>
              <li><a href="/articles" className="text-gray-400 hover:text-secondary no-underline">All Articles</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-secondary no-underline">About</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-secondary no-underline">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary no-underline">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-secondary no-underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Code Tricks. All rights reserved. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
