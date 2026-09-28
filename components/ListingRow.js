import Link from 'next/link';
import MonogramThumb from './MonogramThumb';

export default function ListingRow({ item, basePath, categoryName }) {
  return (
    <Link href={`${basePath}/${item.slug}`} className="listing-row">
      <span className="listing-row__thumb">
        <MonogramThumb name={item.name} size={96} />
      </span>
      <span className="listing-row__body">
        {categoryName && <span className="listing-row__tag">{categoryName}</span>}
        <h3>{item.name}</h3>
        <p>{item.summary}</p>
      </span>
      <span className="listing-row__meta">{item.website || 'View entry'}</span>
    </Link>
  );
}
