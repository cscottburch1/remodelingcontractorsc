import Link from 'next/link';
import { SERVICE_AREAS } from '@/data/serviceAreas';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Main footer content */}
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Company info */}
          <div>
            <h3 className="font-bold text-slate-900 mb-3">Remodeling Contractors SC</h3>
            <p className="text-sm text-slate-600 mb-3">
              Licensed remodeling contractor serving Upstate South Carolina with 35+ years of local experience.
            </p>
            <p className="text-sm text-slate-600">
              <strong>Phone:</strong> (864) 724-4600
            </p>
            <p className="text-sm text-slate-600">
              <strong>Email:</strong> estimates@remodelingcontractorsc.com
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/garages" className="text-slate-600 hover:text-slate-900">Garages</Link></li>
              <li><Link href="/room-additions" className="text-slate-600 hover:text-slate-900">Room Additions</Link></li>
              <li><Link href="/kitchen-remodeling" className="text-slate-600 hover:text-slate-900">Kitchen Remodeling</Link></li>
              <li><Link href="/bathroom-remodeling" className="text-slate-600 hover:text-slate-900">Bathroom Remodeling</Link></li>
              <li><Link href="/decks" className="text-slate-600 hover:text-slate-900">Decks</Link></li>
            </ul>
          </div>

          {/* More services */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">More Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/screened-porches" className="text-slate-600 hover:text-slate-900">Screened Porches</Link></li>
              <li><Link href="/basement-finishing" className="text-slate-600 hover:text-slate-900">Basement Finishing</Link></li>
              <li><Link href="/adu" className="text-slate-600 hover:text-slate-900">ADUs</Link></li>
              <li><Link href="/projects" className="text-slate-600 hover:text-slate-900">Projects</Link></li>
              <li><Link href="/pricing-guide" className="text-slate-600 hover:text-slate-900">Pricing Guide</Link></li>
            </ul>
          </div>

          {/* Areas served */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Areas Served</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link href={`/locations/${area.slug}`} className="text-slate-600 hover:text-slate-900">
                    {area.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row md:items-center md:justify-between text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Remodeling Contractors SC. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/about" className="text-slate-600 hover:text-slate-900">About</Link>
            <Link href="/contact" className="text-slate-600 hover:text-slate-900">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
