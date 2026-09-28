import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Icon from '@/components/Icon';
import ListingRow from '@/components/ListingRow';
import PostCard from '@/components/PostCard';
import ContactSection from '@/components/ContactSection';
import HomeVideoSection from '@/components/HomeVideoSection';
import { roboticsItems } from '@/lib/data/roboticsItems';
import { roboticsCategories } from '@/lib/data/categories';
import { newsPosts } from '@/lib/data/newsPosts';

export const metadata = {
  title: 'AI and Robotics Solutions | Askdroid – Insights, News & Tools',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  const featuredRobotics = roboticsItems.slice(0, 6);
  const homeCategories = roboticsCategories.slice(0, 8);

  return (
    <>
      <Hero />

      <section id="directory">
        <div className="container">
          <span className="eyebrow">Discover our expertise</span>
          <h2>AI and robotics solutions driving the future of industry</h2>
          <p>
            Harness the power of machine learning and deep neural networks. Our directory is built to
            enhance decision-making, automate processes, and help you find the right partner — plus
            explore the synergy between man and machine through state-of-the-art robotics technologies.
          </p>

          <div className="feature-grid">
            <div className="feature-grid__item">
              <span className="feature-grid__index">01</span>
              <h3>Robotics technologies</h3>
              <p>
                From industrial automation to advanced robotic systems, we curate solutions that redefine
                efficiency and precision.
              </p>
            </div>
            <div className="feature-grid__item">
              <span className="feature-grid__index">02</span>
              <h3>Innovation at its core</h3>
              <p>Our commitment to innovation drives us to surface solutions that stay ahead of the curve.</p>
            </div>
            <div className="feature-grid__item">
              <span className="feature-grid__index">03</span>
              <h3>Expertise you can trust</h3>
              <p>Backed by a team of seasoned professionals, we bring unparalleled expertise to every listing.</p>
            </div>
            <div className="feature-grid__item">
              <span className="feature-grid__index">04</span>
              <h3>Global impact</h3>
              <p>With a global footprint, the technologies in our directory are making an impact worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hairline-top editorial-feature">
        <div className="container">
          <div className="split split--editorial">
            <div className="editorial-copy">
              <span className="eyebrow">Editorial</span>
              <h2>Meet the Time-Twisted Trio</h2>
              <p>
                Get to know the fascinating characters of &apos;Quantum, Time-Traveling Comedy Takes&apos;: Six
                of Nine, the futuristic tech-savvy sister of Seven of Nine; Johann Einstein, the witty
                grandson of Albert Einstein; and Democritus, the ancient philosopher known as the
                &apos;Father of Atomic Theory.&apos; Together, they navigate through science, history, and
                comedy, bringing humor and insight to their unique Zoom meetings.
              </p>
              <Link href="/podcasts" className="btn btn-outline">
                Watch the series
              </Link>
            </div>
            <div className="split__media split__media--feature">
              <div className="media-card">
                <Image
                  src="/images/seven-of-nine-framed.webp"
                  alt="Meet the Time-Twisted Trio"
                  width={640}
                  height={480}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeVideoSection />

      <section className="hairline-top">
        <div className="container">
          <span className="eyebrow">Categories</span>
          <div className="section-head">
            <h2>Browse by category</h2>
            <Link href="/robotics" className="text-link">
              View all categories <Icon name="arrow" size={14} />
            </Link>
          </div>
          <div className="category-grid">
            {homeCategories.map((cat) => (
              <Link href={`/robotics?category=${cat.slug}`} key={cat.slug} className="category-grid__item">
                <Icon name={cat.icon} size={18} />
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-top" id="news">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Latest news</span>
              <h2>What&apos;s moving the industry</h2>
            </div>
            <Link href="/news" className="text-link">
              View all news <Icon name="arrow" size={14} />
            </Link>
          </div>
          <div className="post-grid">
            {newsPosts.map((post) => (
              <PostCard key={post.slug} post={post} basePath="/news" />
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-top">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Robotics directory</span>
              <h2>Featured robotics listings</h2>
            </div>
            <Link href="/robotics" className="text-link">
              View all <Icon name="arrow" size={14} />
            </Link>
          </div>
          <div className="listing listing--featured">
            {featuredRobotics.map((item) => (
              <ListingRow key={item.slug} item={item} basePath="/robotics" />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
