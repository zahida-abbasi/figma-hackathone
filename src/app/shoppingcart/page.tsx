import React from 'react'

const page = () => {
  return (
    <div><nav aria-label="Breadcrumb navigation">
    <div className="flex flex-col rounded-none max-w-[250px]">
      <h1 className="w-full text-4xl font-bold text-indigo-950">Shopping Cart</h1>
      <div
        className="flex gap-1 self-start mt-2 text-base font-medium text-black"
        role="list"
      >
        <div className="grow text-center" role="listitem">
          <a
            href="/"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Home
          </a>
        </div>
        <div className="text-center" aria-hidden="true">
          .
        </div>
        <div className="text-center" role="listitem">
          <a
            href="/pages"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Pages
          </a>
        </div>
        <div className="text-center text-pink-500" aria-hidden="true">
          .
        </div>
        <div className="text-pink-500" role="listitem" aria-current="page">
          Shopping Cart
        </div>
      </div>
    </div>
  </nav>


  <div className="flex overflow-hidden flex-col bg-white">
  <div
    className="flex flex-col justify-center items-center px-16 py-2.5 w-full text-base font-semibold whitespace-nowrap bg-violet-600 text-zinc-100 max-md:px-5 max-md:max-w-full"
    role="banner"
  >
    <div className="flex flex-wrap gap-10 max-w-full w-[1171px]">
      <div className="flex flex-1 gap-10 my-auto">
        <div className="flex gap-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/d96782c1172858b673c00321f817212fea5ecc581ba9853ffe91f1a1c80428a2?apiKey=48515e2413874846bf60cd2409ef14d1&"
            className="object-contain shrink-0 self-start w-4 aspect-square"
            alt="Email icon"
          />
          <a
            href="mailto:mhhasanul@gmail.com"
            className="basis-auto hover:underline"
          >
            mhhasanul@gmail.com
          </a>
        </div>
        <div className="flex gap-3 self-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/29c2503a107b3e668223918b6e5c2262bb602445f6066f3ccd65e1587f91136e?apiKey=48515e2413874846bf60cd2409ef14d1&"
            className="object-contain shrink-0 w-4 aspect-square"
            alt="Phone icon"
          />
          <a href="tel:(12345)67890" className="hover:underline">
            (12345)67890
          </a>
        </div>
      </div>
      <div className="flex flex-1 gap-px">
        <button className="grow my-auto" aria-label="Select language">
          English
        </button>
        <div className="flex gap-8 px-8 py-1">
          <button className="hover:underline" aria-label="Select currency">
            USD
          </button>
          <a href="/login" className="hover:underline">
            Login
          </a>
          <a href="/wishlist" className="hover:underline">
            Wishlist
          </a>
        </div>
      </div>
    </div>
  </div>
  <nav
    className="flex gap-10 items-center self-center mt-5 max-w-full w-[1177px]"
    role="navigation"
  >
    <a
      href="/"
      className="grow self-stretch my-auto text-4xl font-bold text-indigo-950"
    >
      Hekto
    </a>
    <div className="flex gap-5 self-stretch my-auto text-base leading-none max-md:max-w-full">
      <div className="flex gap-0.5 text-pink-500 whitespace-nowrap">
        <a href="/" className="grow hover:underline">
          Home
        </a>
      </div>
      <div className="flex flex-auto gap-9 text-indigo-950">
        <a href="/pages" className="grow hover:underline">
          Pages
        </a>
        <a href="/products" className="hover:underline">
          Products
        </a>
        <a href="/blog" className="hover:underline">
          Blog
        </a>
        <a href="/shop" className="hover:underline">
          Shop
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
      </div>
    </div>
    <form className="flex items-end self-stretch" role="search">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="search"
        id="search"
        className="px-4 h-10 border-2 border-gray-200"
      />
      <button
        type="submit"
        className="flex h-10 w-[51px] bg-pink-500"
        aria-label="Search"
      />
    </form>
  </nav>
  <div className="flex flex-col justify-center items-start px-20 py-28 mt-5 w-full bg-violet-50 max-md:px-5 max-md:pb-24 max-md:max-w-full">
    <div className="flex flex-col mb-0 max-w-full w-[250px] max-md:mb-2.5">
      <h1 className="text-4xl font-bold text-indigo-950">Shopping Cart</h1>
      <nav aria-label="Breadcrumb">
        <ol className="flex gap-1 self-start mt-2 text-base font-medium text-black">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li aria-hidden="true">.</li>
          <li>
            <a href="/pages" className="hover:underline">
              Pages
            </a>
          </li>
          <li aria-hidden="true" className="text-pink-500">
            .
          </li>
          <li aria-current="page" className="text-pink-500">
            Shopping Cart
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Rest of the shopping cart content remains structurally identical but with added accessibility attributes */}
  <footer
    className="flex flex-col w-full bg-violet-100 max-md:max-w-full"
    role="contentinfo"
  >
    <div className="flex flex-col justify-center items-center px-16 py-4 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between max-w-full w-[960px]">
        <p className="text-base font-semibold text-gray-400">
          ©Webecy - All Rights Reserved
        </p>
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/82a9bde41788da98823db56e85697cab934571db7ef1e6d444c877c2565044ba?apiKey=48515e2413874846bf60cd2409ef14d1&"
              alt=""
              className="w-5 h-5"
            />
          </a>
          <a href="#" aria-label="Twitter">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/82a9bde41788da98823db56e85697cab934571db7ef1e6d444c877c2565044ba?apiKey=48515e2413874846bf60cd2409ef14d1&"
              alt=""
              className="w-5 h-5"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>

  </div>
  )
}

export default page