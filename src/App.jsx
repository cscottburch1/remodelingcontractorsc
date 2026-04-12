import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FinancingPage from './pages/FinancingPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import MasterSEOPage from './pages/MasterSEOPage';
import CoreServicePage from './pages/CoreServicePage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import TownPage from './pages/TownPage';
import LocalServicePage from './pages/LocalServicePage';
import ProjectDetailPage from './pages/projects/ProjectDetailPage';

// Admin Pages
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminLeadDetailPage from './pages/admin/AdminLeadDetailPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';

// Import data for dynamic routes
import { coreServices } from './data/coreServices';
import { serviceAreas } from './data/serviceAreas';
import { localServicePages } from './data/localServicePages';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      {/* Admin Routes (no site layout) */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      <Route path="/admin/leads/:id" element={<AdminLeadDetailPage />} />
      <Route path="/admin/settings" element={<AdminSettingsPage />} />
      <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />

      {/* Public Site Routes */}
      <Route element={<SiteLayout />}>
        {/* Core Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/financing" element={<FinancingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request-estimate" element={<ContactPage />} />

        {/* Master SEO Landing Page */}
        <Route path="/upstate-sc-contractor" element={<MasterSEOPage />} />

        {/* Service Areas Hub */}
        <Route path="/service-areas" element={<ServiceAreasPage />} />

        {/* Core Service Pages (5 services) */}
        <Route path="/garages" element={<CoreServicePage />} />
        <Route path="/additions" element={<CoreServicePage />} />
        <Route path="/screened-porches" element={<CoreServicePage />} />
        <Route path="/decks" element={<CoreServicePage />} />
        <Route path="/adus" element={<CoreServicePage />} />

        {/* Town Pages (9 towns) */}
        <Route path="/mauldin-sc" element={<TownPage />} />
        <Route path="/simpsonville-sc" element={<TownPage />} />
        <Route path="/fountain-inn-sc" element={<TownPage />} />
        <Route path="/gray-court-sc" element={<TownPage />} />
        <Route path="/laurens-sc" element={<TownPage />} />
        <Route path="/woodruff-sc" element={<TownPage />} />
        <Route path="/clinton-sc" element={<TownPage />} />
        <Route path="/ora-sc" element={<TownPage />} />
        <Route path="/joanna-sc" element={<TownPage />} />

        {/* Local Service Pages (45 pages: 5 services × 9 towns) */}
        {localServicePages.map((page) => (
          <Route 
            key={page.slug} 
            path={page.path} 
            element={<LocalServicePage />} 
          />
        ))}

        {/* Project Detail Page */}
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />

        {/* Legacy redirects - old Locations page redirects to Service Areas */}
        <Route path="/locations" element={<Navigate to="/service-areas" replace />} />
        <Route path="/locations/:slug" element={<Navigate to="/service-areas" replace />} />
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}