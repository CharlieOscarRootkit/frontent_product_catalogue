"use client"

import Tooltip from "../components/Tooltip";
import Cart from "../components/ecom/Cart.jsx";
import Link from "next/link";

export default function AboutUs() {
 
 const goback = () => {	
 		window.history.back()
 }

  const items = [
    { id: 1, name: "Slim Fit Jeans", price: 39.99, quantity: 2, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Cotton T-Shirt", price: 15.5, quantity: 3, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Running Shoes", price: 79.99, quantity: 1, img: "https://via.placeholder.com/150" },
    { id: 4, name: "Leather Wallet", price: 29.75, quantity: 2, img: "https://via.placeholder.com/150" },
    { id: 5, name: "Hooded Sweatshirt", price: 45.0, quantity: 1, img: "https://via.placeholder.com/150" },
  ];

return(

		<> 
			<main className=" bg-gray-500 bg-opacity-80 p-4 absolute flex min-h-screen w-[100%] flex-col items-center justify-between py-24 z-50">
				<button onClick={() => goback() } className="absolute top-[8%] right-[8%] cursor-pointer font-bold text-black">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
					  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
					</svg>
				</button>
				<Cart items={items}/>
			</main>
		</>
		)
}