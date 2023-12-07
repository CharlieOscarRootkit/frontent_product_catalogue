
import {HeroSectionTwo} from "../components/Hero.jsx"

import {CTATwo} from "../components/CTA.jsx"
import Link from "next/link"
import Image from "next/image"
import  Button from "../components/button/InnerCTA.jsx"

export default function Pages(){
	return (
		
			<main className="flex min-h-screen flex-col items-center justify-between py-24 dark:bg-gray-900/80">
				<HeroSectionTwo />
				<Services />
				<FeaturesSection />
				<ContactSection />
			</main>
		
		)
}


const ServiceCard = ({image}) => {
	return (

		  <Link href="#" className="flex flex-col gap-4 w-[320px] h-auto rounded-2xl border border-solid border-[#b1b1b1] bg-[#f5f8ff] p-6 font-bold text-black transition hover:[box-shadow:rgba(236,_201,_75,_1)_7px_7px]">
              <img src={image} alt="" className="inline-block h-60 w-full object-cover" />
              <div className="w-full pt-4">
                <p className="mb-4 text-xs font-semibold uppercase text-[#636262] h-[6px] w-1/2 bg-yellow-500"></p>
                <p className="mb-4 text-2xl font-semibold">The latest news with Flowspark</p>
                <p className="mb-5 font-normal text-[#636262] text-md lg:mb-8">Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis</p>
                
                  <div className="flex flex-col items-center">
                    <div className="flex inline-block">
                      <Button text={"LEARN MORE"} link={"more"}/>
                    </div>
                  </div>
                
              </div>
            </Link>
		);
}

const Services = ({Services}) => {
	const services = ["https://img.freepik.com/photos-gratuite/concept-etat-financier-evaluation-conformite-audit_53876-167135.jpg","https://img.freepik.com/photos-gratuite/vue-dessusvue-dessus-du-gestionnaire-employe-faisant-travail-equipe-dans-bureau-affaires-regardant-graphiques-ecran-ordinateur-portable_482257-2443.jpg","https://img.freepik.com/photos-gratuite/groupe-diversifie-personnes-travaillant-equipe-pour-planifier-analyse-ventes-rechercher-documents-graphiques-statistiques-dans-bureau-entreprise-collegues-reflechissent-idees-pour-developper-expertise_482257-37406.jpg"]
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="flex flex-col items-center">
          {/* Heading Div */}
          <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-semibold md:text-5xl">The latest and greatest <span className="bg-cover bg-center px-4 text-white" style={{ backgroundImage: "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')" }}>news</span></h2>
            <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">Lorem ipsum dolor sit amet elit ut aliquam</p>
          </div>
          {/* Blog Div */}
          <div className="mb-6 grid grid-cols-1 justify-items-center gap-8 sm:justify-items-stretch md:mb-10 md:grid-cols-3 md:gap-4 lg:mb-12">
            {/* Blog Item */}
            {
            	services.map((image,idx) => <ServiceCard image={image} />)	
            }

            {/* Add similar blocks for other blog items */}
          </div>
        </div>
      </div>
    </section>
  );
};



const FeaturesSection = () => {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Title */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Make every step user-centric</h2>
          <p className="mb-8 mt-4 max-w-xl text-base text-[#636262] md:mb-12 md:text-lg lg:mb-16">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet luctus magna fringilla urna</p>
        </div>
        {/* Features Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" alt="" className="inline-block h-16" />
            <h3 className="text-xl font-semibold">Support</h3>
            <p className="text-md text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
          </div>
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" alt="" className="inline-block h-16" />
            <h3 className="text-xl font-semibold">Organise</h3>
            <p className="text-md text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
          </div>
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" alt="" className="inline-block h-16" />
            <h3 className="text-xl font-semibold">Flexibility</h3>
            <p className="text-md text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
          </div>
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" alt="" className="inline-block h-16" />
            <h3 className="text-xl font-semibold">Speed</h3>
            <p className="text-md text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
          </div>
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" alt="" className="inline-block h-16" />
            <h3 className="text-xl font-semibold">Quality</h3>
            <p className="text-md text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
          </div>
          {/* Features Item */}
          <div className="grid gap-6 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a945e53e6cf8f_Ellipse%2011%20(1).svg" alt="" className="inline-block h-16" />
            <h3 className="text-xl font-semibold">Resource</h3>
            <p className="text-md text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};


const ContactSection = () => {
  return (
    	<div class=" py-6 sm:py-8 lg:py-12">
		  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		    <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
		      
		      <div class="order-first h-[50%] w-full bg-gray-300 dark:bg-gray-900 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5 flex justify-center align-center">
	    	       <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			    	  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
		    		</svg>
		      </div>
		      <div class="flex w-full flex-col p-6 sm:w-1/2 sm:p-8 lg:w-3/5 justify-center">
		       <div className="h-[60%]">
			        <p class="mb-8 max-w-md text-xl text-gray-600"> Have questions? Click here to contact us for answers and assistance.</p>

			        <div class="mt-auto flex justify-center ">
			          <Button text={"Contact Us"} link={"/contact-us"}/>
			        </div>
			     </div>   
		      </div>
		      
		    </div>
		  </div>
		</div>
		);
};





