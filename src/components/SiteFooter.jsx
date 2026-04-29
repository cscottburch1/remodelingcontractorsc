import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
        <p>Remodeling Contractors SC · Greenville, Mauldin, Simpsonville and Fountain Inn · (864) 724-4600</p>
        <div className="flex gap-4">
          <Link href="/pricing-guide">Pricing Guide</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
