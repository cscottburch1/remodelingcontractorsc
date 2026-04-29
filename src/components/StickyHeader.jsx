'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  CORE_SERVICES,
  KITCHEN_BATH_SUBSERVICES,
  MAIN_NAV_SERVICES,
  ROUTABLE_SERVICES,
  SERVICES_BY_SLUG,
} from '@/data/coreServices';
import { SERVICE_AREAS } from '@/data/serviceAreas';

export default function StickyHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const kitchenBathParent = CORE_SERVICES.find((service) => service.slug === 'kitchen-bath-remodeling');

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-extrabold text-slate-900">
          Remodeling Contractors SC
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <div className="group relative">
            <button className="font-semibold text-slate-800">Services</button>
            <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
                {MAIN_NAV_SERVICES.map((slug) => (
                  slug === 'kitchen-bath-remodeling' ? (
                    <div key={slug} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-900">
                      {kitchenBathParent?.name}
                    </div>
                  ) : (
                    <Link key={slug} href={`/${slug}`} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
                      {SERVICES_BY_SLUG[slug].name}
                    </Link>
                  )
                ))}
                <div className="mt-2 border-t border-slate-200 pt-2">
                  <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Kitchen & Bath</p>
                  {KITCHEN_BATH_SUBSERVICES.map((service) => (
                    <Link key={service.slug} href={`/${service.slug}`} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="font-semibold text-slate-800">Areas Served</button>
            <div className="invisible absolute left-0 top-full w-64 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
                {SERVICE_AREAS.map((area) => (
                  <Link key={area.slug} href={`/locations/${area.slug}`} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    {area.city}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="font-semibold text-slate-800">Calculators</button>
            <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
                {ROUTABLE_SERVICES.map((service) => (
                  <Link key={service.slug} href={`/calculator/${service.slug}`} className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100">
                    {service.name} Calculator
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/projects" className="font-semibold text-slate-800">Projects</Link>
          <Link href="/pricing-guide" className="font-semibold text-slate-800">Pricing Guide</Link>
          <Link href="/about" className="font-semibold text-slate-800">About</Link>
          <Link href="/contact" className="rounded-lg bg-amber-600 px-4 py-2 font-semibold text-white">Contact</Link>
        </nav>

        <button className="rounded border border-slate-300 px-3 py-2 text-sm lg:hidden" onClick={() => setMobileOpen((v) => !v)}>
          Menu
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-2">
            <Link href="/projects" onClick={() => setMobileOpen(false)}>Projects</Link>
            <Link href="/pricing-guide" onClick={() => setMobileOpen(false)}>Pricing Guide</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
