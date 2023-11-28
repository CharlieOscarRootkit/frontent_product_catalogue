const ContentOne = () => {
  return (
    <div className="py-16 ">
      <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        <div className="lg:bg-gray-50 dark:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center" style={{ background: "rgba(0,0,0,0)" }}>
          <div className="md:w-5/12 lg:w-1/2">
            <img
              src="https://tailus.io/sources/blocks/left-illustration/preview/images/pie.svg"
              alt="image"
              loading="lazy"
              width=""
              height=""
            />
          </div>
          <div className="md:w-7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Nuxt development is carried out by passionate developers
            </h2>
            <p className="my-8 text-gray-600 dark:text-gray-300">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus
              nesciunt dicta veniam aspernatur quam mollitia.
            </p>

            <a
              href="https://tailus.io/contact"
              className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-sky-100 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span className="relative text-base font-semibold text-sky-600 dark:text-white">Browse now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentTwo = () => {
  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img
                    className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                    alt="hero"
                    src="https://wickedblocks.dev/assets/images/placeholders/squareCard.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">Your tagline</span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              Medium length display headline.
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              Free and Premium themes, UI Kit&apos;s, templates and landing pages built with Tailwind CSS, HTML &amp;
              Next.js.
            </p>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              Free and Premium themes, UI Kit&apos;s, templates and landing pages built with Tailwind CSS, HTML &amp;
              Next.js.
            </p>
            <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
              <div className="prose prose-md">
                <ul>
                  <li className="text-gray-500">Ain&apos;t no sunshine when she&apos;s gone.</li>
                  <li className="text-gray-500">Expensive feature.</li>
                  <li className="text-gray-500">Really good feature.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContentOne, ContentTwo };