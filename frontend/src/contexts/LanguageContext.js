import React, { createContext, useState, useContext } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

const oldTranslations = {
  en: {
    siteName: 'KIVU',
    search: 'Search products...',
    categories: 'Categories',
    allProducts: 'All Products',
    login: 'Login',
    register: 'Register',
    cart: 'Cart',
    about: 'About Us',
    accountType: 'Account Type',
    buyer: 'Buyer',
    seller: 'Seller',
    sellerDashboard: 'Seller Dashboard',
    addProduct: 'Add Product',
    myProducts: 'My Products',
    hero: {
      title: 'Welcome to KIVU Marketplace',
      subtitle: 'Discover amazing products with group buying power',
      shopNow: 'Shop Now',
    },
    product: {
      regularPrice: 'Regular Price',
      perItem: 'Per Item',
      poolPrice: 'Pool Price',
      poolProgress: 'Pool Progress',
      buyNow: 'Buy Now',
      joinPool: 'Join Pool',
      addToCart: 'Add to Cart',
      people: 'people',
      details: 'Details',
      description: 'Description',
    },
    auth: {
      welcomeBack: 'Welcome Back',
      createAccount: 'Create Account',
      email: 'Email',
      password: 'Password',
      name: 'Full Name',
      signIn: 'Sign In',
      signUp: 'Sign Up',
      noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?',
    },
    footer: {
      about: 'About KIVU',
      contact: 'Contact',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      description: 'Your trusted marketplace for quality products with group buying benefits.',
    },
  },
  rw: {
    siteName: 'KIVU',
    search: 'Shakisha ibicuruzwa...',
    categories: 'Ibyiciro',
    allProducts: 'Ibicuruzwa Byose',
    login: 'Injira',
    register: 'Iyandikishe',
    cart: 'Ikibanza',
    hero: {
      title: 'Murakaza neza kuri KIVU Marketplace',
      subtitle: 'Vumbura ibicuruzwa bidasanzwe hamwe nubushobozi bwo kugura itsinda',
      shopNow: 'Gura None',
    },
    product: {
      regularPrice: 'Igiciro Gisanzwe',
      perItem: 'Kuri Kimwe',
      poolPrice: 'Igiciro cy\'Itsinda',
      poolProgress: 'Iterambere ry\'Itsinda',
      buyNow: 'Gura None',
      joinPool: 'Jya mu Itsinda',
      addToCart: 'Shyira mu Kibanza',
      people: 'abantu',
      details: 'Ibisobanuro',
      description: 'Ibisobanuro',
    },
    auth: {
      welcomeBack: 'Murakaza Neza Ukundi',
      createAccount: 'Kora Konti',
      email: 'Imeri',
      password: 'Ijambo ry\'Ibanga',
      name: 'Amazina Yose',
      signIn: 'Injira',
      signUp: 'Iyandikishe',
      noAccount: 'Nta konti ufite?',
      hasAccount: 'Usanzwe ufite konti?',
    },
    footer: {
      about: 'Ibyerekeye KIVU',
      contact: 'Twandikire',
      terms: 'Amategeko y\'Isoko',
      privacy: 'Amategeko y\'Ibanga',
      description: 'Isoko ryawe ryizewe ry\'ibicuruzwa byiza hamwe n\'inyungu zo kugura mu itsinda.',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    const languages = ['en', 'rw', 'sw'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const setLanguageCode = (code) => {
    setLanguage(code);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguageCode, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};