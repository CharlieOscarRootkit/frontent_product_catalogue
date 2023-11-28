"use client"
import {useState} from "react"

const ImageNav = ({images}) => {
	const baseURL = `http://${"192.168.0.102" || "localhost"}:1337`;
	const [PImage, setPImage] = useState(`${baseURL}${images.data[2].attributes.url}`);

	const changePrincipalImage = (idx) => {
	  setPImage(`${baseURL}${images.data[idx].attributes.url}`);
	};
	console.log(images)
	return (	
			 <div class="md:flex-1 px-4 flex flex-col gap-4 ">
			 			{/*<div className="flex flex-col gap-2 sm:hidden md:flex lg:flex xl:flex 2xl:flex ">
			 				{
			 					images.data.map((image,idx) => 	<img class="w-20 h-auto cursor-pointer" src={`${baseURL}${image.attributes.url}`} alt="Product Image" onClick = {() => changePrincipalImage(idx)}/>			
			 					)
			 				}
			 			</div>*/}
		                <div class="h-full rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
		                    <img class="w-full h-full object-cover" src={PImage} alt="Product Image" />
		                </div>
		               <div className="flex flex-row gap-2 justify-evenly overflow-x-hidden">
						  {images.data.map((image, idx) => (
						    <img
						      className="w-20 h-auto cursor-pointer"
						      src={`${baseURL}${image.attributes.url}`}
						      alt="Product Image"
						      onClick={() => changePrincipalImage(idx)}
						    />
						  ))}
						</div>

		               
		            	{/*<div class="h-full border-l border-gray-800 dark:border-gray-300 "></div>*/}
		     </div>
		)
}

export default ImageNav;