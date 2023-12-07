import {CategoryHero} from "../components/Hero.jsx"
import Product_grid from "../components/Product-list.jsx"
import Grid from "../components/Category-grid.jsx"
import Image from 'next/image';

function Categories() {
  return (
    <main className="dark:bg-gray-900/80">
      <CategoryHero />
       <Grid />
      <Product_grid />
    </main>  
  );
}

export default Categories;