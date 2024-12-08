import React from 'react'

const Unique = () => {
  return (
    <div><div>
    <div className="flex gap-5 max-md:flex-col bg-violet-50 px-4 py-4">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d19cbb86b310c3077e03da3aec233d1d547ff493735e1ca6e9d96627024715ed?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
          alt="Product showcase featuring unique and trending items"
          className="object-contain grow w-full aspect-[1.01] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
          <h2 className="self-stretch text-3xl font-bold tracking-wide leading-8 text-violet-950 max-md:max-w-full">
            Unique Features Of leatest &amp;
            <br />
            Trending Poducts
          </h2>
          <div
            className="flex gap-3 mt-7 text-base font-medium tracking-wide leading-none text-gray-400"
            role="list"
          >
            <div
              className="flex shrink-0 my-auto bg-rose-500 rounded-full h-[11px] w-[11px]"
              role="presentation"
              aria-hidden="true"
            />
            <div className="flex-auto max-md:max-w-full" role="listitem">
              All frames constructed with hardwood solids and laminates
            </div>
          </div>
          <div
            className="flex flex-wrap gap-3 mt-3.5 text-base font-medium tracking-wide leading-7 text-gray-400"
            role="list"
          >
            <div
              className="flex shrink-0 self-start mt-2.5 bg-blue-700 rounded-full h-[11px] w-[11px]"
              role="presentation"
              aria-hidden="true"
            />
            <div className="flex-auto max-md:max-w-full" role="listitem">
              Reinforced with double wood dowels, glue, screw - nails corner
              <br />
              blocks and machine nails
            </div>
          </div>
          <div
            className="flex gap-3 mt-3.5 text-base font-medium tracking-wide leading-none text-gray-400"
            role="list"
          >
            <div
              className="flex shrink-0 my-auto bg-teal-400 rounded-full h-[11px] w-[11px]"
              role="presentation"
              aria-hidden="true"
            />
            <div className="flex-auto" role="listitem">
              Arms, backs and seats are structurally reinforced
            </div>
          </div>
          <div className="flex gap-5 mt-10 max-w-full w-[289px]">
            <button
              className="px-6 py-3.5 text-lg font-semibold tracking-wide text-white bg-pink-500 rounded-sm max-md:px-5"
              aria-label="Add B&B Italian Sofa to cart"
            >
              Add To Cart
            </button>
            <div className="flex flex-col my-auto text-sm text-violet-950">
              <div className="font-semibold tracking-wide">
                B&amp;B Italian Sofa
              </div>
              <div className="self-start">$32.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Unique