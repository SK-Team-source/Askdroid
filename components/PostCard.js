import Link from 'next/link';
import Image from 'next/image';
import Icon from './Icon';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function PostCard({ post, basePath }) {
  return (
    <article className="post-card">
      {post.image && (
        <div className="post-card__figure">
          <Image src={post.image} alt="" width={128} height={128} />
        </div>
      )}
      <div>
        <span className="post-card__date">{formatDate(post.date)}</span>
        <h3>
          <Link href={`${basePath}/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link href={`${basePath}/${post.slug}`} className="text-link">
          Read more <Icon name="arrow" size={14} />
        </Link>
      </div>
    </article>
  );
}
