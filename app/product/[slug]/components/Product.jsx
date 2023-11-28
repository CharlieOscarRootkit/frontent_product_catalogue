import ImageNav from "./ImageNav.jsx"

const Product = ({id,attributes}) => {
	const baseURl = `http://${"192.168.0.102" || "localhost"}:1337`
	const productId = id
	const {title, description,price,quantity,images,brand} = attributes
	
	console.log(images.data)

	return (
		<div class="bg-white dark:bg-gray-900 py-8" >
		    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		        <div class="flex flex-col md:flex-row -mx-4">
		        	<ImageNav images={images}/>
		            <div class="md:flex-1 px-4">

		                <h2 class="mb-4 text-xl font-semibold md:text-xl font-bold text-gray-800 dark:text-white mb-2 pb-8 pt-4 ">{title}</h2>
		                
		                <h2 class="mb-4 text-xl font-semibold md:text-xl font-bold text-gray-800  mb-2 text-red-700">{brand}</h2>
				                
			                <div class="flex mb-4 ">
				                    {/*<div class="mr-4 flex flex-row justify-between ">
				                        <div class="font-bold text-gray-700 dark:text-gray-300">Price:</div>
				                        <div class="text-gray-600 dark:text-gray-300">${price.toFixed(2)}</div>
				                    </div>*/}
				                    {/*
				                    <div>
				                        <span class="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
				                        <span class="text-gray-600 dark:text-gray-300">In Stock</span>
				                    </div>
				                    */}	
				                </div>
			                <div class="mb-4 flex flex-col justify-between ">
		                    <p class="font-bold text-gray-700 dark:text-gray-300">Colors : </p>
		                    <div class="flex mt-2 flex flex-row flex-wrap ">
		                        <button class="w-10 h-10 bg-gray-800 dark:bg-gray-200 mr-2"></button>
		                        <button class="w-10 h-10 bg-red-500 dark:bg-red-700 mr-2"></button>
		                        <button class="w-10 h-10 bg-blue-500 dark:bg-blue-700 mr-2"></button>
		                        <button class="w-10 h-10 bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
		                    </div>
		                </div>
		                <div class="mb-4 flex flex-col justify-between">
		                    <span class="font-bold text-gray-700 dark:text-gray-300">Sizes :</span>
		                    <div class="flex mt-2 flex flex-row flex-wrap ">
		                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4  font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
		                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4  font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
		                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4  font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
		                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4  font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
		                        <button class="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4  font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
		                    </div>
		                </div>

		                <div>
		                    <span class="font-bold text-gray-800 dark:text-gray-100">Product Description:</span>
		                    <p class="text-gray-600 dark:text-gray-400 text-md mt-2">
		                        {description}
		                    </p>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>

		)
}

export default Product