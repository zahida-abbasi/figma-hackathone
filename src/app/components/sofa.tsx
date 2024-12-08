import React from 'react'

const Sofa = () => {
  return (
    <div className='mt-24'>
        <div className="w-full max-md:max-w-full text-center mb-4 font-bold text-3xl text-blue-900"><h1>Latest Products</h1></div>
    <nav >
    <div
      className="flex flex-wrap gap-10 text-lg ml-60 mb-4 rounded-none max-w-[527px] text-violet-950"
      role="navigation"
      aria-label="Category navigation"
    >
      <a
        href="#new-arrival"
        className="text-pink-500 hover:underline focus:outline-none focus:ring-2 focus:ring-pink-500"
        tabIndex={0}
      >
        New Arrival
      </a>
      <a
        href="#best-seller"
        className="hover:underline focus:outline-none focus:ring-2 focus:ring-violet-950"
        tabIndex={0}
      >
        Best Seller
      </a>
      <a
        href="#featured"
        className="hover:underline focus:outline-none focus:ring-2 focus:ring-violet-950"
        tabIndex={0}
      >
        Featured
      </a>
      <a
        href="#special-offer"
        className="basis-auto hover:underline focus:outline-none focus:ring-2 focus:ring-violet-950"
        tabIndex={0}
      >
        Special Offer
      </a>
    </div>
  </nav>


  <div className="flex flex-col">
  <div className="w-full max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-1 w-full max-md:mt-10">
          <div
            className="flex overflow-hidden flex-col px-20 pt-8 pb-2 bg-neutral-100 max-md:px-5"
            role="img"
            aria-label="Featured product display area"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/16733f1c4ab99c3e4fbcdce4dfa1feb0a752a9a2e5fb7652ec06e368e032faa6?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
              className="object-contain w-full aspect-[0.97]"
              alt="Comfort Handy Craft product image"
            />
          </div>
          <div className="flex gap-5 justify-between mt-4 w-full">
            <div className="flex flex-col text-base text-violet-950">
              <div className="max-md:mr-0.5">Comfort Handy Craft</div>
              <div className="shrink-0 border-2 border-indigo-50 border-solid h-[3px]" />
            </div>
            <div
              className="flex gap-2.5 self-start whitespace-nowrap"
              role="group"
              aria-label="Product pricing"
            >
              <div className="text-sm text-violet-950">$42.00</div>
              <div className="text-xs text-rose-600">$65.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col w-full max-md:mt-9">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9e1f4ea2abe171ed3623cf9edb2575cbd4fbc02b76ce02d76c53e2bc6e87a6b?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
            className="object-contain w-full aspect-[1.34]"
            alt="Comfort Handy Craft product showcase"
          />
          <div className="flex gap-5 justify-between mt-4 w-full">
            <div className="flex flex-col text-base text-violet-950">
              <div className="max-md:mr-0.5">Comfort Handy Craft</div>
              <div className="shrink-0 border-2 border-indigo-50 border-solid h-[3px]" />
            </div>
            <div
              className="flex gap-2.5 self-start whitespace-nowrap"
              role="group"
              aria-label="Product pricing"
            >
              <div className="text-sm text-violet-950">$42.00</div>
              <div className="text-xs text-rose-600">$65.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col mt-1 w-full max-md:mt-10">
          <div
            className="flex overflow-hidden flex-col px-16 pt-10 pb-2.5 bg-neutral-100 max-md:px-5"
            role="img"
            aria-label="Featured product display area"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dfe8d0700f9bc8dcf35016a530e6a5c3f86e93e729614eb95896fcd5aa7af53?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
              className="object-contain w-full aspect-square"
              alt="Comfort Handy Craft featured item"
            />
          </div>
          <div className="flex gap-5 justify-between mt-4 w-full">
            <div className="flex flex-col text-base text-violet-950">
              <div className="max-md:mr-0.5">Comfort Handy Craft</div>
              <div className="shrink-0 border-2 border-indigo-50 border-solid h-[3px]" />
            </div>
            <div
              className="flex gap-2.5 self-start whitespace-nowrap"
              role="group"
              aria-label="Product pricing"
            >
              <div className="text-sm text-violet-950">$42.00</div>
              <div className="text-xs text-rose-600">$65.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-28 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col w-full max-md:mt-9 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div
                  className="flex overflow-hidden flex-col grow px-14 w-full bg-neutral-100 max-md:px-5 max-md:mt-9"
                  role="img"
                  aria-label="Featured product display area"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/206f8a7f10db60a44ee39123efea2ca1e5fa2f393dca8ececa9fa4e91a9e471f?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                    className="object-contain z-10 w-full aspect-[0.96]"
                    alt="Comfort Handy Craft collection item"
                  />
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div
                  className="flex overflow-hidden flex-col grow px-9 pt-3.5 w-full bg-neutral-100 max-md:px-5 max-md:mt-9"
                  role="img"
                  aria-label="Featured product display area"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/32f9419bd84ac583f1b8ff03ab2cd935b3c66e6573df69e9574940eb7ba3ee81?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                    className="object-contain z-10 w-full aspect-[1.15]"
                    alt="Comfort Handy Craft special item"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-4 w-full max-md:mr-2.5 max-md:max-w-full">
            <div className="flex flex-col text-base text-violet-950">
              <div className="max-md:mr-0.5">Comfort Handy Craft</div>
              <div className="shrink-0 border-2 border-indigo-50 border-solid h-[3px]" />
            </div>
            <div
              className="flex gap-2.5 self-start whitespace-nowrap"
              role="group"
              aria-label="Product pricing"
            >
              <div className="text-sm text-violet-950">$42.00</div>
              <div className="text-xs text-rose-600">$65.00</div>
            </div>
            <div className="flex flex-col text-base text-violet-950">
              <div className="max-md:mr-0.5">Comfort Handy Craft</div>
              <div className="shrink-0 border-2 border-indigo-50 border-solid h-[3px]" />
            </div>
            <div
              className="flex gap-2.5 self-start whitespace-nowrap"
              role="group"
              aria-label="Product pricing"
            >
              <div className="text-sm text-violet-950">$42.00</div>
              <div className="text-xs text-rose-600">$65.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-9">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a005079b667711602f79c531c26fe9eaa88a3fef3dd6c3f9c18d0b38515793d4?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
            className="object-contain w-full aspect-[1.19]"
            alt="Comfort Handy Craft premium collection"
          />
        </div>
      </div>
    </div>
  </div>
</div>



  </div>
  )
}

export default Sofa