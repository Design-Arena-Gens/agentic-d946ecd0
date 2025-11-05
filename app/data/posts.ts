export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Modern CSS Grid Layouts: A Complete Guide',
    slug: 'modern-css-grid-layouts',
    excerpt: 'Learn how to create responsive layouts using CSS Grid. Master the fundamentals and advanced techniques.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Layout', 'Responsive'],
    readTime: '8 min',
    featured: true,
    content: `
# Modern CSS Grid Layouts: A Complete Guide

CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease. In this comprehensive guide, we'll explore everything you need to know about CSS Grid.

## What is CSS Grid?

CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns, making it easier to design web pages without having to use floats and positioning.

## Basic Grid Setup

Here's a simple example to get you started:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

This creates a grid with three equal columns and a 20px gap between items.

## Grid Template Areas

One of the most powerful features of CSS Grid is grid template areas:

\`\`\`css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  gap: 10px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Responsive Grids

Make your grids responsive using auto-fit and minmax:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
\`\`\`

This creates a responsive grid that automatically adjusts the number of columns based on available space.

## Advanced Techniques

### Nested Grids

You can nest grids inside grids for more complex layouts:

\`\`\`css
.parent-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.child-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
\`\`\`

### Grid Alignment

Control how items align within their grid cells:

\`\`\`css
.container {
  display: grid;
  justify-items: center;
  align-items: center;
}
\`\`\`

## Browser Support

CSS Grid is supported in all modern browsers. For older browsers, you can use feature queries:

\`\`\`css
@supports (display: grid) {
  .container {
    display: grid;
  }
}
\`\`\`

## Conclusion

CSS Grid is an essential tool for modern web developers. It simplifies layout creation and makes responsive design much easier to implement. Start experimenting with Grid today and take your layouts to the next level!
    `
  },
  {
    id: '2',
    title: 'JavaScript ES2024: New Features You Should Know',
    slug: 'javascript-es2024-features',
    excerpt: 'Discover the latest JavaScript features that will improve your code quality and developer experience.',
    author: 'Mike Chen',
    date: '2024-01-12',
    category: 'JavaScript',
    tags: ['JavaScript', 'ES2024', 'Modern JS'],
    readTime: '6 min',
    featured: true,
    content: `
# JavaScript ES2024: New Features You Should Know

JavaScript continues to evolve with exciting new features. Let's explore what ES2024 brings to the table.

## Array Grouping

Group array items by a key:

\`\`\`javascript
const products = [
  { name: 'Laptop', category: 'Electronics' },
  { name: 'Shirt', category: 'Clothing' },
  { name: 'Phone', category: 'Electronics' }
];

const grouped = Object.groupBy(products, item => item.category);
// { Electronics: [...], Clothing: [...] }
\`\`\`

## Promise.withResolvers()

A cleaner way to work with promises:

\`\`\`javascript
const { promise, resolve, reject } = Promise.withResolvers();

// Use resolve/reject anywhere
setTimeout(() => resolve('Done!'), 1000);

await promise; // 'Done!'
\`\`\`

## Temporal API

Modern date and time handling:

\`\`\`javascript
const now = Temporal.Now.plainDateTimeISO();
const birthday = Temporal.PlainDate.from('2024-06-15');
const duration = birthday.since(now);
\`\`\`

## Improved Type Coercion

Better control over type conversions and safer code patterns.

## Conclusion

These features make JavaScript more powerful and developer-friendly. Start using them in your projects today!
    `
  },
  {
    id: '3',
    title: 'Building Accessible Web Applications',
    slug: 'building-accessible-web-applications',
    excerpt: 'Learn essential accessibility practices to make your web apps usable for everyone.',
    author: 'Emily Rodriguez',
    date: '2024-01-10',
    category: 'Accessibility',
    tags: ['Accessibility', 'A11y', 'WCAG', 'Best Practices'],
    readTime: '10 min',
    featured: false,
    content: `
# Building Accessible Web Applications

Accessibility isn't optional—it's essential. Let's explore how to build web applications that work for everyone.

## Semantic HTML

Use the right elements for the right job:

\`\`\`html
<!-- Good -->
<button>Click me</button>
<nav>...</nav>
<article>...</article>

<!-- Bad -->
<div onclick="...">Click me</div>
\`\`\`

## ARIA Labels

Add context where needed:

\`\`\`html
<button aria-label="Close dialog">
  <span aria-hidden="true">&times;</span>
</button>
\`\`\`

## Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

\`\`\`javascript
element.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleAction();
  }
});
\`\`\`

## Color Contrast

Maintain sufficient contrast ratios (4.5:1 for normal text, 3:1 for large text).

## Screen Reader Testing

Test with actual screen readers like NVDA, JAWS, or VoiceOver.

## Focus Management

Always show focus indicators and manage focus properly in dynamic content:

\`\`\`css
:focus-visible {
  outline: 2px solid blue;
  outline-offset: 2px;
}
\`\`\`

## Conclusion

Accessibility benefits everyone. Make it a priority from day one, not an afterthought.
    `
  },
  {
    id: '4',
    title: 'Mastering Flexbox: Tips and Tricks',
    slug: 'mastering-flexbox-tips-tricks',
    excerpt: 'Become a Flexbox expert with these practical tips and real-world examples.',
    author: 'David Park',
    date: '2024-01-08',
    category: 'CSS',
    tags: ['CSS', 'Flexbox', 'Layout'],
    readTime: '7 min',
    featured: false,
    content: `
# Mastering Flexbox: Tips and Tricks

Flexbox is perfect for one-dimensional layouts. Let's master it together.

## Basic Flexbox

\`\`\`css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## Common Patterns

### Centering Content

\`\`\`css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

### Equal Height Columns

\`\`\`css
.columns {
  display: flex;
}

.column {
  flex: 1;
}
\`\`\`

## Flex Properties

- \`flex-grow\`: How much space to take
- \`flex-shrink\`: How much to shrink
- \`flex-basis\`: Starting size

\`\`\`css
.item {
  flex: 1 0 200px; /* grow shrink basis */
}
\`\`\`

## Responsive Flexbox

\`\`\`css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.item {
  flex: 1 1 calc(50% - 10px);
}

@media (max-width: 768px) {
  .item {
    flex: 1 1 100%;
  }
}
\`\`\`

## Conclusion

Flexbox is incredibly powerful for layouts. Practice these patterns and you'll be a flex master!
    `
  },
  {
    id: '5',
    title: 'React Performance Optimization Techniques',
    slug: 'react-performance-optimization',
    excerpt: 'Speed up your React applications with these proven optimization techniques.',
    author: 'Lisa Wang',
    date: '2024-01-05',
    category: 'React',
    tags: ['React', 'Performance', 'Optimization'],
    readTime: '12 min',
    featured: true,
    content: `
# React Performance Optimization Techniques

Make your React apps lightning fast with these optimization strategies.

## 1. Use React.memo

Prevent unnecessary re-renders:

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

## 2. useMemo and useCallback

Memoize expensive calculations and functions:

\`\`\`javascript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
\`\`\`

## 3. Code Splitting

Split your code into smaller chunks:

\`\`\`javascript
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
\`\`\`

## 4. Virtualization

Render only visible items in long lists:

\`\`\`javascript
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={1000}
  itemSize={50}
>
  {Row}
</FixedSizeList>
\`\`\`

## 5. Avoid Inline Functions

Define functions outside render when possible:

\`\`\`javascript
// Bad
<button onClick={() => handleClick(id)}>

// Good
const onClick = useCallback(() => handleClick(id), [id]);
<button onClick={onClick}>
\`\`\`

## 6. Use Production Build

Always deploy production builds with optimizations enabled.

## Conclusion

Performance optimization is crucial for user experience. Apply these techniques judiciously and measure their impact.
    `
  },
  {
    id: '6',
    title: 'Web Animation Best Practices',
    slug: 'web-animation-best-practices',
    excerpt: 'Create smooth, performant animations that enhance user experience.',
    author: 'Alex Turner',
    date: '2024-01-03',
    category: 'CSS',
    tags: ['Animation', 'CSS', 'Performance'],
    readTime: '9 min',
    featured: false,
    content: `
# Web Animation Best Practices

Animations can make or break user experience. Let's do them right.

## CSS Transitions

For simple state changes:

\`\`\`css
.button {
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.button:hover {
  transform: scale(1.05);
  background-color: #007bff;
}
\`\`\`

## CSS Animations

For complex, keyframe-based animations:

\`\`\`css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.element {
  animation: slideIn 0.5s ease-out;
}
\`\`\`

## Performance Tips

Animate only these properties for 60fps:
- \`transform\`
- \`opacity\`

\`\`\`css
/* Good - GPU accelerated */
.fast {
  transform: translateX(100px);
}

/* Bad - triggers layout */
.slow {
  left: 100px;
}
\`\`\`

## JavaScript Animations

Use Web Animations API:

\`\`\`javascript
element.animate([
  { transform: 'translateX(0)', opacity: 1 },
  { transform: 'translateX(100px)', opacity: 0 }
], {
  duration: 500,
  easing: 'ease-in-out'
});
\`\`\`

## Respect User Preferences

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
\`\`\`

## Conclusion

Great animations are subtle, purposeful, and performant. Use them to guide users and enhance interactions.
    `
  }
];

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(): Post[] {
  return posts.filter(post => post.featured);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => post.category === category);
}

export function getCategories(): string[] {
  return Array.from(new Set(posts.map(post => post.category)));
}
