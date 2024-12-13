import React from 'react'

const Page = () => {
  return (
    <div className=''>
         <div
    className="flex flex-col justify-center items-start px-20 py-28 mt-6 w-full text-center bg-violet-50 max-md:px-5 max-md:pb-24 max-md:max-w-full"
    role="region"
    aria-label="Shop Navigation"
  >
    <div className="flex flex-col mb-0 max-w-full w-[315px] max-md:mb-2.5">
      <h1 className="text-4xl font-bold text-indigo-950">My Account</h1>
      <nav aria-label="Breadcrumb">
        <ol className="flex gap-1.5 self-start mt-2.5 text-base font-medium">
          <li className="flex gap-1 text-black">
            <a
              href="/"
              className="grow hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 ml-16"
            >
              Home
            </a>
            <span aria-hidden="true">.</span>
          </li>
          <li className="flex gap-1 text-black">
            <a
              href="/pages"
              className="hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Pages
            </a>
            <span className="text-pink_light" aria-hidden="true">
              .
            </span>
          </li>
          <li className="text-pink_light" arial-current="page">
            My Account
          </li>
        </ol>
      </nav>
    </div>
  </div>

       {/* Login Box */}
       <div className="flex justify-center items-center mt-10 mb-8">
          <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
            <h2 className="text-xl font-bold text-center mb-4">Login</h2>
            <p className="text-sm text-center text-gray-500 mb-6">
              Please log in using account details below.
            </p>
  
            {/* Login Form */}
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#242565]"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#242565]"
                />
              </div>
              <p className="text-right text-sm text-[#242565] mb-4 cursor-pointer hover:underline">
                Forgot your password?
              </p>
              <button
                type="submit"
                className="w-full bg-[#E70FAA] text-white rounded-md py-2 font-bold hover:bg-[#d00e9b]"
              >
                Sign-In
              </button>
            </form>
  
            <p className="text-center text-sm text-gray-500 mt-4">
              Don’t have an Account?{' '}
              <span className="text-[#242565] cursor-pointer hover:underline">
                Create account
              </span>
            </p>
          </div>
        </div>  
    </div>
  );
}

export default Page;
