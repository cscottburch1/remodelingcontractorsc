import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SitewideSchema from '../components/SitewideSchema';
import StickyEstimateBar from '../components/StickyEstimateBar';

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <SitewideSchema />
      <Header />
      <main>
        <Outlet />
      </main>
      <StickyEstimateBar />
      <Footer />
    </div>
  );
}