import Tooltip from "../components/Tooltip"
import Cart from "../components/ecom/Cart.jsx"
export default function AboutUs(){
		const items = [
  { id: 1, name: "Slim Fit Jeans", price: 39.99, quantity: 2 ,img:"https://via.placeholder.com/150"},
  { id: 2, name: "Cotton T-Shirt", price: 15.5, quantity: 3 , img:"https://via.placeholder.com/150"},
  { id: 3, name: "Running Shoes", price: 79.99, quantity: 1 , img:"https://via.placeholder.com/150"},
  { id: 4, name: "Leather Wallet", price: 29.75, quantity: 2 , img:"https://via.placeholder.com/150"},
  { id: 5, name: "Hooded Sweatshirt", price: 45.0, quantity: 1 , img:"https://via.placeholder.com/150"},
]
return(

		<> 
			<main className="flex min-h-screen flex-col items-center justify-between py-24">
				this is the about us page 
				<Cart items={items}/>
			</main>
		</>
		)
}