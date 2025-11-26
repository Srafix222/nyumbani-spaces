
import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FavoritesProvider } from './contexts/FavoritesContext';
import { ComparisonProvider } from './contexts/ComparisonContext';
import ComparisonTray from './components/ComparisonTray';
import ScrollToTop from './components/ScrollToTop';
import Spinner from './components/Spinner';

// Lazy load pages for code-splitting and faster initial load
const LandingPage = lazy(() => import('./pages/LandingPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const PropertyDetailPage = lazy(() => import('./pages/PropertyDetailPage'));
const AgentsPage = lazy(() => import('./pages/AgentsPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const ComparisonPage = lazy(() => import('./pages/ComparisonPage'));
const ListPropertyPage = lazy(() => import('./pages/ListPropertyPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostDetailPage = lazy(() => import('./pages/BlogPostDetailPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));


const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDetailPage = /^\/properties\//.test(location.pathname) || /^\/blog\//.test(location.pathname);

  useEffect(() => {
    const navigationEntries = performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0 && (navigationEntries[0] as PerformanceNavigationTiming).type === 'reload') {
      if (location.pathname !== '/') {
        // Using replace: true will replace the current entry in the history stack
        // instead of adding a new one.
        navigate('/', { replace: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on initial component mount

  return (
    <FavoritesProvider>
      <ComparisonProvider>
        <ScrollToTop />
        <div className={`${!isDetailPage ? 'bg-brand-sand' : ''} min-h-screen flex flex-col font-sans text-brand-dark`}>
          <Navbar />
          <main className="flex-grow flex flex-col">
            <Suspense fallback={
                <div className="flex-grow flex justify-center items-center">
                    <Spinner />
                </div>
            }>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/properties" element={<GalleryPage />} />
                  <Route path="/properties/:propertyId" element={<PropertyDetailPage />} />
                  <Route path="/agents" element={<AgentsPage />} />
                  <Route path="/favorites" element={<FavoritesPage />} />
                  <Route path="/compare" element={<ComparisonPage />} />
                  <Route path="/list-property" element={<ListPropertyPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:postId" element={<BlogPostDetailPage />} />
                  <Route path="/about" element={<AboutUsPage />} />
                </Routes>
            </Suspense>
          </main>
          <ComparisonTray />
          <Footer />
        </div>
      </ComparisonProvider>
    </FavoritesProvider>
  );
};

export default App;