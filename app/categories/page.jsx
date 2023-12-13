import {CategoryHero} from "../components/Hero.jsx"
import Product_grid from "../components/Product-list.jsx"
import Grid from "../components/Category-grid.jsx"
import Image from 'next/image';

import {fetchCategoriesAll,fetchCategories,fetchSingleCategory} from "../../utils/strapi.js"

async function Categories() {
    
    const data = await fetchCategoriesAll();
    console.log(data);


    if (data == false){
      return null; // Return null or handle the error as needed
    }

    const categories = data.data

  return (
    <main className="dark:bg-gray-900/80">
      <CategoryHero />
       <Grid categories={categories}/>
      <Product_grid />
    </main>  
  );
}

export default Categories;