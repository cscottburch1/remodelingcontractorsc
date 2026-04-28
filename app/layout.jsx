import './globals.css';
import StickyHeader from '@/components/StickyHeader';
import SiteFooter from '@/components/SiteFooter';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';

export const metadata = {
  metadataBase: new URL('https://remodelingcontractorsc.com'),
  title: {
    default: 'Remodeling Contractors SC',
    template: '%s | Remodeling Contractors SC',
  },
  description: 'Home remodeling in Upstate South Carolina with clear pricing and proven craftsmanship.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocalBusinessSchema />
        <StickyHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
