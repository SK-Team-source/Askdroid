import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactSection from '@/components/ContactSection';
import { blogPosts } from '@/lib/data/blogPosts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} - Askdroid`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function BlogArticlePage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/blog">Blog</Link> / {post.title}
          </p>
          <span className="listing-row__tag">{post.category}</span>
          <h1 style={{ marginTop: 12 }}>{post.title}</h1>
          <p className="post-card__date">{formatDate(post.date)}</p>
        </div>
      </section>

      <section className="hairline-top">
        <div className="container">
          <div className="detail-body">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <Link href="/blog" className="btn btn-outline" style={{ marginTop: 20 }}>
            Back to blog
          </Link>
        </div>
      </section>

      {more.length > 0 && (
        <section className="hairline-top">
          <div className="container">
            <div className="section-head">
              <h2>More from the blog</h2>
            </div>
            <div className="related-grid">
              {more.map((p) => (
                <Link href={`/blog/${p.slug}`} key={p.slug} className="service-card">
                  <span className="listing-row__tag">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p style={{ margin: 0 }}>{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </>
  );
}
