import React from 'react';

const Topcategory = () => {
  return (
    <div>
        <div><h1 className="w-full max-md:max-w-full text-center mb-4 font-bold text-3xl text-blue-900">Top Categories</h1></div>
      <div className="flex gap-5 max-md:flex-col">
        {/* Left Section */}
        <div className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center pt-1.5 pr-11 w-full">
            <div className="flex flex-col items-center self-start pb-1.5 bg-violet-400 rounded-full shadow-2xl aspect-square">
              <div className="flex z-10 flex-col items-center px-10 pt-12 pb-5 -mt-1.5 rounded-full shadow-2xl aspect-square bg-slate-50 max-md:px-5 max-md:mr-0">
                {/* Image */}
                <img
                  src="/chair-dis.png"
                  alt="Chair"
                  className="object-contain w-[100px] h-[100px]"
                />
              </div>
            </div>
            {/* Title */}
            <div className="flex gap-1.5 mt-5 max-w-full text-xl whitespace-nowrap text-violet-950 w-[150px]">
              <div className="grow">Mini</div>
              <div>LCW</div>
              <div>Chair</div>
            </div>
            {/* Price */}
            <div className="mt-3.5 text-base text-violet-950">$56.00</div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {/* Card 1 */}
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center items-center px-12 w-full rounded-full shadow-2xl aspect-square bg-slate-50 max-md:px-5 max-md:mt-10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/03310d2c8bd69d22fe1f01bb26d9bc1d401d4f80f33c6a17baa2e1ff5e1069a6?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                      className="object-contain w-[120px] h-[120px]"
                      alt="Ergonomic Chair"
                    />
                  </div>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center items-center px-14 w-full rounded-full shadow-2xl aspect-square bg-slate-50 max-md:px-5 max-md:mt-10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/72405396537887268cc22b0c2f6e6fbf2cd76e450ca4ce02f961494bfcd8044a?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                      className="object-contain w-[120px] h-[120px]"
                      alt="Classic Chair"
                    />
                  </div>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center items-center px-10 w-full rounded-full shadow-2xl aspect-square bg-slate-50 max-md:px-5 max-md:mt-10">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5aba3c692729265362b11ec493b2db75581cc24eb0d4845ff4f45ebf2007b81?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                      className="object-contain w-[120px] h-[120px]"
                      alt="Modern Chair"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 self-center mt-7 max-w-full whitespace-nowrap text-violet-950 w-[766px]">
              <div className="flex flex-col flex-1">
                <div className="flex gap-1.5 text-xl">
                  <div className="grow text center">Mini LCW Chair</div>
                </div>
                <div className="self-center mt-3.5 text-base">$56.00</div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex gap-1.5 text-xl">
                <div className="grow text center">Mini LCW Chair</div>
                </div>
                <div className="self-center mt-3.5 text-base">$56.00</div>
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex gap-1.5 text-xl">
                <div className="grow text center">Mini LCW Chair</div>
                </div>
                <div className="self-center mt-3.5 text-base">$56.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topcategory;
