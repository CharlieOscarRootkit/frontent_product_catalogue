"use client"
import Link from "next/link"
const Login = () => {
	return (

            <main class="m-auto xl:container px-12 sm:px-0 mx-auto dark:bg-gray-900">
			  <div class="mx-auto h-full sm:w-max">
			    <div class="m-auto  py-12">
			    <div class="mt-12 rounded-3xl  bg-gray-50 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
			      <h3 class="text-2xl font-semibold text-gray-700 dark:text-white">Login to your account</h3>
			      <div class="mt-12 flex flex-wrap sm:grid gap-6 grid-cols-2">
			        <button
			          class="w-full h-11 rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
			        >
			          <div class="w-max mx-auto flex items-center justify-center space-x-4">
			            <img src="https://tailus.io/sources/blocks/plus-social/preview/images/google.svg" class="w-5" alt="" />
			            <span class="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white"
			              >With Google</span
			            >
			          </div>
			        </button>
			        <button
			          class="w-full h-11 rounded-full bg-gray-900 px-6 transition hover:bg-gray-800 focus:bg-gray-700 active:bg-gray-600 dark:bg-gray-700 dark:border dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
			        >
			          <div class="w-max mx-auto flex items-center justify-center space-x-4 text-white">
			            <svg
			              xmlns="http://www.w3.org/2000/svg"
			              fill="currentColor"
			              class="w-5"
			              viewBox="0 0 16 16"
			            >
			              <path
			                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
			              />
			            </svg>
			            <span class="block w-max text-sm font-semibold tracking-wide text-white"
			              >With Github</span
			            >
			          </div>
			        </button>
			      </div>
			      <div className="mx-auto mb-14 mt-14 flex max-w-sm justify-around">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg" alt="" className="inline-block" />
            <p className="text-sm text-[#647084] dark:text-gray-400">or login with email</p>
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg" alt="" className="inline-block" />
          </div>
			      <form action="" class="mt-10 space-y-8 dark:text-white">
			        <div className="relative">
              <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
              <input type="email" className="mb-4 block h-9 w-full border border-black bg-white dark:bg-gray-900 px-3 py-6 pl-14 text-sm text-[#333333] dark:text-gray-400" maxLength="256" name="name" placeholder="johndeo@gmail.com" required />
            </div>
            <div className="relative mb-4 pb-2">
              <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
              <input type="password" className="mb-4 block h-9 w-full border border-black bg-white dark:bg-gray-900 px-3 py-6 pl-14 text-sm text-[#333333] dark:text-gray-400" placeholder="Password (min 8 characters)" required="" />
            </div>

			        <div>
			           <button className=" w-full flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] dark:bg-gray-700 px-8 py-4 text-center font-semibold text-white transition shadow-lg dark:shadow-none hover:shadow-lg">
              <p className="mr-6 font-bold">login</p>
              <div className="h-4 w-4 flex-none">
                <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </div>
            </button>
			          
			        </div>
			      </form>
			      <p className="text-sm py-4 text-[#636262] dark:text-gray-400">Don't have an account? <Link href="sign-up" className="font-[Montserrat,_sans-serif] text-sm font-bold text-black dark:text-white">create one now !</Link></p>
			    </div>
			      
			    </div>
			  </div>
			</main>
                                    
			)
}

export default Login