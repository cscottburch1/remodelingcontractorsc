import { Navigate, Route, Routes } from 'react-router-dom';
import SiteLayout from './layout/SiteLayout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FinancingPage from './pages/FinancingPage';
import HomePage from './pages/HomePage';
import LocationsPage from './pages/LocationsPage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import LocationDetailPage from './pages/locations/LocationDetailPage';
import CityLandingPage from './pages/marketing/CityLandingPage';
import LocalServiceLandingPage from './pages/marketing/LocalServiceLandingPage';
import MarketingServicePage from './pages/marketing/MarketingServicePage';
import ProjectDetailPage from './pages/projects/ProjectDetailPage';
import ServiceDetailPage from './pages/services/ServiceDetailPage';
import ServiceSubpage from './pages/services/ServiceSubpage';
import { cityPages, localServicePages, priorityServicePages, supportingServicePages } from './data/marketingPages';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/financing" element={<FinancingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request-estimate" element={<ContactPage />} />

        {priorityServicePages.map((page) => (
          <Route key={page.path} path={page.path} element={<MarketingServicePage page={page} />} />
        ))}

        {supportingServicePages.map((page) => (
          <Route key={page.path} path={page.path} element={<MarketingServicePage page={page} />} />
        ))}

        {cityPages.map((page) => (
          <Route key={page.path} path={page.path} element={<CityLandingPage page={page} />} />
        ))}

        {localServicePages.map((page) => (
          <Route key={page.path} path={page.path} element={<LocalServiceLandingPage page={page} />} />
        ))}

        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/services/:serviceSlug/:subSlug" element={<ServiceSubpage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/locations/:slug" element={<LocationDetailPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}