import Link from 'next/link';
import { notFound } from 'next/navigation';
import MonogramThumb from '@/components/MonogramThumb';
import ContactSection from '@/components/ContactSection';
import Icon from '@/components/Icon';
import { roboticsItems } from '@/lib/data/roboticsItems';
import { roboticsCategories } from '@/lib/data/categories';

export function generateStaticParams() {
  return roboticsItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
  const item = roboticsItems.find((i) => i.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.name} - Askdroid`,
    description: item.summary,
    alternates: { canonical: `/robotics/${item.slug}` },
  };
}

export default function RoboticsItemPage({ params }) {
  const item = roboticsItems.find((i) => i.slug === params.slug);
  if (!item) notFound();

  const category = roboticsCategories.find((c) => c.slug === item.category);
  const related = roboticsItems
    .filter((i) => i.category === item.category && i.slug !== item.slug)
    .slice(0, 3);

  return (
    <>
      <section className="robotics-banner" aria-label="Robotics technology">
        <div className="robotics-banner__art" aria-hidden="true">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <rect width="100" height="100" fill="#050a10" />
            <path
              d="M50 26 C40 26 34 34 34 45 C34 53 38 58 38 58 L38 66 C30 70 28 78 28 84 L72 84 C72 78 70 70 62 66 L62 58 C62 58 66 53 66 45 C66 34 60 26 50 26 Z"
              fill="none"
              stroke="#38c8ff"
              strokeWidth="1.4"
              opacity="0.7"
            />
            <g fill="#96f0ff">
              <circle cx="44" cy="42" r="2.4" />
              <circle cx="56" cy="42" r="2.4" />
              <circle cx="50" cy="50" r="2.6" />
              <circle cx="46" cy="56" r="2" />
              <circle cx="54" cy="56" r="2" />
            </g>
          </svg>
          <svg className="robotics-banner__reflection" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <rect width="100" height="100" fill="#050a10" />
            <path
              d="M50 26 C40 26 34 34 34 45 C34 53 38 58 38 58 L38 66 C30 70 28 78 28 84 L72 84 C72 78 70 70 62 66 L62 58 C62 58 66 53 66 45 C66 34 60 26 50 26 Z"
              fill="none"
              stroke="#38c8ff"
              strokeWidth="1.4"
              opacity="0.7"
            />
            <g fill="#96f0ff">
              <circle cx="44" cy="42" r="2.4" />
              <circle cx="56" cy="42" r="2.4" />
              <circle cx="50" cy="50" r="2.6" />
              <circle cx="46" cy="56" r="2" />
              <circle cx="54" cy="56" r="2" />
            </g>
          </svg>
        </div>
      </section>

      <section className="hairline-top">
        <div className="container">
          <div className="detail-body">
            <p>{item.detail}</p>
          </div>

          <div className="tag-row">
            <Link href="/robotics" className="btn btn-outline">
              <Icon name="arrow" size={16} style={{ transform: 'rotate(180deg)' }} /> Back to robotics directory
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
                <Link href={`/robotics/${r.slug}`} key={r.slug} className="service-card">
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
