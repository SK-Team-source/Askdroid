import Link from 'next/link';
import Icon from './Icon';
import { blogPosts } from '@/lib/data/blogPosts';

export default function DirectorySidebar({ categories, basePath }) {
  const recent = blogPosts.slice(0, 5);

  return (
    <aside>
      <div className="sidebar-card">
        <h4>Categories</h4>
        <div className="sidebar-list">
          {categories.map((cat) => (
            <Link href={`${basePath}?category=${cat.slug}`} key={cat.slug} className="sidebar-cat">
              <Icon name={cat.icon} size={16} />
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="sidebar-card">
        <h4>Recent Posts</h4>
        <ul className="sidebar-list">
          {recent.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-card">
        <h4>Have something to add?</h4>
        <p style={{ fontSize: '0.88rem', marginBottom: 16 }}>
          Suggest a listing or correction for the Askdroid directory.
        </p>
        <Link href="/contact-us" className="btn btn-outline btn-block">
          Contact us
        </Link>
      </div>
    </aside>
  );
}
