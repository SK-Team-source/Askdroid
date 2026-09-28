import PageHero from '@/components/PageHero';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ListingRow from '@/components/ListingRow';
import DirectorySidebar from '@/components/DirectorySidebar';
import ContactSection from '@/components/ContactSection';
import { aiItems } from '@/lib/data/aiItems';
import { aiCategories } from '@/lib/data/categories';

export const metadata = {
  title: 'AI Archive - Askdroid',
  description: 'Browse the Askdroid AI directory: foundation models, VLAs, perception, teleoperation and more.',
  alternates: { canonical: '/ai' },
};

export default function AiDirectoryPage({ searchParams }) {
  const categorySlug = searchParams?.category;
  const q = (searchParams?.q || '').toLowerCase().trim();

  let items = aiItems;
  if (categorySlug) {
    items = items.filter((i) => i.category === categorySlug);
  }
  if (q) {
    items = items.filter(
      (i) => i.name.toLowerCase().includes(q) || i.summary.toLowerCase().includes(q)
    );
  }

  const activeCategory = aiCategories.find((c) => c.slug === categorySlug);
  const categoryMap = Object.fromEntries(aiCategories.map((c) => [c.slug, c.name]));

  return (
    <>
      <PageHero
        label="AI"
        title="AI directory"
        description="Foundation models, vision-language-action systems, perception stacks and the tooling behind embodied AI."
        visual="ai"
      />

      <section>
        <div className="container">
          <SearchBar defaultType="ai" />

          <div style={{ height: 40 }} />

          <div className="directory-layout">
            <div>
              <CategoryFilter basePath="/ai" categories={aiCategories} activeSlug={categorySlug} />

              {items.length === 0 ? (
                <p>No entries matched {activeCategory ? activeCategory.name : 'your search'}. Try another category.</p>
              ) : (
                <div className="listing">
                  {items.map((item) => (
                    <ListingRow
                      key={item.slug}
                      item={item}
                      basePath="/ai"
                      categoryName={categoryMap[item.category]}
                    />
                  ))}
                </div>
              )}
            </div>

            <DirectorySidebar categories={aiCategories} basePath="/ai" />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
