"use client"
// Corrected import statement
import dynamic from 'next/dynamic';

import ThemeSwithcher from "./ThemeSwitcher";
import InnerButton from "./button/InnerCTA.jsx";
import { useState,useEffect } from 'react';
import Link from "next/link";
import Secondary from "./button/AltCTA.jsx"
import { CategoryLink, SubCategoryLink } from './CategoryLink.jsx';
import Search from "./Search.jsx"


const PNavbar = () => {


	const [isOpen, setIsOpen] = useState(false);
	const [menuOne, setMenuOne] = useState(false);
	const [isWideScreen, setIsWideScreen] = useState(false);


		useEffect(() => {
    // Function to update isWideScreen state
    const updateWindowDimensions = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };

    // Initial update
    updateWindowDimensions();

    // Add event listener for window resize
    window.addEventListener('resize', updateWindowDimensions);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, []); 


	// const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1024);

	// 	useEffect(() => {
	// 		const handleResize = () => {
	// 		  setIsWideScreen(window.innerWidth >= 1024);
	// 		};

	// 		// Attach the event listener when the component mounts
	// 		window.addEventListener('resize', handleResize);

	// 		// Clean up the event listener when the component unmounts
	// 		return () => {
	// 		  window.removeEventListener('resize', handleResize);
	// 		};
	// 	}, []); // Empty dependency array ensures that the effect runs only once on mount



	const handleClick = () => {
	    setIsOpen(!isOpen);
	    

	};
	const showDropdown = () => {
		setMenuOne(!menuOne)
	}

	const handleClickOutside = () => {
	    setMenuOne(false);
	};

	return (
							
		<header className="fixed w-full dark:bg-gray-900 bg-white light:border light:border-gray-300 shadow-md light:rounded-lg overflow-hidden light:backdrop-filter light:backdrop-blur-sm z-10">
		  <div className="h-auto w-screen">
		    {/* NAVBAR */}
		     <nav className="font-inter mx-auto h-auto w-full max-w-[1600px] lg:relative lg:top-0" data={{ isOpen, menuOne }}>
		      {/* CONTAINER */}
		      <div className="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20">
		        {/* SVG LOGO - YOU CAN REPLACE THIS */}
		        <Link href="/" className="">
		          <svg className="relative left-5 lg:inset-0" width="75" height="24" viewBox="0 0 75 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		            <path d="M7.256 18C12.344 18 15.848 14.424 15.848 9.264C15.848 4.032 12.272 0.456 7.088 0.456H0.944V18H7.256ZM6.8 3.288C10.424 3.288 12.608 5.544 12.608 9.264C12.608 12.912 10.472 15.168 6.968 15.168H4.016V3.288H6.8ZM23.5816 18.312C26.6776 18.312 28.8376 16.752 29.3416 14.16H26.6296C26.2936 15.288 25.2376 15.912 23.6296 15.912C21.6856 15.912 20.5816 14.856 20.3656 12.768L29.2936 12.744V11.856C29.2936 8.16 27.0376 5.784 23.4856 5.784C20.0056 5.784 17.5816 8.352 17.5816 12.072C17.5816 15.744 20.0536 18.312 23.5816 18.312ZM23.5096 8.184C25.2616 8.184 26.3896 9.264 26.3896 10.896H20.4376C20.7256 9.12 21.7816 8.184 23.5096 8.184ZM34.4814 18H37.3614L42.3054 6.144H39.2814L37.1214 11.592C36.6174 12.888 36.1854 14.136 36.0174 14.88C35.8734 14.232 35.4654 13.008 34.9614 11.592L32.8974 6.144H29.7774L34.4814 18ZM45.4526 3.768C46.4126 3.768 47.2286 2.976 47.2286 1.992C47.2286 1.008 46.4126 0.24 45.4526 0.24C44.4686 0.24 43.6766 1.008 43.6766 1.992C43.6766 2.976 44.4686 3.768 45.4526 3.768ZM41.1566 23.568C41.9246 23.784 42.3566 23.832 42.9086 23.832C45.4766 23.832 46.9166 22.2 46.9166 19.68V6.144H43.9886V19.344C43.9886 20.544 43.6526 21.12 42.6446 21.12C42.2846 21.12 42.0446 21.096 41.6366 20.976L41.1566 23.568ZM49.2457 12.048C49.2457 15.744 51.9097 18.288 55.5817 18.288C59.2537 18.288 61.9177 15.744 61.9177 12.048C61.9177 8.352 59.2537 5.808 55.5817 5.808C51.9097 5.808 49.2457 8.352 49.2457 12.048ZM52.1737 12.048C52.1737 9.888 53.5657 8.424 55.5817 8.424C57.5977 8.424 58.9897 9.888 58.9897 12.048C58.9897 14.208 57.5977 15.672 55.5817 15.672C53.5657 15.672 52.1737 14.208 52.1737 12.048ZM62.7613 23.496C63.4093 23.664 64.1293 23.76 64.9453 23.76C66.8893 23.76 68.1373 22.848 69.0253 20.64L74.8333 6.144H71.8093L68.5933 14.784L65.5453 6.144H62.4493L67.2253 18.504L66.8893 19.392C66.3853 20.784 65.6653 21.048 64.5133 21.048H62.7613V23.496Z" fill="black"></path>
		          </svg>
		        </Link>
		        {/* MENU CONTENT 1 */}
		       <div className={`mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${isOpen ? 'show' : 'hidden'}`}>
		          {/* DROPDOWN */}
		          <div className="relative flex flex-col">
		            <button className={`flex flex-row rounded-lg lg:px-6 lg:py-4 hover:text-yellow-500  dark:border-0 dark:hover:yellow-500 ${menuOne ? 'text-yellow-500 lg:border lg:border-yellow-600 lg:bg-gray-50 dark:text-yellow-500 dark:border-yellow-600 dark:bg-gray-800 ' : 'hover:text-yellow-500 lg:border lg:border-white'}`} onClick={showDropdown}>
				      Products
				      <svg className={`fill-current transition ${menuOne ? 'rotate-180' : 'rotate-0'}`} style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
				        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
				      </svg>
				    </button>
		            {/* DROP DOWN MENU ONE */}
		            
		             <div
				      className={`z-100 ${menuOne ? "flex fixed" : 'hidden'}  dark:bg-gray-900 dark:text-white  rounded-lg bg-white justify-center item-center w-screen h-screen left-0 lg:top-20 mt-5 lg:flex-row lg:flex-wrap lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] `}
				      
				      onClick={handleClickOutside}
				  	  >
				       {isWideScreen ? <MegaMenu /> : <DropDownMenu />}

				    </div>

		          </div>
		          <Link href="/categories" className="rounded-lg lg:px-6 lg:py-4 hover:text-yellow-500">Categories</Link>
		          <Link href="/services" className=" rounded-lg lg:px-6 lg:py-4 hover:text-yellow-500">Services</Link>
		          <Link href="/blog" className=" rounded-lg lg:px-6 lg:py-4 hover:text-yellow-500">Blog</Link>
		          <Link href="/faqs" className=" lg: rounded-lg pb-8 lg:px-6 lg:py-4 hover:text-yellow-500">FAQs</Link>
		         
		          <ThemeSwithcher  />
		                                
		        </div>
		        {/* MENU CONTENT 2 */}
		        <div className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 justify-evenly gap-2 ${isOpen ? 'show' : 'hidden'}`}>
		           <Link href="search" className="flex flex-col justify-center cursor-pointer">		          	
		          	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 font-bold">
								  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
								</svg>

		          </Link>
		          <Link href="/cart" className="flex flex-col justify-center cursor-pointer" >
		          	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
								  <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
								</svg>

		          </Link>
		          <Link href="sign-up" className="font-inter rounded-lg lg:px-6 lg:py-4 hover:text-yellow-500">Sign Up</Link>
		          <InnerButton text="login" link="/login"/>
		        </div>
		        {/* BURGER MENU */}
		          <Link href="#" className="absolute dark:font-white right-5 lg:hidden" onClick={handleClick}>
				      {

				      	isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 dark:text-white h-6">
  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
</svg>
) :(				      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>

) 
				      }

			      </Link>
		      </div>
		    </nav>
		  </div>
		</header>

		)
}





const Navbar = () => {

	
	return (
			<nav class="fixed w-full dark:bg-gray-900 bg-white light:border light:border-gray-300 shadow-md light:rounded-lg overflow-hidden light:backdrop-filter light:backdrop-blur-sm z-10">
		            <div class="container m-auto px-6 md:px-12 lg:px-7">
		                <div class="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0 relative">
		                    <input type="checkbox" name="toggle_nav" id="toggle_nav" class="peer hidden"/>
		                    <div class="w-full flex justify-between md:w-max md:px-0">
		                        <a href="#" aria-label="logo">
		                            <img src="https://tailus.io/sources/blocks/company-website/preview/images/logo.svg" class="w-36 grayscale dark:contrast-50 contrast-200" alt="tailus logo" width="144" height="68" />
		                        </a>

		                        <div class="flex items-center md:hidden max-h-10">
		                            <label role="button" for="toggle_nav" aria-label="humburger" id="hamburger" class="relative z-40 px-2 py-3 sm:-mr-6">
		                                <div id="line"
		                                    class="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
		                                <div id="line2"
		                                    class="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300">
		                                </div>
		                            </label>
		                        </div>
		                    </div>

		                    <label role="button" for="toggle_nav" class="fixed w-full z-30 h-full top-0 left-0 bg-gray-700 bg-opacity-40 hidden peer-checked:block md:peer-checked:hidden"></label>

		                    <div class="flex z-50 flex-col md:flex-row justify-between 
		                    items-center gap-y-4 p-6 bg-white dark:bg-gray-800 md:w-8/12 
		                    md:gap-y-4 md:p-0 
		                    md:bg-transparent lg:w-7/12 fixed top-0 -left-full transition-all duration-500 peer-checked:left-0 max-w-sm h-full 
		                    md:left-0 md:h-auto w-4/5 md:max-w-none md:relative lg:first-letter:top-0">
		                        <div class="flex md:hidden w-full pb-5">
		                            <a href="#" aria-label="logo">
		                                <img src="https://tailus.io/sources/blocks/company-website/preview/images/logo.svg" class="w-36 grayscale contrast-200" alt="tailus logo" width="144" height="68" />
		                            </a>
		                        </div>
		                        <div class="block w-full h-full md:h-auto">
		                            <ul class="space-y-8 tracking-wide font-medium md:flex md:space-y-0">
		                                <li>
		                                    <a href="#" class="block md:px-3">
		                                        <div class="relative text-yellow-800 dark:text-yellow-300
		                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800">
		                                            <span>Nike</span>
		                                        </div>
		                                    </a>
		                                </li>
		                                <li>
		                                    <a href="#" class="block md:px-3 group">
		                                        <div class="relative text-gray-600
		                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
		                                            <span class="transition group-hover:text-yellow-700 dark:text-gray-300 dark:group-hover:text-yellow-300">Adiddas</span>
		                                        </div>
		                                    </a>
		                                </li>
		                                <li>
		                                    <a href="#" class="block md:px-3 group">
		                                        <div class="relative text-gray-600
		                                                    before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yelloe-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
		                                            <span class="transition group-hover:text-yellow-700 dark:text-gray-300 dark:group-hover:text-yellow-300">Cart</span>
		                                        </div>
		                                    </a>
		                                </li>

		                                <li className="px-4">
		                                <ThemeSwithcher  />
		                                </li>
		                            </ul>
		                        </div>

		                        <div class="w-full gap-y-4 md:w-max md:gap-y-0 md:gap-x-4 flex md:flex-row flex-col pt-6">
		                            <button type="button" title="Start buying" class="group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
		                                <span class="block text-gray-700 dark:text-gray-300 font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
		                                    Login
		                                </span>
		                            </button>
		                            <InnerButton text="Join" link="/sign-up"/>

		                            
		                        </div>
		                    </div>
		                </div>
		            </div>

		        </nav>
                                    
		);
};



const MegaMenu = () => {


	const [menuTabcontent,setMenuTabContent] = useState([
	{
		name:"Home",
		content : "lmmdneon x onwdnoeneo",
		active:true,
		special_prod: {
	      brand: "Nike",
	      title: "Air Max Blue Shoes",
	      price: 129.99,
	      promo: 20, // 20% discount
	      image: "air_max_blue_shoes.jpg",
	    },
	      navigation_menu : [
			  {
			    clothing: {
			      sub: ["All see", "Shirts", "Jeans", "Skirts", "Lingerie", "Coats", "Pants", "Sweaters & Cardigans", "Dresses", "Sweatshirts & Hoodies", "Tops & T-shirts"]
			    }
			  }
		  ]
	},

	{
		name:"Else",
		content : "w;pillenld l,ldmeee",
		active:false,
		special_prod: {
	      brand: "Adidas",
	      title: "UltraBoost Black Sneakers",
	      price: 149.99,
	      promo: 30, // $30 discount
	      image: "ultraboost_black_sneakers.jpg",
    	},
    	  navigation_menu : [
			  {
			    clothing: {
			      sub: ["All see", "Shirts", "Jeans", "Skirts", "Lingerie", "Coats", "Pants", "Sweaters & Cardigans", "Dresses", "Sweatshirts & Hoodies", "Tops & T-shirts"]
			    }
			  }
		  ]
	},
	{
		name:"Here",
		content : "clnlferfom;qqw;mpc",
		active:false,
		special_prod: {
	      brand: "Puma",
	      title: "Ignite Running Shoes",
	      price: 79.99,
	      promo: 50, // 50% discount
	      image: "ignite_running_shoes.jpg",
	    },
	      navigation_menu : [
			  {
			    clothing: {
			      sub: ["All see", "Shirts", "Jeans", "Skirts", "Lingerie", "Coats", "Pants", "Sweaters & Cardigans", "Dresses", "Sweatshirts & Hoodies", "Tops & T-shirts"]
			    }
			  }
		  ]
	},{
		name:"There",
		content : "mvrepnnerqqwpncdoee",
		active:false,
		special_prod:{
	      brand: "New Balance",
	      title: "Fresh Foam White Sneakers",
	      price: 109.99,
	      promo: 20, // $20 discount
	      image: "fresh_foam_white_sneakers.jpg",
	    },
		  navigation_menu : [
			  {
			    clothing: {
			      sub: ["All see", "Shirts", "Jeans", "Skirts", "Lingerie", "Coats", "Pants", "Sweaters & Cardigans", "Dresses", "Sweatshirts & Hoodies", "Tops & T-shirts"]
			    }
			  }
		  ]
	}
	])
	const [currentNav,setTCurrentNav] = useState(menuTabcontent[0])
	const active_tailwind_code = "inline-block p-2 dark:text-yellow-300 text-yellow-700 border-b-2 border-yellow-700 dark:border-yellow-300 rounded-t-lg active"
	const not_active_tailwind_code = "inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-yellow-300 "

	const adjuctActiveTab = (e,index) => {
		e.stopPropagation();
		console.log(index)
		const new_tab_content = menuTabcontent.map((item,i) => {
			if(i === index){
				item.active = true
				setTCurrentNav(menuTabcontent[i])
				return item
			}else{
				item.active = false
				return item
			}
		})
		console.log(new_tab_content)
		setMenuTabContent(new_tab_content)
	}

	return (
		
		<div className="flex w-[100%]" id="mega-menu">
			<div className="grid grid-cols-4 gap-4 w-full h-[80%] overflow-scroll overflow-x-hidden">

			      <div className="col-span-3  p-4 flex flex-col gap-2">
			        <div className="text-sm font-bold text-center text-gray-500 border-b border-gray-200 w-full">
					    <ul class="flex border-1 border-gray-200 border-solid flex-row justify-around ">
							{
								menuTabcontent.map( (content,index) => (
										<li class="mr-2" onClick={(e) => adjuctActiveTab(e,index)} key={index}>
								            <span className={content.active ? active_tailwind_code+"cursor-pointer" : not_active_tailwind_code+"cursor-pointer"}>
								               	{content.name}
								            </span>
					        			</li>
									))

							}
					        
					    </ul>
					</div>
					<div className="p-4 w-full h-auto ">
						
						<NavCategoryPage currentNav={currentNav} />
							
						
					</div>
			      </div>

			      {/* Second child spanning the last column */}
			      <div className="col-span-1 p-2">
			      	{
			      		menuTabcontent.map(({active , special_prod}) => {
			      			return (
			      					<div className={`relative right-[5px] w-72 bg-white shadow-md rounded-xl duration-500  hover:shadow-xl ${active ? "flex": "hidden"}`}>
									  <Link href="#">
									    <img
									      src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
									      alt="Product" className="h-80 w-72 object-cover rounded-t-xl"
									    />
									    <div className="px-4 py-3 w-72 dark:bg-gray-900">
									      <span className="text-gray-400 mr-3 uppercase text-xs ">{special_prod.brand}</span>
									      <p className="text-lg font-bold text-black truncate block capitalize dark:text-white">{special_prod.title}</p>
									      <div className="flex items-center">
									        <p className="text-lg font-semibold text-black cursor-auto my-3 dark:text-white">{(special_prod.price - (special_prod.price * (special_prod.promo/100))).toFixed(2)}</p>
									        <del>
									          <p className="text-sm text-gray-500 cursor-auto ml-2">{special_prod.price}</p>
									        </del>
									        <div className="ml-auto">
									          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
									            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
									            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
									          </svg>
									        </div>
									      </div>
									    </div>
									  </Link>
									</div>
			      				)
			      		})
			      	}

			      </div>

		    </div>
		</div>

		)
}
const NavCategoryPage = ({ currentNav }) => {
  return (
    currentNav.name === "Home" 
      ? (
        <div className="flex w-full justify-center">
          
          	<ul className="flex flex-row  flex-wrap w-full">		
          				<div className="flex flex-col w-1/3 gap-2">
          					<CategoryLink category="FONCTIONNEL" slug="functionnel" />

          					<SubCategoryLink category="Pantalons de travail" slug="pantalons-de-travail" />
          					<SubCategoryLink category="Vestes de travail" slug="vestes-de-travail"/>
          					<SubCategoryLink category="tablier de travail" slug="tablier-de-travail"/>
          					<SubCategoryLink category="Pulls sweats polaires de travail" slug="pulls-sweats-polaires-de-travail" />
          					
          				</div>

          				
						<div className="flex flex-col gap-2 w-1/3">
						  <CategoryLink category="FASHION" slug="fashion" />
						  <SubCategoryLink category="Men's Clothing" slug="mens-clothing" />
						  <SubCategoryLink category="Women's Clothing" slug="womens-clothing" />
						  <SubCategoryLink category="Accessories" slug="accessories" />
						  <SubCategoryLink category="Shoes" slug="shoes" />
						  <SubCategoryLink category="Jewelry" slug="jewelry" />
						  <SubCategoryLink category="Handbags" slug="handbags" />
						</div>

						
						<div className="flex flex-col gap-2 w-1/3">
						  <CategoryLink category="ELECTRONICS" slug="electronics" />
						  <SubCategoryLink category="Laptops" slug="laptops" />
						  <SubCategoryLink category="Smartphones" slug="smartphones" />
						  <SubCategoryLink category="Headphones" slug="headphones" />
						  <SubCategoryLink category="Cameras" slug="cameras" />
						  <SubCategoryLink category="Tablets" slug="tablets" />
						  <SubCategoryLink category="Wearables" slug="wearables" />
						  <SubCategoryLink category="Accessories" slug="electronics-accessories" />
						</div>

						
						<div className="flex flex-col gap-2 w-1/3">
						  <CategoryLink category="OUTDOORS" slug="outdoors" />
						  <SubCategoryLink category="Camping Gear" slug="camping-gear" />
						  <SubCategoryLink category="Hiking Equipment" slug="hiking-equipment" />
						  <SubCategoryLink category="Fishing Supplies" slug="fishing-supplies" />
						  <SubCategoryLink category="Outdoor Clothing" slug="outdoor-clothing" />
						  <SubCategoryLink category="Tents" slug="tents" />
						  <SubCategoryLink category="Backpacks" slug="backpacks" />
						  <SubCategoryLink category="Survival Tools" slug="survival-tools" />
						</div>

						<div className="flex flex-col gap-2 w-1/3">
						  <CategoryLink category="FASHION" slug="fashion" />
						  <SubCategoryLink category="Men's Clothing" slug="mens-clothing" />
						  <SubCategoryLink category="Women's Clothing" slug="womens-clothing" />
						  <SubCategoryLink category="Accessories" slug="accessories" />
						  <SubCategoryLink category="Shoes" slug="shoes" />
						  <SubCategoryLink category="Jewelry" slug="jewelry" />
						  <SubCategoryLink category="Handbags" slug="handbags" />
						</div>
          	</ul>
          
        </div>
      )
      : currentNav.name === "Else"
        ? (
          <div className="flex w-full">
  <ul className="flex flex-row flex-wrap w-full">

    {/* ELECTRONICS Category */}
    <div className="flex flex-col gap-2 w-1/3">
      <CategoryLink category="ELECTRONICS" slug="electronics" />
      <SubCategoryLink category="Smartphones" slug="smartphones" />
      <SubCategoryLink category="Laptops" slug="laptops" />
      <SubCategoryLink category="Tablets" slug="tablets" />
      <SubCategoryLink category="Headphones" slug="headphones" />
      <SubCategoryLink category="Cameras" slug="cameras" />
      <SubCategoryLink category="Wearables" slug="wearables" />
      <SubCategoryLink category="Accessories" slug="electronics-accessories" />
      <SubCategoryLink category="TVs" slug="tvs" />
      <SubCategoryLink category="Drones" slug="drones" />
    </div>

    {/* More content for ELECTRONICS */}
    <div className="flex flex-col gap-2 w-1/3">
      <CategoryLink category="HIGH-TECH" slug="electronics" />
      <SubCategoryLink category="Smart TVs" slug="smart-tvs" />
      <SubCategoryLink category="Home Theater Systems" slug="home-theater-systems" />
      <SubCategoryLink category="Gaming Consoles" slug="gaming-consoles" />
      <SubCategoryLink category="Audio Speakers" slug="audio-speakers" />
      <SubCategoryLink category="Camera Accessories" slug="camera-accessories" />
      <SubCategoryLink category="Fitness Trackers" slug="fitness-trackers" />
      <SubCategoryLink category="Computer Monitors" slug="computer-monitors" />
      <SubCategoryLink category="Printers" slug="printers" />
    </div>

    {/* Another set of content for ELECTRONICS */}
    <div className="flex flex-col gap-2 w-1/3">
      <CategoryLink category="TECH" slug="electronics" />
      <SubCategoryLink category="External Hard Drives" slug="external-hard-drives" />
      <SubCategoryLink category="Wireless Chargers" slug="wireless-chargers" />
      <SubCategoryLink category="Smart Home Devices" slug="smart-home-devices" />
      <SubCategoryLink category="Graphic Cards" slug="graphic-cards" />
      <SubCategoryLink category="Networking Equipment" slug="networking-equipment" />
      <SubCategoryLink category="Virtual Reality Headsets" slug="virtual-reality-headsets" />
      <SubCategoryLink category="Computer Accessories" slug="computer-accessories" />
    </div>

  </ul>
</div>

        )
        : (
          <div className="">
            hello_p
          </div>
        )
  );
};

const DropDownMenu = () => {
  return (
    <div className="" onClick={(e) => e.stopPropagation()}>
   
   </div>

  );
};



export {PNavbar, Navbar}