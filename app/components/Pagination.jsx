const Pagination = () => {
	return (
		<div class="p-2 border-t dark:border-gray-700 mt-40">
    <nav role="navigation" aria-label="Pagination Navigation" class="flex items-center justify-between">
        <div class="flex justify-between items-center flex-1 lg:hidden">
            <div class="w-10">
                <button title="Previous" type="button"
                    class=" flex items-center justify-center rounded-full relative outline-none hover:bg-gray-500/5 disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none text-yellow-500 focus:bg-yellow-500/10 dark:hover:bg-gray-300/5 w-10 h-10"
                    rel="prev">
                    <span class="sr-only">
                        Previous
                    </span>

                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="3" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path>
                    </svg>

                </button>
            </div>

            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <label>
                    <select
                        class="h-8 text-sm pr-8 leading-none transition duration-75 border-gray-300 rounded-lg shadow-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-inset focus:ring-yellow-500 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:border-yellow-500">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="-1">All</option>
                    </select>

                    <span class="text-sm font-medium dark:text-white">
                        per page
                    </span>
                </label>
            </div>

            <div class="w-10">
                <button title="Next" type="button"
                    class="flex items-center justify-center rounded-full relative outline-none hover:bg-gray-500/5 disabled:opacity-70 disabled:cursor-not-allowed disabled:pointer-events-none text-yellow-500 focus:bg-yellow-500/10 dark:hover:bg-gray-300/5 w-10 h-10"
                    rel="next">
                    <span class="sr-only">
                        Next
                    </span>

                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="3" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div class="hidden flex-1 items-center lg:grid grid-cols-3">
            <div class="flex items-center">
                <div class="pl-2 text-sm font-medium dark:text-white">
                    Showing 11 to 20 of 99 results
                </div>
            </div>

            <div class="flex items-center justify-center">
                <div
                    class="flex items-center space-x-2 filament-tables-pagination-records-per-page-selector rtl:space-x-reverse">
                    <label>
                        <select
                            class="h-8 text-sm pr-8 leading-none transition duration-75 border-gray-300 rounded-lg shadow-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-inset focus:ring-yellow-500 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:border-yellow-500">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="-1">All</option>
                        </select>

                        <span class="text-sm font-medium dark:text-white">
                            per page
                        </span>
                    </label>
                </div>
            </div>

            <div class="flex items-center justify-end">
                <div class="py-3 border rounded-lg dark:border-gray-600">
                    <ol
                        class="flex items-center text-sm text-gray-500 divide-x rtl:divide-x-reverse divide-gray-300 dark:text-gray-400 dark:divide-gray-600">
                        <li>
                            <button type="button"
                                class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
                                aria-label="Previous" rel="prev">
                                <svg class="w-5 h-5 rtl:scale-x-[-1]" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </li>


                        <li>
                            <button type="button"
                                class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition">
                                <span>1</span>
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none transition text-yellow-600 filament-tables-pagination-item-active focus:underline bg-yellow-500/10 ring-2 ring-yellow-500">

                                <span>2</span>
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition">

                                <span>3</span>
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition">

                                <span>4</span>
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition">

                                <span>5</span>
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition">

                                <span>6</span>
                            </button>
                        </li>
                        <li>
                            <button disabled="" type="button"
                                class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none filament-tables-pagination-item-disabled cursor-not-allowed pointer-events-none opacity-70">
                                <span>...</span>
                            </button>
                        </li>


                        <li>
                            <button type="button"
                                class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition">

                                <span>9</span>
                            </button>
                        </li>
                        <li>
                            <button type="button"
                                class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 focus:text-yellow-600 transition">

                                <span>10</span>
                            </button>
                        </li>

                        <li>
                            <button type="button"
                                class="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
                                aria-label="Next" rel="next">
                                <svg class="w-5 h-5 rtl:scale-x-[-1]" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </nav>
</div>
		)
}


export default Pagination