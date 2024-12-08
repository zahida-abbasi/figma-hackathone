import React from 'react';

const BlogPost = () => {
  return (
   <div className='ml-48'> <div className="flex flex-col items-start rounded-none">
     <h1 className="w-full text-3xl font-bold text-indigo-950 mt-2">Blog Page</h1>
      <p className="mt-2">Home . Pages . <span className="text-pink-500">Blog Page</span></p>
      <div className="self-stretch w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[76%] max-md:ml-0 max-w-[870px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/fa31563daf49db1e94d6dede4ce8337fff634ef023e05f5987eb5459975b4d94?apiKey=48515e2413874846bf60cd2409ef14d1&"
              alt="Featured blog post main image"
              className="object-contain grow w-full rounded-md aspect-[1.92] max-md:mt-10 max-md:max-w-[870px]"
            />
            <div className="mt-0">
                <img src='/Author and Date.png'/>
                <h2 className="mt-4 text-2xl font-bold text-indigo-800">
                 Mauris at orci non vulputate diam tincidunt nec.
                </h2>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum...
                </p>
                <button className="mt-4 mb-4 text-blue-900 font-bold">
                  Read More
                </button>
              </div>
          </div>
          <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start w-full max-md:mt-10">
              <form role="search" className="w-full">
                <label
                  htmlFor="searchPosts"
                  className="block text-2xl font-semibold text-violet-950"
                >
                  Search
                </label>
                <div className="relative mt-4 w-full">
                  <input
                    type="search"
                    id="searchPosts"
                    placeholder="Search For Posts"
                    className="w-full py-3 pr-12 pl-2.5 text-sm bg-white rounded-sm border border-solid border-slate-300 text-violet-950"
                    aria-label="Search for posts"
                  />
                  <button
                    type="submit"
                    aria-label="Submit search"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/8db6159f671ae27efc8c0f874ccb5ee4125334ced6c2ff59459dabb2b6830013?apiKey=48515e2413874846bf60cd2409ef14d1&"
                      alt=""
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </form>
              <h2 className="mt-14 text-2xl font-semibold text-violet-950 max-md:mt-10">
                Categories
              </h2>
              <div className="flex gap-2.5 mt-6 text-sm">
                <button className="px-2.5 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                  Hobbies (14)
                </button>
                <button className="px-2.5 py-2 bg-white text-indigo-800 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Women (21)
                </button>
              </div>
              <div className="flex gap-2.5 mt-3 text-sm text-indigo-800">
                <button className="px-2.5 py-2 bg-white rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Women (21)
                </button>
                <button className="px-2.5 py-2 bg-white rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Women (21)
                </button>
              </div>
              <div className="flex gap-2.5 mt-3 text-sm text-indigo-800">
                <button className="px-2.5 py-2 bg-white rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Women (21)
                </button>
                <button className="px-2.5 py-2 bg-white rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Women (21)
                </button>
              </div>
              <h2 className="mt-9 text-2xl font-semibold text-violet-950">
                Recent Post
              </h2>
              <article className="flex gap-1.5 mt-9">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/b1f423c8b893155a27e3bf85db7553b0057894e70614075077224ce37f1eeb86?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  alt="Thumbnail for recent blog post"
                  className="object-contain shrink-0 aspect-[1.37] w-[70px]"
                />
                <div className="flex flex-col my-auto">
                  <h3 className="text-sm text-indigo-800">
                    <a
                      href="#"
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      It is a long established fact
                    </a>
                  </h3>
                  <time
                    dateTime="2020-08-09"
                    className="self-start mt-1.5 text-xs font-semibold text-slate-400"
                  >
                    Aug 09 2020
                  </time>
                </div>
              </article>

              {/* Related posts section moved below */}
              <div className="flex gap-5 mt-14">
                <div className="flex flex-col">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/77838650714269fc76da604c705d8187e0a4f57415709aaac725e19829acd969?apiKey=48515e2413874846bf60cd2409ef14d1&"
                    alt="Thumbnail for related post"
                    className="object-contain aspect-[1.37] w-[70px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/5c6670ae85ce76a2dce2e0d0312d37ee0566dcefc1edf9355e739b2972410954?apiKey=48515e2413874846bf60cd2409ef14d1&"
                    alt="Thumbnail for related post"
                    className="object-contain mt-6 aspect-[1.37] w-[70px]"
                  />
                </div>
                <div className="flex flex-col my-auto text-sm text-indigo-800">
                  <h3>
                    <a
                      href="#"
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      It is a long established fact
                    </a>
                  </h3>
                  <time
                    dateTime="2020-08-09"
                    className="self-start mt-1.5 text-xs font-semibold text-slate-400"
                  >
                    Aug 09 2020
                  </time>
                  <h3 className="mt-10 max-md:mt-10">
                    <a
                      href="#"
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      It is a long established fact
                    </a>
                  </h3>
                  <time
                    dateTime="2020-08-09"
                    className="self-start mt-1.5 text-xs font-semibold text-slate-400"
                  >
                    Aug 09 2020
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<div className='flex'>
<div>
<img
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/7899c1ea9f8ed81bc215a45de74986bd3e1044968fa664716fcc3da1cb9bf1d1?apiKey=48515e2413874846bf60cd2409ef14d1&"
  className="object-contain w-full rounded-md aspect-[1.92] max-w-[870px]"
  alt="Section image"
  tabIndex={0}
/>
         <div className="mt-4">
                <img src='/Author and Date.png'/>
                <h2 className="mt-4 text-2xl font-bold text-indigo-800">
                Aenean vitae in aliquam ultrices lectus. Etiam.
                </h2>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum...
                </p>
                <button className="mt-4 mb-4 text-blue-900 font-bold">
                  Read More
                </button>
              </div>

   </div>
<div className='ml-14'>

<div
  className="flex flex-col items-start rounded-none max-w-[267px]"
  role="region"
  aria-label="Sale and Offer Products"
>
  <h2 className="text-2xl font-semibold text-violet-950">Sale Product</h2>
  <div className="flex gap-1.5 mt-9">
    <div className="flex flex-col">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/ac6501ffc44d216afe7823df80e400a82a0bd300f232deb4d13a21d59aa8e2e8?apiKey=48515e2413874846bf60cd2409ef14d1&"
        className="object-contain rounded aspect-[1.23] w-[70px]"
        alt="Sale product item 1"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/1d27224fe44c6b87859a2013197adac811593849102856c9e9776a6931572c1e?apiKey=48515e2413874846bf60cd2409ef14d1&"
        className="object-contain mt-4 rounded aspect-[1.23] w-[70px]"
        alt="Sale product item 2"
      />
    </div>
    <div className="flex flex-col items-start self-start mt-2 text-sm text-indigo-800">
      <div className="self-stretch" tabIndex={0}>
        Elit ornare in enim mauris.
      </div>
      <time className="mt-1.5 text-xs font-semibold text-slate-400">
        Aug 09 2020
      </time>
      <div className="mt-10" tabIndex={0}>
        Viverra pulvinar et enim.
      </div>
      <time className="mt-1.5 text-xs font-semibold text-slate-400">
        Aug 09 2020
      </time>
    </div>
  </div>
  <div className="flex gap-1.5 mt-4">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/8a37cedc6ffdcb109fa72f73311342b245ad37cbbeb63ebae918440f5786687b?apiKey=48515e2413874846bf60cd2409ef14d1&"
      className="object-contain shrink-0 rounded aspect-[1.23] w-[70px]"
      alt="Sale product item 3"
    />
    <div className="flex flex-col self-start mt-2">
      <div className="text-sm text-indigo-800" tabIndex={0}>
        Mattis varius donec fdsfd
      </div>
      <time className="self-start mt-1.5 text-xs font-semibold text-slate-400">
        Aug 09 2020
      </time>
    </div>
  </div>
  <h2 className="mt-9 text-2xl font-semibold text-violet-950">Offer product</h2>
  <div className="flex gap-4 self-stretch mt-9 font-semibold text-center">
    <div
      className="flex flex-col items-center max-w-full w-[126px]"
      tabIndex={0}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/06489c07ed2c7959d03614c0b2b4712600393b0438419608dff11d3819948562?apiKey=48515e2413874846bf60cd2409ef14d1&"
        className="object-contain self-stretch w-full rounded-none aspect-[1.57]"
        alt="Duis lectus est product"
      />
      <div className="mt-2.5 text-sm text-violet-950">Duis lectus est.</div>
      <div className="mt-1.5 text-xs text-slate-400">$12.00 - $15.00</div>
    </div>
    <div
      className="flex flex-col items-center max-w-full w-[126px]"
      tabIndex={0}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/17eb880be43ef434207d66f56dbbe4464c6f391a4d41f3f3bac23a0c3375fa5f?apiKey=48515e2413874846bf60cd2409ef14d1&"
        className="object-contain self-stretch w-full rounded-none aspect-[1.57]"
        alt="Sed placerat product"
      />
      <div className="mt-2.5 text-sm text-violet-950">Sed placerat.</div>
      <div className="mt-1.5 text-xs text-slate-400">$12.00 - $15.00</div>
    </div>
  </div>
  <div className="flex gap-4 self-stretch mt-8 font-semibold text-center">
    <div
      className="flex flex-col items-center max-w-full w-[126px]"
      tabIndex={0}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/36a944c3b1e4f16668890011fac72714f097d0b53f125d963be0f2b5f630141d?apiKey=48515e2413874846bf60cd2409ef14d1&"
        className="object-contain self-stretch w-full rounded-none aspect-[1.57]"
        alt="Netus proin product"
      />
      <div className="mt-2.5 text-sm text-violet-950">Netus proin.</div>
      <div className="mt-1.5 text-xs text-slate-400">$12.00 - $15.00</div>
    </div>
    <div
      className="flex flex-col items-center max-w-full w-[126px]"
      tabIndex={0}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/053557fa6179af77924e586ba7ff796c18fd79923d4957e18d90401954bd0629?apiKey=48515e2413874846bf60cd2409ef14d1&"
        className="object-contain self-stretch w-full rounded-none aspect-[1.57]"
        alt="Platea in product"
      />
      <div className="mt-2.5 text-sm text-violet-950">Platea in.</div>
      <div className="mt-1.5 text-xs text-slate-400">$12.00 - $15.00</div>
    </div>
  </div>
</div> 
</div>

</div>
<img
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/5b678b07d161d8d6c58c455ba3a93e2a178bf73d0ec74a8af62afbaadc6d3c1d?apiKey=48515e2413874846bf60cd2409ef14d1&"
  className="object-contain w-full rounded-md aspect-[1.92] max-w-[870px] mt-0"
  alt="Section content image"
  tabIndex={0}
/>
         <div className="mt-4 mb-20">
                <img src='/Author and Date.png'/>
                <h2 className="mt-4 text-2xl font-bold text-indigo-800">
                Sit nam congue feugiat nisl, mauris amet nisi. 
                </h2>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum...
                </p>
                <button className="mt-4 mb-4 text-blue-900 font-bold">
                  Read More
                </button>
              </div>
              <img src='/pic logo.png' alt='pic logo'
              className='mb-20'
              />


    </div>
  </div>
  );
};

export default BlogPost;
