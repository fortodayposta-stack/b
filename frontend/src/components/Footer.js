import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-[#0c4a6e] to-[#075985] text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t.siteName}</h3>
            <p className="text-blue-100">{t.footer.description}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.about}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.categories}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-blue-100 hover:text-white transition-colors">
                  {t.allProducts}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.terms}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-blue-100 hover:text-white transition-colors">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-blue-100 hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-400 mt-8 pt-8 text-center">
          <p className="text-blue-100">&copy; 2025 {t.siteName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;