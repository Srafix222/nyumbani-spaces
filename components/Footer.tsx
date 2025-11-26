
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';

const Footer: React.FC = () => {
  return (
      <footer className="bg-brand-dark text-white bg-footer-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Logo />
              <p className="text-gray-400">Your key to Kenyan homes and decor. Find your perfect space with us.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
                <li><Link to="/agents" className="text-gray-400 hover:text-white">Find an Agent</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Waiyaki Way, Nairobi</li>
                <li>+254 700 000 000</li>
                <li>hello@nyumbani.co.ke</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Personalized Matching</h3>
              <p className="text-gray-400 mb-4">Tell us what you're looking for, and we'll connect you with the perfect properties.</p>
              <Button
                  as="a"
                  href="https://forms.gle/VWDMBv9yhrMnsdHYA"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="w-full"
              >
                  Get Matched
              </Button>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Nyumbani Spaces. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
