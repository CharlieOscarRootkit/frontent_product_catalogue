"use client"
import React from 'react';
import Link from "next/link"
const SignUpComponent = () => {
  return (
    <main className="dark:bg-gray-900">
      <div className="py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-xl bg-[#f2f2f7] dark:bg-gray-800 px-5 py-12 text-center md:px-10">
          <h2 className="text-3xl font-bold md:text-5xl">Start 14-day free trial</h2>
          <p className="mx-auto mb-5 mt-4 max-w-xl text-[#647084] dark:text-gray-400 md:mb-8">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
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
          <div className="mx-auto mb-14 mt-14 flex max-w-sm justify-around">
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg" alt="" className="inline-block" />
            <p className="text-sm text-[#647084] dark:text-gray-400">or sign up with email</p>
            <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg" alt="" className="inline-block" />
          </div>
          <form className="mx-auto mb-4 max-w-sm pb-4" name="wf-form-password" method="get">
            <div className="relative">
              <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
              <input
                type="email"
                className="mb-4 block h-9 w-full border border-black bg-white dark:bg-gray-900 px-3 py-6 pl-14 text-sm text-[#333333] dark:text-gray-400 focus:border-yellow-500"
                maxLength="256"
                id="email"
                name="name"
                placeholder="johndeo@gmail.com"
                required
              />

            </div>
            <div className="relative mb-4 pb-2">
              <img alt="" src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg" className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block" />
              <input type="password" className="mb-4 block h-9 w-full border border-black bg-white dark:bg-gray-900 px-3 py-6 pl-14 text-sm text-[#333333] dark:text-gray-400" placeholder="Password " required="" />
            </div>
            <button className=" w-full flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] dark:bg-gray-700 px-8 py-4 text-center font-semibold text-white transition shadow-lg dark:shadow-none hover:shadow-lg">
              <p className="mr-6 font-bold">Join Flowspark</p>
              <div className="h-4 w-4 flex-none">
                <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </div>
            </button>
          </form>
          <p className="text-sm text-[#636262] dark:text-gray-400">Already have an account? <Link href="login" className="font-[Montserrat,_sans-serif] text-sm font-bold text-black dark:text-white">Login now</Link></p>
        </div>
      </div>
    </main>
  );
};

export default SignUpComponent;