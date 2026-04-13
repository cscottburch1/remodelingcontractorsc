import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout';
import ScrollToTop from './components/ScrollToTop';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FinancingPage = lazy(() => import('./pages/FinancingPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const EditorialPolicyPage = lazy(() => import('./pages/EditorialPolicyPage'));
const MasterSEOPage = lazy(() => import('./pages/MasterSEOPage'));
const CoreServicePage = lazy(() => import('./pages/CoreServicePage'));
const ServiceAreasPage = lazy(() => import('./pages/ServiceAreasPage'));
const TownPage = lazy(() => import('./pages/TownPage'));
const LocalServicePage = lazy(() => import('./pages/LocalServicePage'));
const ProjectDetailPage = lazy(() => import('./pages/projects/ProjectDetailPage'));

// Admin Pages
const AdminLoginPage = lazy(() => import('./pages/admin/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'));
const AdminLeadDetailPage = lazy(() => import('./pages/admin/AdminLeadDetailPage'));
const AdminSettingsPage = lazy(() => import('./pages/admin/AdminSettingsPage'));

// Import data for dynamic routes
import { coreServices } from './data/coreServices';
import { serviceAreas } from './data/serviceAreas';
import { localServicePages } from './data/localServicePages';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
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
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/editorial-policy" element={<EditorialPolicyPage />} />

            {/* Master SEO Landing Page */}
            <Route path="/upstate-sc-contractor" element={<MasterSEOPage />} />

            {/* Service Areas Hub */}
            <Route path="/service-areas" element={<ServiceAreasPage />} />

            {/* Core Service Pages (6 services) */}
            <Route path="/garages" element={<CoreServicePage />} />
            <Route path="/additions" element={<CoreServicePage />} />
            <Route path="/screened-porches" element={<CoreServicePage />} />
            <Route path="/decks" element={<CoreServicePage />} />
            <Route path="/adus" element={<CoreServicePage />} />
            <Route path="/lake-cabin-screened-porches" element={<CoreServicePage />} />

            {/* Town Pages (10 towns) */}
            <Route path="/mauldin-sc" element={<TownPage />} />
            <Route path="/simpsonville-sc" element={<TownPage />} />
            <Route path="/fountain-inn-sc" element={<TownPage />} />
            <Route path="/gray-court-sc" element={<TownPage />} />
            <Route path="/laurens-sc" element={<TownPage />} />
            <Route path="/woodruff-sc" element={<TownPage />} />
            <Route path="/clinton-sc" element={<TownPage />} />
            <Route path="/ora-sc" element={<TownPage />} />
            <Route path="/joanna-sc" element={<TownPage />} />
            <Route path="/greenwood-sc" element={<TownPage />} />

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
      </Suspense>
    </>
  );
}