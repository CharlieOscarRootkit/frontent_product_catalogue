import Product_grid from "../components/Product-list.jsx"
import Pagination from "../components/Pagination.jsx"
const Search = () => {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between py-24 dark:bg-gray-900/80">
			<div className="head-sectoin flex flex-col w-[100%] p-6 gap-10 bg-gray-50 dark:bg-gray-900/80" >
				<section className="search-bar flex flex-row justify-evenly align-center w-[90%] pt-12 ">
					<p className="text-4xl font-bold self-center">
						Search
					</p>
					<div class="relative shadow-md  bg-white rounded-md min-w-[70%] max-w-lg">
				        <input type="text" class="rounded-md p-4 w-full" placeholder="Search MCQ | Topic | Course" />

				        <button type="submit" class="absolute top-[30%] right-[2%]">
				                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				                    stroke="currentColor" class="w-6 h-6">
				                    <path stroke-linecap="round" stroke-linejoin="round"
				                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				                </svg>
				        </button>

	   				 </div>
				</section>
				
				<section className="filtering w-[90%] flex flex-row justify-evenly align-center">
					<p className="text-2xl font-bold self-center">
						Filter
					</p>
					<div className="">

					</div>
				</section>
			</div>
			<section className="search-result">
				<Product_grid />
			</section>
			<Pagination />
		</main>
			)
}


export default Search;