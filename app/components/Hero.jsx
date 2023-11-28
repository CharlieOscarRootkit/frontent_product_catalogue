import Link from 'next/link';
import InnerButton from "./button/InnerCTA.jsx"
import AltButton from "./button/AltCTA.jsx"

const HeroSection = () => {
	return (
        

            
        
            <section class="relative w-fullbg-white dark:bg-gray-900">
                
                <div class="min-h-screen flex">
                    <div class="container m-auto px-6 py-40 md:px-12 lg:py-0 lg:px-7">
                        <div class="flex items-center flex-wrap gap-12 lg:gap-0">
                            <div class="lg:w-5/12 space-y-8">
                                <span class="flex space-x-2">
                                    <span class="block w-14 mb-2 border-b-2 border-gray-600"></span>
                                    <span class="font-medium text-gray-600 dark:text-gray-400">New this summer</span>
                                </span>
                                <h1 class="text-4xl font-bold md:text-6xl dark:text-white">The New <br/> Way To Discover</h1>
                                <p class="text-xl text-gray-700 dark:text-gray-300">Booking Company-Wide Savings, Invoicing and reporting docs.</p>
                                
                                <div class="flex space-x-4">
                                    <InnerButton text="Browse Collection" link="/collections"/>
                                </div>
                            </div>

                            <div class="hidden relative md:block lg:w-7/12">
                                <div aria-hidden="true" class="absolute inset-0 m-auto w-[30rem] h-[30rem] rounded-full bg-yellow-200">

                                </div>
                                <img src="https://tailus.io/sources/blocks/ecommerce-shoes/preview/images/shoes.png" class="relative ml-auto" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            
		)
}

const CategoryHero = () => {

    return (

    <section class="border-b dark:border-gray-700">
        <div class="container m-auto px-6 pt-24 md:px-12  lg:pt-[4.8rem] lg:px-7">
            <div class="grid lg:grid-cols-2 items-center gap-12 px-2 md:px-0">
                <div class="col-span-1">
                    <div class="relative w-full">
                        <img src="https://tailus.io/sources/blocks/ecommerce-mood/preview/images/shoes2.jpg" alt="shoes" loading="lazy" width="100%" height="640"/>
                        <div class="absolute bottom-2 right-2 bg-white dark:bg-gray-800">
                            <div class="flex p-1">
                                <button aria-label="button-left" class="p-3 border-r dark:border-gray-600">
                                    <svg class="fill-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        class="rotate-180" fill="currentColor" class="bi bi-chevron-right"
                                        viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                                <button aria-label="button-right" class="p-3">
                                    <svg class="fill-gray-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative col-span-1">
                    <h1 class="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl dark:text-white">A Look for every <span
                            class="text-cyan-800 dark:text-cyan-400">mood</span>.</h1>
                    <div class="mt-8 lg:mt-16 space-y-8">
                        <p class="text-gray-700 dark:text-gray-300">Sit amet consectetur adipisicing elit. eligendi tenetur nihil
                            quaerat suscipit, sunt dignissimos.</p>
                        <div class="flex space-x-4 mt-6">
                            <button type="button" title="Start buying"
                                class="w-full py-3 px-6 text-center rounded-full transition duration-300 bg-gray-900 dark:bg-gray-700 hover:bg-cyan-500 active:bg-cyan-600 focus:bg-cyan-800 sm:w-max">
                                <span class="block text-white text-sm">
                                    Shop now
                                </span>
                            </button>
                            <button type="button" title="Start buying"
                                class="w-full py-3 px-6 text-center rounded-full transition border border-gray-200 dark:border-gray-700 sm:w-max">
                                <span class="block text-gray-800 text-sm dark:text-white">
                                    View store
                                </span>
                            </button>
                        </div>
                    </div>'
                </div>
            </div>
        </div>
    </section>
                                    
        )

}

const ProductTypeHero = () => {
    return(

            <section>
      
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        
        <div class="grid grid-cols-1 items-center gap-12 sm:gap-20 lg:grid-cols-2 lg:gap-28">
          
          <div class="max-w-[720px] lg:max-w-[842px]">
            <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
              The Website You Want Without The{" "}
              <span
                className="bg-cover bg-center px-4 text-white"
                style={{
                  backgroundImage:
                    "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')"
                }}
              >
                Dev Time
              </span>
            </h1>
            <p class="mb-6 max-w-[528px] text-xl text-[#636262] md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>


            <InnerButton text="Discover More" link="/categories/sheos"/>

          </div>
          
          <div class="relative mx-auto h-full max-h-[640px] w-[90%] max-w-[640px] lg:w-full lg:max-w-[480px]">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d1cb654acd795a72b12_magicpattern-ixxjruC7Gg4-unsplash.jpg" alt="" class="h-full w-full max-w-[800px] object-cover" />
            
            <div class="absolute -left-[7.5%] bottom-[10%] right-auto top-auto flex h-28 w-80 flex-col items-start justify-center border border-solid border-black bg-white px-5 py-3 [box-shadow:rgb(0,_0,_0)_4px_4px] lg:left-[-45%]">
            
              <div class="mb-4 flex h-auto items-start">
                <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63906655aa174e025702f043_Group%20(1).svg" alt="" class="mr-2 inline-block" />
                <p class="pt-1.5 text-sm text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
              </div>
              <div class="flex h-auto w-full items-center justify-between">
            
                <div class="flex items-center">
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905430069fb027f83abb71_Ellipse-3.jpg" alt="" class="mr-2 inline-block h-8" />
                  <div>
                    <p class="text-sm font-bold">Harry Parker</p>
                    <p class="text-sm">Marketing</p>
                  </div>
                </div>
            
                <div>
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" class="mr-1 inline-block w-3.5" />
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" class="mr-1 inline-block w-3.5" />
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" class="mr-1 inline-block w-3.5" />
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" class="mr-1 inline-block w-3.5" />
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" class="mr-1 inline-block w-3.5" />
                </div>
              </div>
            </div>
            
            <div class="absolute -left-[7.5%] -right-[5%] bottom-1/2 top-auto flex h-28 w-80 flex-col items-start justify-center border border-solid border-black bg-white px-5 py-3 [box-shadow:rgb(0,_0,_0)_4px_4px] sm:bottom-[35%] lg:left-auto lg:right-[-10%]">
            
              <div class="mb-4 flex h-auto items-start">
                <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63906655aa174e025702f043_Group%20(1).svg" alt="" class="mr-2 inline-block" />
                <p class="pt-1.5 text-sm text-[#636262]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</p>
              </div>
              <div class="flex h-auto w-full items-center justify-between">
            
                <div class="flex items-center">
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905430069fb027f83abb71_Ellipse-3.jpg" alt="" class="mr-2 inline-block h-8" />
                  <div>
                    <p class="text-sm font-bold">Harry Parker</p>
                    <p class="text-sm">Marketing</p>
                  </div>
                </div>
            
                <div>
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" class="mr-1 inline-block w-3.5" />
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" class="mr-1 inline-block w-3.5" />
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" class="mr-1 inline-block w-3.5" />
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" class="mr-1 inline-block w-3.5" />
                  <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390676b385b0525c99b09a8_Vector.svg" alt="" class="mr-1 inline-block w-3.5" />
                </div>
              </div>
            </div>
            
            <div class="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full -rotate-[4.5deg] bg-[#1353fe]"></div>
            <div class="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full -rotate-[10deg] bg-[#1353fe33]"></div>
          </div>
        </div>
      </div>
      
      <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63906ac023b5302b668e8a80_Frame%20427322870.svg" alt="" class="absolute bottom-0 left-auto right-0 top-auto -z-10 hidden md:bottom-auto md:left-auto md:right-0 md:top-0 md:inline-block" />
    </section>
    
        )
}

const HeroSectionTwo = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-8/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <nav className="flex px-4 justify-between items-center">
            <div className="text-4xl font-bold">
              Plant<span className="text-green-700">.</span>
            </div>
            <div>
              <img src="https://image.flaticon.com/icons/svg/497/497348.svg" alt="" className="w-8" />
            </div>
          </nav>
          <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Find your <span className="text-green-700">greeny</span> stuff for your room
              </h1>
              <div className="w-20 h-2 bg-green-700 my-4"></div>
              <p className="text-xl mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit
                placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id
                aliquam possimus aut.
              </p>
              <Link href="#" className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                  Learn More
                
              </Link>
            </div>
          </header>
        </div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="Leafs"
        className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
      />
    </div>
  );
};

const ProductTypeHeroTwo = () => {

    return (     
        <section>
          
          <div class="relative mx-auto flex w-full max-w-[1120px] flex-col items-start px-5 py-16 md:px-10 md:py-24 lg:py-32">
            
            <div class="lg:max-w-[80%]">
              <h1 class="mb-5 text-4xl font-semibold md:text-8xl lg:mb-8">The Website You Want Without The <span class="bg-cover bg-center bg-no-repeat px-4 text-white" style={{ backgroundImage: "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')"}} >Dev Time</span>.</h1>
              <p class="mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
            </div>
          
            <div class="flex">
            <InnerButton text="Explore Now" link="/categories/women" />
            
    
            </div>
          
            <a href="#" class="relative bottom-0 left-auto right-0 top-auto mt-20 inline-block h-[480px] w-full font-bold text-[#1353fe] lg:absolute lg:h-64 lg:w-64">
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/6390645323b5307a9e8e2aaa_Rectangle%20777.png" alt="" class="relative bottom-0 left-auto right-0 top-auto inline-block h-full w-full -rotate-3 rounded-xl object-cover lg:-rotate-6" />
              <div class="absolute inset-0 z-10 h-full -rotate-6 rounded-xl bg-[#00000033] lg:-rotate-3"></div>
              <div class="absolute inset-0 -z-10 h-full rounded-2xl bg-black"></div>
              <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63914ea79e127d1bd7939a6a_Play.svg" alt="" class="absolute bottom-1/2 left-1/2 right-auto top-auto z-10 inline-block -translate-x-1/2 translate-y-1/2" />
            </a>
          </div>
          
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg" alt="" class="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto" />
          <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg" alt="" class="absolute bottom-auto left-auto right-0 top-0 -z-10 inline-block max-[479px]:hidden" />
        </section>
        )
}


export {HeroSection,HeroSectionTwo,CategoryHero,ProductTypeHero,ProductTypeHeroTwo}