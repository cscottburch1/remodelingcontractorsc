import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import StickyEstimateBar from '../components/StickyEstimateBar';

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <StickyEstimateBar />
      <Footer />
    </div>
  );
}