'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
  const pathname = usePathname();

  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null;
  }

  // Build breadcrumb path from URL
  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment));

  // Define human-readable labels for each path segment
  const segmentLabels = {
    'calculator': 'Calculators',
    'locations': 'Service Areas',
    'projects': 'Projects',
    'pricing-guide': 'Pricing Guide',
    'about': 'About',
    'contact': 'Contact',
    // Service slugs
    'garages': 'Garages',
    'room-additions': 'Room Additions',
    'decks': 'Decks',
    'screened-porches': 'Screened Porches',
    'basement-finishing': 'Basement Finishing',
    'adu': 'Accessory Dwelling Units',
    'kitchen-remodeling': 'Kitchen Remodeling',
    'bathroom-remodeling': 'Bathroom Remodeling',
    'kitchen-bath-remodeling': 'Kitchen & Bath Remodeling',
  };

  // Build breadcrumb items
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    ...segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/');
      const label = segmentLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
      return { label, href };
    }),
  ];

  // Remove last item (current page) for display
  const displayBreadcrumbs = breadcrumbs.slice(0, -1);
  const currentPageLabel = breadcrumbs[breadcrumbs.length - 1]?.label;

  // Build structured data for schema.org/BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `https://remodelingcontractorsc.com${crumb.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav
        className="mx-auto max-w-6xl px-4 py-3 text-sm text-slate-600"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center gap-2">
          {displayBreadcrumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-2">
              <Link
                href={crumb.href}
                className="text-slate-600 transition hover:text-slate-900"
              >
                {crumb.label}
              </Link>
              <span className="text-slate-400">/</span>
            </li>
          ))}
          <li aria-current="page" className="font-medium text-slate-900">
            {currentPageLabel}
          </li>
        </ol>
      </nav>
    </>
  );
}
