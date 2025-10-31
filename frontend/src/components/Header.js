import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Globe, User, LogOut, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from './ui/dropdown-menu';

const Header = () => {
  const { language, setLanguageCode, t } = useLanguage();
  const { user, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#0c4a6e] to-[#075985] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold text-white tracking-wider">
              {t.siteName}
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 bg-white"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 transition-all"
                >
                  <Globe className="h-5 w-5 mr-2" />
                  {language === 'en' ? 'EN' : language === 'rw' ? 'RW' : 'SW'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguageCode('en')} className="cursor-pointer">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguageCode('rw')} className="cursor-pointer">
                  Kinyarwanda
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguageCode('sw')} className="cursor-pointer">
                  Kiswahili
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu or Login/Register - Only show register when NOT logged in */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-white/10 gap-2">
                    <User className="h-5 w-5" />
                    <span className="hidden md:inline">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                    {user.account_type === 'seller' && (
                      <p className="text-xs text-blue-600 font-semibold mt-1">
                        {language === 'en' ? 'Seller Account' : language === 'rw' ? 'Konti y\'Umucuruzi' : 'Akaunti ya Muuzaji'}
                      </p>
                    )}
                  </div>
                  <DropdownMenuSeparator />
                  {user.account_type === 'seller' && (
                    <>
                      <DropdownMenuItem onClick={() => navigate('/seller/products')} className="cursor-pointer">
                        <Package className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'My Products' : language === 'rw' ? 'Ibicuruzwa Byanjye' : 'Bidhaa Zangu'}
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate('/seller/add-product')} className="cursor-pointer">
                        <Package className="h-4 w-4 mr-2" />
                        {language === 'en' ? 'Add Product' : language === 'rw' ? 'Ongeraho Igicuruzwa' : 'Ongeza Bidhaa'}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem onClick={() => navigate('/orders')} className="cursor-pointer">
                    <Package className="h-4 w-4 mr-2" />
                    {language === 'en' ? 'My Orders' : language === 'rw' ? 'Ibyo Natumije' : 'Maagizo Yangu'}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 cursor-pointer">
                    <LogOut className="h-4 w-4 mr-2" />
                    {language === 'en' ? 'Logout' : language === 'rw' ? 'Sohoka' : 'Ondoka'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex space-x-2">
                <Link to="/login">
                  <Button variant="ghost" className="text-white hover:bg-white/10">
                    {t.login}
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-white text-blue-900 hover:bg-gray-100">
                    {t.register}
                  </Button>
                </Link>
              </div>
            )}

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
                <ShoppingCart className="h-6 w-6" />
                {user && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => navigate('/login')}>
                  {t.login}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/register')}>
                  {t.register}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 bg-white"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;