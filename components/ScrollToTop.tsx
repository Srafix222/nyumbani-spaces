
import React from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // Disable the browser's default scroll restoration behavior.
    // Our app will handle scrolling manually.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  React.useEffect(() => {
    // Scroll to the top of the page on every route change.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;