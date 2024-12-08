import React from 'react'

const Newfur = () => {
  return (
    <div><div className="flex flex-col rounded-none" role="banner">
    <div className="px-20 pb-9 w-full bg-violet-50 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full">
            <div className="max-md:max-w-full ">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46d589378cb4906e8820bbc7f3896c5edcec1733fd89ddd39c9a0e7de2f61b4a?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                    alt="Modern furniture piece showcasing latest collection"
                    className="object-contain w-full aspect-square"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col mt-52 font-bold max-md:mt-10 max-md:max-w-full">
                    <div className="self-start text-base leading-7 text-pink-500">
                      Best Furniture For Your Castle....
                    </div>
                    <h1 className="mt-3 text-4xl tracking-wider text-black leading-[40px] max-md:max-w-full max-md:text-4xl max-md:leading-[68px]">
                      New Furniture Collection
                      <br />
                      Trends in 2020
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col self-center mt-2 ml-4 max-w-full w-[751px]">
              <div className="self-end text-base font-bold leading-7 text-slate-400 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                est adipiscing
                <br />
                in phasellus non in justo.
              </div>
              <div className="flex gap-5 justify-between mt-7 max-w-full text-lg font-semibold tracking-wide text-white w-[354px]">
                <div
                  className="flex shrink-0 self-end mt-6 bg-pink-500 rounded-full fill-pink-500 h-[15px] w-[15px]"
                  role="presentation"
                  aria-hidden="true"
                />
                <button
                  className="px-9 py-4 bg-pink-500 rounded-sm max-md:px-5 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                  type="button"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/06d09db99bd45f492f3d352a6d4bf01f8cc4ec4e758dafbe9365330cebcc9793?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
            alt="Featured furniture collection display"
            className="object-contain grow mt-10 w-full aspect-[1.02] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Newfur
