const Newsletter = () => {


	return (
		<section className="">
			<div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">

			<div class="grid items-center gap-16 bg-[#f2f2f7] p-8 sm:p-10 md:grid-cols-[0.5fr_1fr] md:p-16 dark:bg-gray-900">
			  
			  <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64772c025e9047a330ad448e_Rectangle%2034.png" alt="" class="inline-block h-72 w-72 object-cover" />
			  <div class="max-w-xl">
			    
			    <h2 class="mb-4 text-3xl font-bold md:text-4xl">Join the Flowspark Community</h2>
			    <p class="mb-6 text-md text-[#636262] sm:text-base md:mb-10 lg:mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
			    
			    <div class="mb-4 flex">
			      <form name="email-form" method="get" class="flex w-full flex-col gap-3 sm:flex-row">
			        <input type="email" class="h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-md text-[#333333] dark:text-white" placeholder="Enter your email" />
			        <input type="submit" value="Notify me" class="cursor-pointer rounded-md bg-black px-6 py-2 font-semibold text-white" />
			      </form>
			    </div>
			  </div>
			</div>
			</div>
		</section>
		)
}

export default Newsletter;