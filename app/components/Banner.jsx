import Link from "next/link"

const TopBanner = () => {
  return (
    
      
      <div className="absolute left-1/2 top-[5%] mx-auto flex w-[90%] max-w-[960px] -translate-x-1/2 flex-col items-center rounded-xl bg-white dark:bg-black p-4 sm:justify-between sm:px-8 md:flex-row md:py-6 lg:w-full z-40">
        {/* Banner Text */}
        <div className="flex flex-row items-center">
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6399786f0e0572a14cc94914_Ellipse%2030.svg" alt="" className="mr-4 inline-block h-8 w-8 rounded-full object-cover" />
          <p className="text-sm text-gray-500 dark:text-gray-400">Ut enim odio quis ipsum posuere ante porta nibh nulla.</p>
        </div>
        {/* Get Started Button */}
        <div className="mt-4 flex flex-row items-center justify-center gap-4 md:mt-0">
          <Link href="#" className="inline-block rounded-xl border border-black bg-white dark:bg-black dark:border-white px-10 py-3 font-semibold text-blue-500 dark:text-blue-300 shadow-md dark:shadow-none">Get Started</Link>
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/646723d38ca7fbe390224779_ri_close-circle-fill%20(1).svg" alt="" className="absolute bottom-auto left-auto right-[1%] top-[3%] w-6 md:relative md:right-0 md:w-8" />
        </div>
      </div>
      
  );
};

export  {TopBanner};