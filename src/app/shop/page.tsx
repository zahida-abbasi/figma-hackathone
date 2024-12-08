import React from 'react'
import Accesories from '../components/accesories'

const page = () => {
  return (
    <div className='ml-40'><div className="flex flex-col text-center rounded-none max-w-[175px]">
    <div className="self-start text-4xl font-bold text-indigo-950">Shop List</div>
    <div className="flex gap-1.5 mt-2.5 text-base font-medium text-black">
      <div className="grow">Home</div>
      <div className="self-start">.</div>
      <div>Pages</div>
      <div className="self-start text-pink-500">.</div>
      <div className="text-pink-500">Shop List</div>
    </div>
  </div>
 <div className='mt-32'> <Accesories/></div>

 <div className="flex flex-col">
  <div
    className="py-5 pr-20 pl-5 bg-white shadow-sm max-md:pr-5 max-md:mr-1 max-md:max-w-full"
    role="region"
    aria-label="Product listings section"
  >
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/11d2983be0018097281f9e8c863f5f27a8eadaf5218991a7c4adb676a5acc909?apiKey=48515e2413874846bf60cd2409ef14d1&"
          className="object-contain grow w-full aspect-[1.45] max-md:mt-10"
          alt="Accumsan tincidunt product"
        />
      </div>
      <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start mt-8 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5">
            <h2 className="grow text-xl font-bold text-blue-900">
              Accumsan tincidunt
            </h2>
            <div
              className="flex gap-1.5 my-auto"
              role="group"
              aria-label="Color options"
            >
              <div
                className="flex shrink-0 w-3 h-3 bg-orange-400 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select orange color"
              />
              <div
                className="flex shrink-0 h-3 bg-pink-600 rounded-full w-[13px]"
                role="button"
                tabIndex={0}
                aria-label="Select pink color"
              />
              <div
                className="flex shrink-0 w-3 h-3 bg-indigo-600 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select indigo color"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-3.5">
            <div
              className="grow text-base text-blue-900"
              aria-label="Current price"
            >
              $26.00
            </div>
            <div
              className="text-base text-pink-500"
              aria-label="Original price"
            >
              $52.00
            </div>
            <div
              className="flex gap-1"
              role="group"
              aria-label="Product rating"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/4bcd32efc8d160bc1b5cfe6c771c917fa74ae1daa816134d9624235a3c70b4cf?apiKey=48515e2413874846bf60cd2409ef14d1&"
                className="object-contain shrink-0 aspect-square w-[13px]"
                alt="Star rating"
              />
              <div className="flex gap-0.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/352958232619fd267a0473bb535cb1a99332d52ac58ec49796dacf9d5bdb3d52?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/89462da1abc79fda8d67931d0bc7bf2d36a3119c9e77c9b055f30b4ca6b83c35?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e66756856667d53b6a6367c95939f20550110e28038999eb43fa7422cebbc0d8?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/6bd555f209ddd9592ec5e4e147f56fc18819761e6f22e99d8be1a3e4e5f7b8c4?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <p className="self-stretch mt-3.5 text-lg leading-8 text-gray-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button
            className="mt-8 max-w-full w-[145px]"
            aria-label="Add to cart"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/ee58bd6146496202226e2ba8837027dc33970d0d9d9b819f74dfce3a8844bc56?apiKey=48515e2413874846bf60cd2409ef14d1&"
              className="object-contain w-full aspect-[4.27]"
              alt="Add to cart button"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    className="py-5 pr-20 pl-5 mt-8 bg-white shadow-sm max-md:pr-5 max-md:mr-1 max-md:max-w-full"
    role="region"
    aria-label="Product listing"
  >
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/9b2ab816101a7ff200d0dea246ee94a73d33d2c498c00ebf5ef720255b12e3fa?apiKey=48515e2413874846bf60cd2409ef14d1&"
          className="object-contain grow w-full aspect-[1.45] max-md:mt-10"
          alt="In nulla product"
        />
      </div>
      <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start mt-8 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-w-full w-[250px]">
            <h2 className="text-xl font-bold text-blue-900">In nulla</h2>
            <div
              className="flex gap-1.5 my-auto"
              role="group"
              aria-label="Color options"
            >
              <div
                className="flex shrink-0 w-3 h-3 bg-orange-400 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select orange color"
              />
              <div
                className="flex shrink-0 h-3 bg-pink-600 rounded-full w-[13px]"
                role="button"
                tabIndex={0}
                aria-label="Select pink color"
              />
              <div
                className="flex shrink-0 w-3 h-3 bg-indigo-600 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select indigo color"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-3.5">
            <div
              className="grow text-base text-blue-900"
              aria-label="Current price"
            >
              $26.00
            </div>
            <div
              className="text-base text-pink-500"
              aria-label="Original price"
            >
              $52.00
            </div>
            <div
              className="flex gap-1"
              role="group"
              aria-label="Product rating"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/b845fb4cfdb306c28b345a3b9944b5a3ab518d31fe4ccfe7bc4fcea0d446bba1?apiKey=48515e2413874846bf60cd2409ef14d1&"
                className="object-contain shrink-0 aspect-square w-[13px]"
                alt="Star rating"
              />
              <div className="flex gap-0.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/558b3aff1536ff9aced70a93ca3db929185354ba8edc229471fc9505f6aaf419?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/ff28efcb04caabe78912cf9902eda54a50aa96dcd7df96116daa0ba642ce55ad?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/bf279157f5cebf2178ea6998e035abbb7f8e3d3a06cdecdd54a3b53b139f07cd?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/8e85e204c53270e95c39d0e3ebc957556ed0d6c64e6ce64d6bef45697a2f2e98?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <p className="self-stretch mt-3.5 text-lg leading-8 text-gray-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button
            className="mt-8 max-w-full w-[145px]"
            aria-label="Add to cart"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e95d2f403fdaa0d3eaabc89b268961b0e8731b103685423941d72ae34e0f4db8?apiKey=48515e2413874846bf60cd2409ef14d1&"
              className="object-contain w-full aspect-[4.27]"
              alt="Add to cart button"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    className="py-5 pr-20 pl-5 mt-9 bg-white shadow-sm max-md:pr-5 max-md:mr-1 max-md:max-w-full"
    role="region"
    aria-label="Product listing"
  >
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/107e63b0c1e246d9e6a9260e0df5349645a750f427c7ab6bd8eb3e65b0784175?apiKey=48515e2413874846bf60cd2409ef14d1&"
          className="object-contain grow w-full aspect-[1.45] max-md:mt-10"
          alt="Vel sem product"
        />
      </div>
      <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start mt-8 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-w-full w-[250px]">
            <h2 className="text-xl font-bold text-blue-900">Vel sem</h2>
            <div
              className="flex gap-1.5 my-auto"
              role="group"
              aria-label="Color options"
            >
              <div
                className="flex shrink-0 w-3 h-3 bg-orange-400 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select orange color"
              />
              <div
                className="flex shrink-0 h-3 bg-pink-600 rounded-full w-[13px]"
                role="button"
                tabIndex={0}
                aria-label="Select pink color"
              />
              <div
                className="flex shrink-0 w-3 h-3 bg-indigo-600 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select indigo color"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-3.5">
            <div
              className="grow text-base text-blue-900"
              aria-label="Current price"
            >
              $26.00
            </div>
            <div
              className="text-base text-pink-500"
              aria-label="Original price"
            >
              $52.00
            </div>
            <div
              className="flex gap-1"
              role="group"
              aria-label="Product rating"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/70c15778c8aa419ae4efaae44236d83a84cf76adc03b91e31629ef7c7c58c2c8?apiKey=48515e2413874846bf60cd2409ef14d1&"
                className="object-contain shrink-0 aspect-square w-[13px]"
                alt="Star rating"
              />
              <div className="flex gap-0.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/fda9c5caa6707b743ffa93543987d7726665f35c0099255abc011295b48f9e16?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/1e03323a8fa855fc180d254ccdbabc5ffb3b69ea5e6611dce0b85a9ff2e0dd11?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/a9b985875c6bfb17153eb979f85f1aebc89874ef7de78c7dcab0a0669ea321c9?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/752d959b73e3a0273f3025f14efdcf029a94e01081305d1c459b868a45210daa?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain shrink-0 aspect-square w-[13px]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <p className="self-stretch mt-3.5 text-lg leading-8 text-gray-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button
            className="mt-8 max-w-full w-[145px]"
            aria-label="Add to cart"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/3f7aedf877b358f5deb70a79fdce6a1dc4b00a71313071784251a5d4b838c40d?apiKey=48515e2413874846bf60cd2409ef14d1&"
              className="object-contain w-full aspect-[4.27]"
              alt="Add to cart button"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    className="py-5 pr-20 pl-5 mt-9 bg-white shadow-sm max-md:pr-5 max-md:mr-2 max-md:max-w-full"
    role="region"
    aria-label="Product listing"
  >
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/87c99dde3a38db4c8d075cad05f8a31b52c33d5cb9c50888a85e0d02b7e276ae?apiKey=48515e2413874846bf60cd2409ef14d1&"
          className="object-contain grow w-full aspect-[1.45] max-md:mt-10"
          alt="Porttitor cum product"
        />
      </div>
      <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start mt-8 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-1.5">
            <div className="flex gap-0.5">
              <div className="flex flex-col w-full">
                <h2 className="self-start text-xl font-bold text-blue-900">
                  Porttitor cum
                </h2>
                <div className="flex gap-3 mt-3.5">
                  <div
                    className="grow text-base text-blue-900"
                    aria-label="Current price"
                  >
                    $26.00
                  </div>
                  <div
                    className="text-base text-pink-500"
                    aria-label="Original price"
                  >
                    $52.00
                  </div>
                  <div
                    className="flex flex-1 gap-1"
                    role="group"
                    aria-label="Product rating"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/2d3296e24a27729abae281a64f6584c1343a31c97c93a9b1f0be3ce79c55e5f8?apiKey=48515e2413874846bf60cd2409ef14d1&"
                      className="object-contain shrink-0 aspect-square w-[13px]"
                      alt="Star rating"
                    />
                    <div className="flex gap-0.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/bcbc0b97148cdbe2d4901f8ebcf7cc294531b9cada88da60ced9f7f2602d889f?apiKey=48515e2413874846bf60cd2409ef14d1&"
                        className="object-contain shrink-0 aspect-square w-[13px]"
                        alt=""
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/1f48816a293caca6c56f90a1bf973c1c3260fcb33336e2eb0558372deaab8ae4?apiKey=48515e2413874846bf60cd2409ef14d1&"
                        className="object-contain shrink-0 aspect-square w-[13px]"
                        alt=""
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/21b2b739207b831298fd003775ffe2f2a1d28ffe9d96fa3450cb0c666e8218a7?apiKey=48515e2413874846bf60cd2409ef14d1&"
                        className="object-contain shrink-0 aspect-square w-[13px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/d49792dce23ea90c6026ea7a3bef1c145ce7569b6daa6a509348e41c009db6b0?apiKey=48515e2413874846bf60cd2409ef14d1&"
                className="object-contain shrink-0 self-end mt-9 aspect-square w-[13px]"
                alt="Star rating"
              />
            </div>
            <div
              className="flex gap-1.5 self-start"
              role="group"
              aria-label="Color options"
            >
              <div
                className="flex shrink-0 w-3 h-3 bg-orange-400 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select orange color"
              />
              <div
                className="flex shrink-0 h-3 bg-pink-600 rounded-full w-[13px]"
                role="button"
                tabIndex={0}
                aria-label="Select pink color"
              />
              <div
                className="flex shrink-0 w-3 h-3 bg-indigo-600 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select indigo color"
              />
            </div>
          </div>
          <p className="self-stretch mt-3.5 text-lg leading-8 text-gray-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button
            className="mt-8 max-w-full w-[145px]"
            aria-label="Add to cart"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/b13230ac12a1c7ff489af8f5e65a0f722d9b6c978dc56e3991f6b4c907c96858?apiKey=48515e2413874846bf60cd2409ef14d1&"
              className="object-contain w-full aspect-[4.27]"
              alt="Add to cart button"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex flex-col">
  <div className="py-5 pr-20 pl-5 bg-white shadow-sm max-md:pr-5 max-md:mr-2 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/d8a6d6e09efd921a9da9929da468aaa759b6b54a02bac43d0214c3a7517f5f9a?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Product image for Nunc in"
          className="object-contain grow w-full aspect-[1.45] max-md:mt-10"
        />
      </div>
      <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start mt-8 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-w-full w-[250px]">
            <h2 className="text-xl font-bold text-blue-900">Nunc in</h2>
            <div
              className="flex gap-1.5 my-auto"
              role="group"
              aria-label="Color options"
            >
              <div
                className="flex shrink-0 w-3 h-3 bg-orange-400 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select orange color"
              />
              <div
                className="flex shrink-0 h-3 bg-pink-600 rounded-full w-[13px]"
                role="button"
                tabIndex={0}
                aria-label="Select pink color"
              />
              <div
                className="flex shrink-0 w-3 h-3 bg-indigo-600 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select indigo color"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-3.5">
            <div
              className="grow text-base text-blue-900"
              aria-label="Current price"
            >
              $26.00
            </div>
            <div
              className="text-base text-pink-500"
              aria-label="Original price"
            >
              $52.00
            </div>
            <div
              className="flex gap-1"
              role="group"
              aria-label="Product rating"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/361525810403e4eb999bc5dddf4bfc0439bf97f8ae6bbce863dcfbb881ee1e0d?apiKey=48515e2413874846bf60cd2409ef14d1&"
                alt=""
                className="object-contain shrink-0 aspect-square w-[13px]"
              />
              <div className="flex gap-0.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/06b25dc68b24d8c87978279dd05027a5cba75f11acee213114af8e56061330b6?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/c25cfce4088bb259acdc009cd7d993c64136a683731154eccea249bc4f7e60f6?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/cc1f3272b1dfc3555b4ec399d1051949b0022ba0fb09a8bcf7e9335407ccccc9?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/bbeaac65e0a2b44e200815d640ce0ada9cd047e9c44a0af32847755c08f836a8?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
              </div>
            </div>
          </div>
          <p className="self-stretch mt-3.5 text-lg leading-8 text-gray-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/1cea9ce601dca6176004cb2f392fefdc5f667e8cc7611b9fcf782802a04377e0?apiKey=48515e2413874846bf60cd2409ef14d1&"
            alt="Product details"
            className="object-contain mt-8 max-w-full aspect-[4.27] w-[145px]"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="py-5 pr-20 pl-5 mt-8 bg-white shadow-sm max-md:pr-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e8e3236e3a9f572731f40fc91e3371fe22dce09593e7b28df4ccbd8e03ecc78a?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Product image for Vitae facilisis"
          className="object-contain grow w-full aspect-[1.45] max-md:mt-10"
        />
      </div>
      <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start mt-8 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-w-full w-[250px]">
            <h2 className="text-xl font-bold text-blue-900">Vitae facilisis</h2>
            <div
              className="flex gap-1.5 my-auto"
              role="group"
              aria-label="Color options"
            >
              <div
                className="flex shrink-0 w-3 h-3 bg-orange-400 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select orange color"
              />
              <div
                className="flex shrink-0 h-3 bg-pink-600 rounded-full w-[13px]"
                role="button"
                tabIndex={0}
                aria-label="Select pink color"
              />
              <div
                className="flex shrink-0 w-3 h-3 bg-indigo-600 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select indigo color"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-3.5">
            <div
              className="grow text-base text-blue-900"
              aria-label="Current price"
            >
              $26.00
            </div>
            <div
              className="text-base text-pink-500"
              aria-label="Original price"
            >
              $52.00
            </div>
            <div
              className="flex gap-1"
              role="group"
              aria-label="Product rating"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/a23b13f25c7a15c918bf20cdc0374fd97e49088576b7db4fe290a402a7e5b4b8?apiKey=48515e2413874846bf60cd2409ef14d1&"
                alt=""
                className="object-contain shrink-0 aspect-square w-[13px]"
              />
              <div className="flex gap-0.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/a6b2e4b0caed9660e16ae935d170a2306c99d5c2144cfe15ac97b3463446ca6b?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/9027823287133d1abb3cb9c0ea24dad4c317adbecabe4dc35636af72efce6239?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/39e6b944bd999e38d19dd0cbd298e15adb88a653b853445d685ed0a0a61d6ebf?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/c33b27a7d37b3fab62d1ee5dc09bc321321e79af21a2269606db60869526c5f7?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
              </div>
            </div>
          </div>
          <p className="self-stretch mt-3.5 text-lg leading-8 text-gray-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/7ea996ae2fab816dce3c5d8bb6b68dca2a5509c04fe13edfa20e9cf840ff3f98?apiKey=48515e2413874846bf60cd2409ef14d1&"
            alt="Product details"
            className="object-contain mt-8 max-w-full aspect-[4.27] w-[145px]"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="py-5 pr-20 pl-5 mt-9 bg-white shadow-sm max-md:pr-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/87c400c1a10bdd225d25b98328cdd720c9387f64936d3ee242c110f4737c105c?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Product image for Curabitur lectus"
          className="object-contain grow w-full aspect-[1.45] max-md:mt-10"
        />
      </div>
      <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start mt-8 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-10 max-w-full w-[250px]">
            <h2 className="grow shrink w-36 text-xl font-bold text-blue-900">
              Curabitur lectus
            </h2>
            <div
              className="flex gap-1.5 my-auto"
              role="group"
              aria-label="Color options"
            >
              <div
                className="flex shrink-0 w-3 h-3 bg-orange-400 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select orange color"
              />
              <div
                className="flex shrink-0 h-3 bg-pink-600 rounded-full w-[13px]"
                role="button"
                tabIndex={0}
                aria-label="Select pink color"
              />
              <div
                className="flex shrink-0 w-3 h-3 bg-indigo-600 rounded-full"
                role="button"
                tabIndex={0}
                aria-label="Select indigo color"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-3.5">
            <div
              className="grow text-base text-blue-900"
              aria-label="Current price"
            >
              $26.00
            </div>
            <div
              className="text-base text-pink-500"
              aria-label="Original price"
            >
              $52.00
            </div>
            <div
              className="flex gap-1"
              role="group"
              aria-label="Product rating"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/7fb27bb819620004599b4ed5a5479d66ecbff87c2063182c131635c331e0d0a9?apiKey=48515e2413874846bf60cd2409ef14d1&"
                alt=""
                className="object-contain shrink-0 aspect-square w-[13px]"
              />
              <div className="flex gap-0.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/a2a559bd2314cc799c04fdfb54198489babef2978ec8c7af7913b80cac0998ce?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/934413601ece1ae531a5a27d94ef06cf52340d06e405123051f0bbcfd3493349?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/9dda64a6e15601988b5e2640fb3a7cb696333829851e629c1a5fffef6b685b3b?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/67349b2a84ed89222977c78f367025405717705b3db7d6d72730ff7b90bc1b29?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[13px]"
                />
              </div>
            </div>
          </div>
          <p className="self-stretch mt-3.5 text-lg leading-8 text-gray-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/82d9af4ba87bbed6f36f3b6ca4a176871691d4499842b9af7ddceec05fffecfc?apiKey=48515e2413874846bf60cd2409ef14d1&"
            alt="Product details"
            className="object-contain mt-8 max-w-full aspect-[4.27] w-[145px]"
          />
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
  )
}

export default page