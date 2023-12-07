
const BlogSection = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left">The latest and greatest news</h2>
        <p className="mb-8 mt-4 text-center text-sm text-[#636262] sm:text-base md:mb-12 lg:mb-16 lg:text-left">Lorem ipsum dolor sit amet elit ut aliquam</p>
        {/* Content */}
        <div className="mx-auto grid gap-8 lg:grid-cols-2">
          <a href="#" className="flex flex-col gap-4 rounded-md [grid-area:1/1/4/2] lg:pr-8">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg" alt="" className="inline-block h-72 w-full object-cover" />
            <div className="flex flex-col items-start py-4">
              <div className="mb-4 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                <p className="text-sm font-semibold text-[#6574f8]">CATEGORY NAME</p>
              </div>
              <p className="mb-4 text-xl font-bold md:text-2xl">The latest news with Flowspark</p>
              <div className="flex flex-col text-sm text-[#636262] lg:flex-row">
                <p>Laila Bahar</p>
                <p className="mx-2 hidden lg:block">-</p>
                <p>6 mins read</p>
              </div>
            </div>
          </a>

          <div className="md:flex md:justify-between lg:flex-col">
            <a href="#" className="flex flex-col pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg" alt="" className="inline-block h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
              <div className="flex flex-col items-start pt-4 lg:px-8">
                <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                  <p className="text-sm font-semibold text-[#6574f8]">CATEGORY NAME</p>
                </div>
                <p className="mb-2 text-sm font-bold sm:text-base">Here is the title for this blog</p>
                <div className="flex flex-col items-start">
                  <div className="flex flex-col text-sm text-[#636262] sm:text-base lg:flex-row lg:items-center">
                    <p>Laila Bahar</p>
                    <p className="mx-2 hidden lg:block">-</p>
                    <p>6 mins read</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="#" className="flex flex-col pb-8 lg:mb-3 lg:flex-row lg:[border-bottom:1px_solid_rgb(236,_236,_236)]">
              <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94016de6cf90_Rectangle%2035.svg" alt="" className="inline-block h-60 w-full object-cover md:h-36 lg:h-32 lg:w-32" />
              <div className="flex flex-col items-start pt-4 lg:px-8">
                <div className="mb-2 rounded-md bg-[#f2f2f7] px-2 py-1.5">
                  <p className="text-sm font-semibold text-[#6574f8]">CATEGORY NAME</p>
                </div>
                <p className="mb-2 text-sm font-bold sm:text-base">Here is the title for this blog</p>
                <div className="flex flex-col items-start">
                  <div className="flex flex-col text-sm text-[#636262] sm:text-base lg:flex-row lg:items-center">
                    <p>Laila Bahar</p>
                    <p className="mx-2 hidden lg:block">-</p>
                    <p>6 mins read</p>
                  </div>
                </div>
              </div>
            </a>

            {/* Add more blog items as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
