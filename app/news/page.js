import PageHero from '@/components/PageHero';
import PostCard from '@/components/PostCard';
import ContactSection from '@/components/ContactSection';
import { newsPosts } from '@/lib/data/newsPosts';

export const metadata = {
  title: 'AI Robotics News – Latest Breakthroughs & Updates | Askdroid',
  description:
    'Get the latest AI robotics news at Askdroid — breaking stories, funding rounds, product launches, and research breakthroughs from the global robotics ecosystem.',
  alternates: { canonical: '/news' },
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        label="News"
        title="AI Robotics News"
        description="AI robotics news is moving faster than ever before. From billion-dollar funding rounds and humanoid robot launches, to groundbreaking VLA model releases and regulatory milestones — Askdroid cuts through the noise to bring you the stories that matter, clearly written and always free to read."
        visual="news"
      />

      <section>
        <div className="container">
          <div className="post-grid">
            {newsPosts.map((post) => (
              <PostCard key={post.slug} post={post} basePath="/news" />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
