import Link from 'next/link';
import { notFound } from 'next/navigation';
import MonogramThumb from '@/components/MonogramThumb';
import ContactSection from '@/components/ContactSection';
import Icon from '@/components/Icon';
import { aiItems } from '@/lib/data/aiItems';
import { aiCategories } from '@/lib/data/categories';

export function generateStaticParams() {
  return aiItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const item = aiItems.find((i) => i.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.name} - Askdroid`,
    description: item.summary,
    alternates: { canonical: `/ai/${item.slug}` },
  };
}

export default function AiItemPage({ params }) {
  const item = aiItems.find((i) => i.slug === params.slug);
  if (!item) notFound();

  const category = aiCategories.find((c) => c.slug === item.category);
  const related = aiItems.filter((i) => i.category === item.category && i.slug !== item.slug).slice(0, 3);

  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="container">
          <p className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/ai">AI</Link> / {item.name}
          </p>

          <div className="detail-hero">
            <span className="detail-hero__thumb">
              <MonogramThumb name={item.name} size={120} />
            </span>
            <div>
              {category && (
                <Link href={`/ai?category=${category.slug}`} className="listing-row__tag">
                  {category.name}
                </Link>
              )}
              <h1 style={{ marginTop: 8 }}>{item.name}</h1>
              <p style={{ fontSize: '1.05rem' }}>{item.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hairline-top">
        <div className="container">
          <div className="detail-body">
            <p>{item.detail}</p>
          </div>

          <div className="tag-row">
            <Link href="/ai" className="btn btn-outline">
              <Icon name="arrow" size={16} style={{ transform: 'rotate(180deg)' }} /> Back to AI directory
            </Link>
            <Link href="/contact-us" className="btn btn-primary">
              Suggest an edit
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="hairline-top">
          <div className="container">
            <div className="section-head">
              <h2>More in {category?.name}</h2>
            </div>
            <div className="related-grid">
              {related.map((r) => (
                <Link href={`/ai/${r.slug}`} key={r.slug} className="service-card">
                  <span className="service-card__icon">
                    <MonogramThumb name={r.name} size={46} />
                  </span>
                  <h3>{r.name}</h3>
                  <p style={{ margin: 0 }}>{r.summary}</p>
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
