import Link from 'next/link';

export default function CategoryFilter({ basePath, categories, activeSlug }) {
  return (
    <div className="filter-row">
      <Link href={basePath} className={`filter-chip ${!activeSlug ? 'active' : ''}`}>
        All categories
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`${basePath}?category=${cat.slug}`}
          className={`filter-chip ${activeSlug === cat.slug ? 'active' : ''}`}
        >
          {cat.name}
        </Link>
      ))}
    </div>
  );
}
