# Code Tricks - Modern Web Development Blog

A clean, modern blog inspired by CSS-Tricks, built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean, modern design inspired by CSS-Tricks
- 📱 Fully responsive layout
- 🚀 Built with Next.js 14 (App Router)
- 💎 TypeScript for type safety
- 🎭 Tailwind CSS for styling
- 📝 Multiple blog articles with categories
- 🔍 Search and filter functionality
- 🏷️ Tag system
- 👥 Author profiles
- 📖 Syntax-highlighted code blocks
- ⚡ Static export ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Extract the project files to your desired location

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

Build the static site:
```bash
npm run build
```

This will create an optimized production build in the `out` directory that you can deploy anywhere.

### Run Production Build Locally

After building, you can serve the static files locally:
```bash
npx serve@latest out
```

## Project Structure

```
├── app/
│   ├── components/       # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── PostCard.tsx
│   │   └── CodeBlock.tsx
│   ├── data/            # Blog posts data
│   │   └── posts.ts
│   ├── articles/        # Articles pages
│   │   ├── page.tsx     # All articles listing
│   │   └── [slug]/      # Individual article pages
│   ├── about/           # About page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Customization

### Adding New Blog Posts

Edit `app/data/posts.ts` and add new post objects to the `posts` array:

```typescript
{
  id: 'unique-id',
  title: 'Your Article Title',
  slug: 'your-article-slug',
  excerpt: 'Short description...',
  author: 'Author Name',
  date: '2024-01-15',
  category: 'Category',
  tags: ['tag1', 'tag2'],
  readTime: '5 min',
  featured: false,
  content: `
    # Your Article Content

    Write your article in markdown format...
  `
}
```

### Styling

The blog uses Tailwind CSS. You can customize colors and styles in:
- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and custom classes

### Categories

Categories are automatically generated from your posts. To add new categories, simply use them in your posts' `category` field.

## Deployment

This blog is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

The build output will be in the `out` directory after running `npm run build`.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Syntax Highlighter** - Code syntax highlighting

## License

MIT License - feel free to use this project for your own blog!
