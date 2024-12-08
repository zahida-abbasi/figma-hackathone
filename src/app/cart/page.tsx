import React from 'react'

const page = () => {
  return (
    <div className='ml-36 '>
    <nav aria-label="Breadcrumb navigation mb-56">
    <div className="flex flex-col rounded-none max-w-[250px] mb-56 mt-10">
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


  <div className='flex gap-24'>
    <div><div
  className="flex flex-col w-full max-md:mt-10 max-md:max-w-full"
  role="main"
  aria-label="Shopping Cart"
>
  <div className="w-full max-md:mr-2.5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
        <div className="flex grow gap-3 max-md:mt-10">
          <div className="flex flex-col text-xl font-bold text-blue-900 whitespace-nowrap">
            <div className="self-start" role="heading" aria-level={2}>
              Product
            </div>
            <div
              className="flex shrink-0 mt-11 rounded bg-stone-300 h-[93px] w-[86px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-start self-end mt-20 text-slate-400 max-md:mt-10">
            <div className="self-stretch text-sm text-black">
              Ut diam consequat
            </div>
            <div className="flex mt-1.5 whitespace-nowrap">
              <div className="grow text-xs">Color:Brown</div>
            </div>
            <div className="flex mt-2 whitespace-nowrap">
              <div className="grow text-xs">Size:XL</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
        <div className="max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow whitespace-nowrap max-md:mt-10">
                <div className="text-xl font-bold text-blue-900">Price</div>
                <div className="self-start mt-20 text-sm text-blue-950 max-md:mt-10">
                  $32.00
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-xl font-bold text-blue-900 whitespace-nowrap max-md:mt-10">
                <div>Quantity</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/6b4c987d94b57ec50f6950a51d42634947c9b80b9b304225cdbd021a172ffdf0?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt="Quantity selector"
                  className="object-contain self-center mt-20 aspect-[3.4] w-[51px] max-md:mt-10"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col whitespace-nowrap max-md:mt-10">
                <div className="text-xl font-bold text-blue-900">Total</div>
                <div className="mt-20 text-sm text-blue-950 max-md:mt-10 max-md:mr-0.5">
                  £219.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="shrink-0 mt-3.5 max-w-full h-px border border-solid border-zinc-200 w-[718px]"
    role="separator"
  />
  <div className="flex flex-wrap gap-10 mt-2 w-full max-md:mr-2.5 max-md:max-w-full">
    <div className="flex gap-3 text-slate-400">
      <div
        className="flex shrink-0 rounded bg-stone-300 h-[93px] w-[86px]"
        role="img"
        aria-label="Product image"
      />
      <div className="flex flex-col items-start my-auto">
        <div className="self-stretch text-sm text-black">
          Vel faucibus posuere
        </div>
        <div className="flex mt-1.5 whitespace-nowrap">
          <div className="grow text-xs">Color:</div>
          <div className="text-sm">Brown</div>
        </div>
        <div className="flex mt-2 whitespace-nowrap">
          <div className="grow text-xs">Size:</div>
          <div className="text-sm">XL</div>
        </div>
      </div>
    </div>
    <div className="flex flex-auto gap-10 items-start my-auto text-sm whitespace-nowrap text-blue-950">
      <div className="mt-3.5">$32.00</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/6b4c987d94b57ec50f6950a51d42634947c9b80b9b304225cdbd021a172ffdf0?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt="Quantity selector"
        className="object-contain shrink-0 self-stretch my-auto aspect-[3.4] w-[51px]"
      />
      <div>£219.00</div>
    </div>
  </div>
  <div
    className="shrink-0 mt-3.5 max-w-full h-px border border-solid border-zinc-200 w-[718px]"
    role="separator"
  />
  <div className="flex flex-wrap gap-10 mt-2 w-full max-md:mr-2.5 max-md:max-w-full">
    <div className="flex gap-3 text-slate-400">
      <div
        className="flex shrink-0 rounded bg-stone-300 h-[93px] w-[86px]"
        role="img"
        aria-label="Product image"
      />
      <div className="flex flex-col items-start my-auto">
        <div className="self-stretch text-sm text-black">
          Ac vitae vestibulum
        </div>
        <div className="flex mt-1.5 whitespace-nowrap">
          <div className="grow text-xs">Color:</div>
          <div className="text-sm">Brown</div>
        </div>
        <div className="flex mt-2 whitespace-nowrap">
          <div className="grow text-xs">Size:</div>
          <div className="text-sm">XL</div>
        </div>
      </div>
    </div>
    <div className="flex flex-auto gap-10 my-auto text-sm whitespace-nowrap text-blue-950">
      <div>$32.00</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/6b4c987d94b57ec50f6950a51d42634947c9b80b9b304225cdbd021a172ffdf0?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt="Quantity selector"
        className="object-contain shrink-0 self-start mt-1.5 aspect-[3.4] w-[51px]"
      />
      <div>£219.00</div>
    </div>
  </div>
  <div
    className="shrink-0 mt-3.5 max-w-full h-px border border-solid border-zinc-200 w-[718px]"
    role="separator"
  />
  <div className="flex flex-wrap gap-10 mt-2 w-full max-md:mr-2.5 max-md:max-w-full">
    <div className="flex gap-3 text-slate-400">
      <div
        className="flex shrink-0 rounded bg-stone-300 h-[93px] w-[86px]"
        role="img"
        aria-label="Product image"
      />
      <div className="flex flex-col items-start my-auto">
        <div className="self-stretch text-sm text-black">Elit massa diam</div>
        <div className="flex mt-1.5 whitespace-nowrap">
          <div className="grow text-xs">Color:</div>
          <div className="text-sm">Brown</div>
        </div>
        <div className="flex mt-2 whitespace-nowrap">
          <div className="grow text-xs">Size:</div>
          <div className="text-sm">XL</div>
        </div>
      </div>
    </div>
    <div className="flex flex-auto gap-10 my-auto text-sm whitespace-nowrap text-blue-950">
      <div>$32.00</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/6b4c987d94b57ec50f6950a51d42634947c9b80b9b304225cdbd021a172ffdf0?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt="Quantity selector"
        className="object-contain shrink-0 self-start mt-1.5 aspect-[3.4] w-[51px]"
      />
      <div>£219.00</div>
    </div>
  </div>
  <div
    className="shrink-0 mt-3.5 max-w-full h-px border border-solid border-zinc-200 w-[718px]"
    role="separator"
  />
  <div className="flex flex-wrap gap-9 mt-2.5 max-md:mr-2.5">
    <div className="flex flex-auto gap-3 text-slate-400">
      <div
        className="flex shrink-0 rounded bg-stone-300 h-[93px] w-[86px]"
        role="img"
        aria-label="Product image"
      />
      <div className="flex flex-col items-start my-auto">
        <div className="self-stretch text-sm text-black">
          Proin pharetra elementum
        </div>
        <div className="flex mt-1.5 whitespace-nowrap">
          <div className="grow text-xs">Color:</div>
          <div className="text-sm">Brown</div>
        </div>
        <div className="flex mt-2 whitespace-nowrap">
          <div className="grow text-xs">Size:</div>
          <div className="text-sm">XL</div>
        </div>
      </div>
    </div>
    <div className="flex flex-auto gap-10 my-auto text-sm whitespace-nowrap text-blue-950">
      <div>$32.00</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/6b4c987d94b57ec50f6950a51d42634947c9b80b9b304225cdbd021a172ffdf0?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt="Quantity selector"
        className="object-contain shrink-0 self-start mt-1.5 aspect-[3.4] w-[51px]"
      />
      <div>£219.00</div>
    </div>
  </div>
  <div
    className="shrink-0 mt-3.5 max-w-full h-px border border-solid border-zinc-200 w-[718px]"
    role="separator"
  />
  <div className="flex flex-wrap gap-5 justify-between mt-9 text-base font-semibold text-white max-md:max-w-full">
    <button
      className="px-5 py-3 bg-pink-500 rounded-sm max-md:pl-5 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
      aria-label="Update Cart"
    >
      Update Cart
    </button>
    <button
      className="px-7 py-3 bg-pink-500 rounded-sm max-md:px-5 focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
      aria-label="Clear Cart"
    >
      Clear Cart
    </button>
  </div>
</div>
</div>

    
    
    
    
    <div>
    <div className="flex flex-col grow max-md:mt-10">
  <h2 className="self-center text-xl font-bold text-blue-900">Cart Totals</h2>
  <div
    className="flex flex-col px-6 py-8 mt-11 w-full bg-violet-50 rounded max-md:px-5 max-md:mt-10"
    role="region"
    aria-label="Cart summary"
  >
    <div className="flex gap-5 justify-between whitespace-nowrap max-md:mr-2">
      <div className="text-lg font-semibold text-blue-900">Subtotals:</div>
      <div className="text-base text-blue-950" aria-label="Subtotal amount">
    £219.00
      </div>
    </div>
    <div
      className="shrink-0 mt-3 max-w-full h-0.5 border-2 border-solid border-slate-200 w-[310px]"
      role="separator"
    />
    <div className="flex gap-5 justify-between mt-9 whitespace-nowrap">
      <div className="text-lg font-medium text-blue-900">Totals:</div>
      <div className="text-base text-blue-950" aria-label="Total amount">
    £325.00
      </div>
    </div>
    <div
      className="shrink-0 mt-2.5 max-w-full h-0.5 border-2 border-solid border-slate-200 w-[310px]"
      role="separator"
    />
    <div className="flex gap-2 self-start mt-7 text-xs text-slate-400">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/2359195f185a49a01148bb35ab9dbe4d12a3fe20301086816817b32e54561cbb?apiKey=48515e2413874846bf60cd2409ef14d1&"
        className="object-contain shrink-0 self-start mt-1 w-2 rounded aspect-square"
        alt=""
      />
      <div>Shipping &amp; taxes calculated at checkout</div>
    </div>
    <button
      className="px-16 py-3 mt-5 text-sm font-bold text-white bg-green-500 rounded max-md:px-5 max-md:mr-1.5"
      type="button"
    >
      Proceed To Checkout
    </button>
  </div>
  <h2 className="self-center mt-8 text-xl font-bold text-blue-900">
    Calculate Shopping
  </h2>
  <form className="flex flex-col items-start px-8 pt-11 pb-5 mt-7 text-sm font-semibold bg-violet-50 rounded text-slate-300 max-md:px-5">
    <label htmlFor="country" className="sr-only">
      Select Country
    </label>
    <input
      type="text"
      id="country"
      defaultValue="Bangladesh"
      className="w-full bg-transparent border-none p-0 focus:ring-2 focus:ring-blue-500"
    />
    <div className="shrink-0 self-stretch mt-2 w-full h-px border border-solid border-slate-300" />
    <label htmlFor="address" className="sr-only">
      Enter Address
    </label>
    <input
      type="text"
      id="address"
      defaultValue="Mirpur Dhaka - 1200"
      className="w-full bg-transparent border-none p-0 mt-10 focus:ring-2 focus:ring-blue-500"
    />
    <div className="shrink-0 self-stretch mt-2 w-full h-px border border-solid border-slate-300" />
    <label htmlFor="postal" className="sr-only">
      Enter Postal Code
    </label>
    <input
      type="text"
      id="postal"
      placeholder="Postal Code"
      className="w-full bg-transparent border-none p-0 mt-10 focus:ring-2 focus:ring-blue-500"
    />
    <div className="shrink-0 self-stretch mt-2 w-full h-px border border-solid border-slate-300" />
    <button
      type="submit"
      className="px-6 py-3.5 mt-9 text-base text-white bg-pink-500 rounded-sm max-md:px-5"
    >
      Calculate Shiping
    </button>
  </form>
</div>

    </div>
  </div>
  </div>
  )
}

export default page