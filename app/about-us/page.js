import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';
import Icon from '@/components/Icon';

export const metadata = {
  title: 'About Askdroid – The Powerful AI and Robotics Directory',
  description:
    "About Askdroid: the world's leading AI and Robotics Directory. Discover our mission to connect engineers, investors and innovators with the companies shaping intelligent automation.",
  alternates: { canonical: '/about-us' },
};

const services = [
  {
    title: 'Automated translations',
    body: 'Multilingual coverage means every listing in the directory can reach the audience that needs it.',
  },
  {
    title: 'AI voices are digital',
    body: 'Podcast and video content is transcribed and indexed, so every insight stays searchable.',
  },
  {
    title: 'AI intuitive',
    body: 'Category and search tooling learns from how the community actually browses the directory.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="About us"
        description="About Askdroid's core mission: making the global AI and robotics ecosystem accessible to everyone."
        visual="about-us"
      />

      <section>
        <div className="container">
          <div className="split">
            <div className="figure-frame">
              <Image
                src="https://askdroid.com/wp-content/uploads/2023/12/people-generating-images-using-artificial-intelligence-laptop-1-1024x683.jpg"
                alt="Team using AI to build the Askdroid directory"
                width={1024}
                height={683}
              />
              <div className="stat-badge">
                <b>10,000+</b>
                <span>Clients served</span>
              </div>
            </div>
            <div>
              <span className="eyebrow">Our mission</span>
              <h2>Askdroid&apos;s vision for an open AI and robotics directory</h2>
              <p>
                Whether you are a Fortune 500 enterprise evaluating automation vendors, a university
                researcher mapping the competitive landscape, or a first-time enthusiast exploring humanoid
                robots — the Askdroid AI and Robotics Directory was built for you.
              </p>
              <p>
                We are the world&apos;s most comprehensive AI and Robotics Directory — a free, searchable
                platform built to help engineers, investors, researchers, enterprise buyers, and technology
                enthusiasts discover the companies and tools shaping the intelligent automation revolution.
              </p>
              <Link href="/contact-us" className="btn btn-primary">
                Start exploring
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="hairline-top">
        <div className="container">
          <div className="split reverse">
            <div className="split__media">
              <Image
                src="https://askdroid.com/wp-content/uploads/2023/12/4743-1-1024x574.jpg"
                alt="Askdroid team collaborating on the AI and robotics directory"
                width={1024}
                height={574}
              />
            </div>
            <div>
              <span className="eyebrow">Inclusive design</span>
              <h2>Built with every kind of visitor in mind</h2>
              <p>
                From bin-picking cameras to humanoid foundation models, every category is written in plain
                language first — technical depth is always one click away in the full listing.
              </p>
            </div>
          </div>

          <div className="service-row">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <span className="service-card__icon">
                  <Icon name="sparkle" size={20} />
                </span>
                <h3>{s.title}</h3>
                <p style={{ margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="quote-block">
        <div className="container">
          <blockquote>
            &ldquo;Using trending technologies, we surface the best AI-based applications with expert
            context, helping teams make their next automation decision with confidence.&rdquo;
          </blockquote>
          <cite>Salar Golestanian, CEO, Askdroid</cite>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">Why AI and robotics</span>
              <h2>Choosing AI and robotics offers the opportunity for an innovative field</h2>
              <p>
                AI and robotics allow you to contribute to cutting-edge technology, solve problems, and make
                a positive difference in society. Explore the limitless possibilities of intelligent
                technology, where every line of code is a stroke of genius, shaping a future defined by
                innovation and excellence.
              </p>
            </div>
            <div>
              <div className="service-card" style={{ marginBottom: 20 }}>
                <span className="service-card__icon">
                  <Icon name="chip" size={20} />
                </span>
                <h3>Technological advancements</h3>
                <p style={{ margin: 0 }}>
                  AI and robotics are rapidly advancing fields that offer exciting opportunities for
                  innovation and discovery.
                </p>
              </div>
              <div className="service-card">
                <span className="service-card__icon">
                  <Icon name="bolt" size={20} />
                </span>
                <h3>Entrepreneurial opportunities</h3>
                <p style={{ margin: 0 }}>
                  The rapid growth of AI and robotics has created a multitude of entrepreneurial
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
