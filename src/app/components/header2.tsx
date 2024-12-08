"use client";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Header1 = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-purple-600 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <span className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 ml-48" /> mhhasanul@gmail.com
          </span>
          <span className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" /> (12345)67890
          </span>
        </div>
        <div className="flex space-x-6 items-center">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="flex items-center"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              English <ChevronDownIcon className="h-4 w-4 ml-1" />
            </button>
            {isLanguageDropdownOpen && (
              <div className="absolute bg-white text-gray-800 mt-2 py-2 w-28 shadow-md rounded">
                <button className="block px-4 py-1 hover:bg-gray-200 w-full text-left">English</button>
                <button className="block px-4 py-1 hover:bg-gray-200 w-full text-left">Spanish</button>
              </div>
            )}
          </div>

          {/* Currency Dropdown */}
          <div className="relative">
            <button
              className="flex items-center"
              onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
            >
              USD <ChevronDownIcon className="h-4 w-4 ml-1" />
            </button>
            {isCurrencyDropdownOpen && (
              <div className="absolute bg-white text-gray-800 mt-2 py-2 w-28 shadow-md rounded">
                <button className="block px-4 py-1 hover:bg-gray-200 w-full text-left">USD</button>
                <button className="block px-4 py-1 hover:bg-gray-200 w-full text-left">EUR</button>
              </div>
            )}
          </div>

          <Link href="/login" className="flex items-center">
            <FontAwesomeIcon icon={faUser} className="mr-2" /> Login
          </Link>
          <Link href="/wishlist" className="flex items-center">
            <FontAwesomeIcon icon={faHeart} className="mr-2" /> Wishlist
          </Link>
          <Link  href="/cart" className="flex items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Cart
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white py-4 px-4 flex justify-between items-center shadow-sm">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800 ml-52">Hekto</div>

        {/* Navigation Links */}
         <ul className="flex space-x-8 text-gray-800 text-sm">
          <li className="hover:text-pink-500 cursor-pointer relative">
          <Link href="/">  Home </Link><ChevronDownIcon className="h-4 w-4 inline ml-1" />
            {/* Dropdown */}
            <ul className="absolute left-0 mt-2 bg-white shadow-md rounded hidden group-hover:block">
              <li className="px-4 py-2 hover:bg-gray-200">Submenu 1</li>
              <li className="px-4 py-2 hover:bg-gray-200">Submenu 2</li>
            </ul>
          </li>
         <Link href="/pages"> <li className="hover:text-pink-500 cursor-pointer">Pages</li></Link>
         <Link href="/products"><li className="hover:text-pink-500 cursor-pointer">Products</li></Link>
         <Link href="/blog"><li className="hover:text-pink-500 cursor-pointer">Blog</li></Link>
         <Link href="/shop"> <li className="hover:text-pink-500 cursor-pointer">Shop</li></Link>
         <Link href="/contact"> <li className="hover:text-pink-500 cursor-pointer">Contact</li></Link>
        </ul>

        {/* Search Bar */}
        <div className="flex border rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="py-2 px-3 text-sm outline-none border-none"
          />
          <button className="bg-pink-500 text-white px-4 py-2">Q</button>
        </div>
      </nav>
    </header>
  );
};

export default Header1;
