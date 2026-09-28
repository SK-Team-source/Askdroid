import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import { blogPosts } from '@/lib/data/blogPosts';

export const metadata = {
  title: 'Blog - Askdroid',
  description: 'Long-form articles and analysis from the Askdroid team on AI, robotics and intelligent automation.',
  alternates: { canonical: '/blog' },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Blog"
        title="Askdroid Blog"
        description="Long-form reporting and analysis on the companies, models and machines shaping intelligent automation."
        visual="blog"
      />

      <section>
        <div className="container">
          <div className="listing">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="listing-row">
                <span className="listing-row__thumb">
                  <div
                    className="monogram"
                    style={{ background: 'linear-gradient(135deg, #0c6bd6, #12151b)', fontSize: '1.2rem' }}
                  >
                    {formatDate(post.date).split(' ')[1]}
                  </div>
                </span>
                <span className="listing-row__body">
                  <span className="listing-row__tag">{post.category}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </span>
                <span className="listing-row__meta">{formatDate(post.date)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
