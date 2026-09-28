import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import Icon from '@/components/Icon';
import { podcastEpisodes } from '@/lib/data/podcastEpisodes';

export const metadata = {
  title: 'AI Podcasts & Robotics Insights | Askdroid',
  description:
    'Explore the premier AI podcasts hub on Askdroid. Discover cutting-edge insights into robotics, AGI, tech innovations, and industry trends.',
  alternates: { canonical: '/podcasts' },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function PodcastsPage() {
  return (
    <>
      <PageHero
        label="Podcasts"
        title="Everyday is a chance to learn new things"
        description="Join us on a journey into the fascinating world of artificial intelligence with Askdroid — exploring trends, innovations, and the ethical considerations shaping AI's future."
        visual="podcasts"
      />

      <section>
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">About the show</span>
              <h2>Hosted by Salar Golestanian</h2>
              <p>
                Welcome to Askdroid, where we delve into the captivating world of artificial intelligence.
                Our podcast is dedicated to exploring the latest advancements, ethical dilemmas, and
                real-world applications of AI, hosted by Salar Golestanian and team.
              </p>
              <p>
                At Askdroid, we believe in making AI accessible to everyone. Whether you&apos;re an AI
                enthusiast, a seasoned professional, or simply curious about the future, our podcast offers
                engaging discussions, expert interviews, and thought-provoking insights that will expand
                your understanding of AI and its impact on our lives.
              </p>
              <Link href="/contact-us" className="btn btn-primary">
                Subscribe for updates
              </Link>
            </div>
            <div className="service-card">
              <span className="service-card__icon">
                <Icon name="chat" size={20} />
              </span>
              <h3>The feature of AI</h3>
              <p style={{ margin: 0 }}>
                Join us as we explore the groundbreaking advancements in AI reshaping industries — from
                healthcare to transportation to the future of smart cities. Subscribe for more
                thought-provoking content and stay ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="hairline-top">
        <div className="container">
          <div className="section-head">
            <h2>Latest episode</h2>
          </div>
          <div className="post-grid" style={{ gridTemplateColumns: '1fr' }}>
            {podcastEpisodes.map((ep) => (
              <article className="post-card" key={ep.slug}>
                <div className="post-card__figure">
                  <Image src={ep.image} alt="" width={128} height={128} />
                </div>
                <div>
                  <span className="post-card__date">{formatDate(ep.date)}</span>
                  <h3>{ep.title}</h3>
                  <p>{ep.excerpt}</p>
                  <span className="text-link" style={{ opacity: 0.6, cursor: 'default' }}>
                    Full episode coming soon
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hairline-top">
        <div className="container">
          <span className="eyebrow">Ethics &amp; regulation</span>
          <h2>The future of AI: ethical considerations and regulation</h2>
          <p style={{ maxWidth: '70ch' }}>
            As AI continues to evolve, it&apos;s essential to consider the ethical implications of its
            development and deployment. Questions about AI&apos;s impact on employment, privacy, and
            autonomy need to be addressed. Regulations must be put in place to ensure that AI is developed
            and used responsibly.
          </p>
          <p style={{ maxWidth: '70ch' }}>
            The future of sentient AI, AGI, and ASI holds great promise, but also significant challenges.
            It&apos;s essential for researchers, policymakers, and society as a whole to work together to
            ensure that AI is developed and used in a way that benefits humanity.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
