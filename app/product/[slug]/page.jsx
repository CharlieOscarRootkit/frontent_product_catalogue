import Tooltip from "../../components/Tooltip"
import Product from "./components/Product.jsx"
import Product_grid from "../../components/Product-list.jsx"
import Tabulation from "./components/Tabulation.jsx"
import { notFound } from 'next/navigation'

export default async function  ProductItem(){
	let ProductInfo
	try{
		 ProductInfo = await getSingleProduct(2)
		ProductInfo = ProductInfo.data
		console.log(ProductInfo)
	}catch(err){
		console.log(err)
		return notFound()

	}




	return (
		<> 
				<Product attributes={ProductInfo.attributes} id={ProductInfo.id}/>
				<Tabulation attributes={ProductInfo.attributes}/>
				<h2 className="font-bold text-3xl md:text-4xl lg:text-6xl p-8 text-left text-2xl font-bold text-gray-800 dark:text-white mb-2">Similar products</h2>
				<Product_grid />
				{/*<Tooltip />*/}
		</>
		)
}

const getSingleProduct = async (id) => {
  const baseURL = "http://localhost:1337/api";
  const fullURL = `${baseURL}/products/${id}?populate=*`;

  console.log(`/--------------------------------- ${fullURL} -------------------------/`);

  try {
    const res = await fetch(fullURL, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-store, max-age=0', // Prevent caching
      },
    });

    console.log(res);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      console.log("/------------------ Error, while fetching ---------------------/");
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};


const listOfProducts = async() => {}