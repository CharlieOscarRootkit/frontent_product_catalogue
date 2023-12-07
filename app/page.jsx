import Image from 'next/image'
import {HeroSection} from "./components/Hero.jsx"
import { ContentOne, ContentTwo } from "./components/Content.jsx";
import Steps from "./components/Steps.jsx"
import {Services,Card} from "./components/Services.jsx"
import {CTA} from "./components/CTA"
import Features from "./components/Features.jsx"
import About from "./components/AboutSec"
import {ProductTypeHero,ProductTypeHeroTwo} from "./components/Hero.jsx"
import Product_grid from "./components/Product-list.jsx"
import Newsletter from "./components/Newsletter.jsx"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 dark:bg-gray-900/80 font-poppins">
        <HeroSection />
        <ProductTypeHero />
        <Product_grid />
        <ProductTypeHeroTwo/>
        <Product_grid />
        <Newsletter />
    </main>
  )
}
