import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactSection from '@/components/ContactSection';
import { newsPosts } from '@/lib/data/newsPosts';

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = newsPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} - Askdroid`,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
  };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function NewsArticlePage({ params }) {
  const post = newsPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/news">News</Link> / {post.title}
          </p>
          <span className="post-card__date">{formatDate(post.date)}</span>
          <h1>{post.title}</h1>
        </div>
      </section>

      <section className="hairline-top">
        <div className="container">
          {post.image && (
            <div className="figure-frame" style={{ marginBottom: 40, maxWidth: 760 }}>
              <Image src={post.image} alt="" width={760} height={420} />
            </div>
          )}
          <div className="detail-body">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <Link href="/news" className="btn btn-outline" style={{ marginTop: 20 }}>
            Back to news
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
