
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { useFavorites } from '../contexts/FavoritesContext';
import Button from './Button';

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const PlusIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
);


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { favoritesCount } = useFavorites();

  const linkClasses = "text-white/80 hover:text-white transition-colors duration-300";
  const activeLinkClasses = "text-white font-semibold";

  const mobileNavLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/properties', label: 'Properties' },
    { to: '/agents', label: 'Agents' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
    { to: '/favorites', label: `Favorites (${favoritesCount})` },
  ];
  
  const handleMobileLinkClick = () => {
      setIsOpen(false);
  };

  return (
    <nav className="bg-brand-green shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-10">
                <div className="flex items-baseline space-x-4 lg:space-x-6">
                  <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>Home</NavLink>
                  <NavLink to="/properties" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>Properties</NavLink>
                  <NavLink to="/agents" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>Agents</NavLink>
                  <NavLink to="/blog" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>Blog</NavLink>
                  <NavLink to="/about" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}>About</NavLink>
                </div>

                <div>
                    <NavLink to="/favorites" className={({ isActive }) => isActive ? activeLinkClasses : linkClasses} title="View your favorites">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                            <HeartIcon className="h-6 w-6" />
                            {favoritesCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-brand-green-light text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {favoritesCount}
                                </span>
                            )}
                            </div>
                            <span className="hidden lg:inline">Favorites</span>
                        </div>
                    </NavLink>
                </div>
            </div>
          </div>

          <div className="hidden lg:block">
             <Button 
                as="link" 
                to="/list-property" 
                variant="primary-light" 
                size="md"
                className="flex items-center gap-2 !px-2.5 lg:!px-6"
                title="List Your Property"
             >
                <PlusIcon className="h-5 w-5" />
                <span className="hidden lg:inline">List Your Property</span>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-brand-green-light inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-opacity-90 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
            {mobileNavLinks.map(link => (
              <NavLink 
                key={link.to}
                to={link.to} 
                onClick={handleMobileLinkClick} 
                className="text-white hover:bg-brand-green-light block px-3 py-2 rounded-md text-base font-medium" 
                end={link.end}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="p-2">
                 <Button as="link" to="/list-property" variant="primary-light" size="md" className="w-full" onClick={handleMobileLinkClick}>
                    List Your Property
                </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
