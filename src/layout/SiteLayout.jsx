import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SitewideSchema from '../components/SitewideSchema';
import StickyEstimateBar from '../components/StickyEstimateBar';
import BackToTop from '../components/BackToTop';

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <SitewideSchema />
      <Header />
      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>
      <StickyEstimateBar />
      <Footer />
      <BackToTop />
    </div>
  );
}