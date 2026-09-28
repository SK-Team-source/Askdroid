import PageHero from '@/components/PageHero';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ListingRow from '@/components/ListingRow';
import DirectorySidebar from '@/components/DirectorySidebar';
import ContactSection from '@/components/ContactSection';
import { roboticsItems } from '@/lib/data/roboticsItems';
import { roboticsCategories } from '@/lib/data/categories';

export const metadata = {
  title: 'Robotics Archive - Askdroid',
  description: 'Browse the Askdroid robotics directory: hardware, integrators, AMRs, agriculture, aerospace and more.',
  alternates: { canonical: '/robotics' },
};

export default function RoboticsDirectoryPage({ searchParams }) {
  const categorySlug = searchParams?.category;
  const q = (searchParams?.q || '').toLowerCase().trim();

  let items = roboticsItems;
  if (categorySlug) {
    items = items.filter((i) => i.category === categorySlug);
  }
  if (q) {
    items = items.filter(
      (i) => i.name.toLowerCase().includes(q) || i.summary.toLowerCase().includes(q)
    );
  }

  const activeCategory = roboticsCategories.find((c) => c.slug === categorySlug);
  const categoryMap = Object.fromEntries(roboticsCategories.map((c) => [c.slug, c.name]));

  return (
    <>
      <PageHero
        label="Robotics"
        title="Robotics directory"
        description="Companies and platforms across manufacturing, agriculture, logistics, defense, healthcare and more."
        visual="robotics"
      />

      <section>
        <div className="container">
          <SearchBar defaultType="robotics" />

          <div style={{ height: 40 }} />

          <div className="directory-layout">
            <div>
              <CategoryFilter basePath="/robotics" categories={roboticsCategories} activeSlug={categorySlug} />

              {items.length === 0 ? (
                <p>No entries matched {activeCategory ? activeCategory.name : 'your search'}. Try another category.</p>
              ) : (
                <div className="listing">
                  {items.map((item) => (
                    <ListingRow
                      key={item.slug}
                      item={item}
                      basePath="/robotics"
                      categoryName={categoryMap[item.category]}
                    />
                  ))}
                </div>
              )}
            </div>

            <DirectorySidebar categories={roboticsCategories} basePath="/robotics" />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
