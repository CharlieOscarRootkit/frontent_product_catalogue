"use client"

import React, { useState } from 'react';
import InnerButton from "../button/InnerCTA.jsx"

const Cart = ({ items }) => {
  const [cartItems, setCartItems] = useState(items);

  const incrementQuantity = (index) => {
  // Create a copy of the current cartItems array
  const updatedCartItems = [...cartItems];

  // Increment the quantity of the item at the specified index
  updatedCartItems[index].quantity += 1;

  // Update the state with the new array
  setCartItems(updatedCartItems);
}

const decrementQuantity = (index) => {
  // Create a copy of the current cartItems array
  const updatedCartItems = [...cartItems];

  // Check if the quantity is greater than 1 before decrementing
  if (updatedCartItems[index].quantity > 1) {
    // Decrement the quantity of the item at the specified index
    updatedCartItems[index].quantity -= 1;

    // Update the state with the new array
    setCartItems(updatedCartItems);
  }
}

const deleteItem = (index) => {
	const updatedCartItems = cartItems.filter((item, idx) => idx !== index);
	setCartItems(updatedCartItems);

}



	return (
		<div class="bg-gray-100 dark:bg-gray-900 w-screen h-screen py-8">
		    <div class="container mx-auto px-4">
		        <h1 class="text-2xl font-semibold mb-4">Shopping Cart</h1>
		        <div class="flex flex-col md:flex-row gap-4">
		            <div class="md:w-3/4">
		                <div class="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 mb-4">
		                    <table class="w-full">
		                        <thead className = "flex flex-col justify-between">
		                            <tr className = "flex flex-row justify-between items-center">
		                                <th class="text-center font-semibold">Product</th>
		                                <th class="text-center font-semibold">Price</th>
		                                <th class="text-center font-semibold">Quantity</th>
		                                <th class="text-center font-semibold">Total</th>
		                                <th class="text-center font-semibold"></th>
		                            </tr>
		                        </thead>

		                        <tbody className = "flex flex-col justify-between">
		                        	{
		                           	cartItems.map((item,idx) => <CartItem content={item} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} deleteItem={deleteItem} index={idx} key={item.id}/> )
		                           	
		                           }
		                            {/*More product rows*/}
		                        </tbody>
		                    </table>
		                </div>
		            </div>
		            <div class="md:w-1/4">

		                	<Summary cartItems={cartItems}/>
		            </div>
		        </div>
		    </div>
		</div>
		)
}

const CartItem = ({content,index,incrementQuantity,decrementQuantity,deleteItem }) => {
	return (
			<>
				<hr class="mt-2 px-4 border border-gray-200"/>
				<tr className = "flex flex-row justify-between text-md">	
		                                <td class="py-4 flex items-center">
		                                    <div class="flex items-center">
		                                        <img class="h-16 w-16 mr-4" src={content.img} alt="Product image" />
		                                        <span class="font-semibold">{content.name}</span>
		                                    </div>
		                                </td>
		                                <td class="py-4  flex items-center "> $ {content.price}</td>
		                                <td class="py-4 flex items-center">
		                                    <div class="flex items-center">
		                                        <button class="border rounded-md cursor-pointer" onClick={() => {decrementQuantity(index)}}>
		                                        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
													  <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
													</svg>

		                                        </button>
		                                        <span className="px-2">
		                                        	{content.quantity}
		                                        </span>
		                                        <button class="border rounded-md cursor-pointer" onClick={() => {incrementQuantity(index)}}>
		                                        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
													  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
													</svg>

		                                        </button>
		                                    </div>
		                                </td>
		                                <td class="py-4 flex items-center"> $ {(content.price * content.quantity).toFixed(2)}</td>
		                                <td class="py-4 flex items-center"><svg onClick={() => deleteItem(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 cursor-pointer">
  <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
</svg>
</td>

		     </tr>
			</>
			

		)
}

const  Summary = ({cartItems}) => {
	const taxes = 1.99;

const calculateSubtotal = () => {
  var subtotal = 0;
  for (var i = 0; i < cartItems.length; i++) {
    let u_sub_total = cartItems[i].quantity * cartItems[i].price;
    subtotal += u_sub_total;
  }
  return subtotal;
}

const Total = () => {
  // Remove the 'taxes' parameter here
  return calculateSubtotal() + taxes;
}



	return (
						<div class="bg-white dark:bg-gray-900  rounded-lg shadow-md p-6 flex flex-col justify-center text-center">
		                    <h2 class="text-lg font-semibold mb-4">Summary</h2>
		                    <div class="flex justify-between mb-2">
		                        <span>Subtotal</span>
		                        <span>$ {calculateSubtotal().toFixed(2)}</span>
		                    </div>
		                    <div class="flex justify-between mb-2">
		                        <span>Taxes</span>
		                        <span>$ {taxes}</span>
		                    </div>
		                    <div class="flex justify-between mb-2">
		                        <span>Shipping</span>
		                        <span>$0.00</span>
		                    </div>
		                    <hr class="my-2" />
		                    <div class="flex justify-between mb-2">
		                        <span class="font-semibold">Total</span>
		                        <span class="font-semibold">$ {Total().toFixed(2)}</span>
		                    </div>
		                    <InnerButton  text="Checkout" link="/check-out" />
		                </div>
		)
}

export default Cart;