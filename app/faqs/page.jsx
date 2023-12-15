import Link from "next/link"
import Button from "../components/button/InnerCTA.jsx"
import {fetchFaqs} from "../../utils/strapi.js"

export default async function FAQs(){

   console.log("fetching faqs")
   let faqs = await fetchFaqs();
    


    if (faqs == false){
      return null; // Return null or handle the error as needed
    }

    faqs = faqs.data.map((faq) => {
      return {
        question : faq.attributes.question,
        answer : faq.attributes.answer
      }
    })

    console.log(faqs);

	const questionsAnswers = faqs
	return (

<main className="dark:bg-gray-900/80">
  
  <div class="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
    <div class="flex flex-col items-start lg:flex-row lg:space-x-20">

     <div className="flex-[1_1_500px] max-[991px]:w-full max-[991px]:flex-none dark:bg-gray-900 bg-gray-100 p-6" >
		  <div className="max-w-3xl mb-8 md:mb-12 lg:mb-16">
		    <h2 className="font-bold text-3xl md:text-5xl dark:text-white">General FAQs</h2>
		    <div className="mt-4 max-w-[528px]">
		      <p className="text-[#636262] max-[479px]:text-sm dark:text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
		    </div>
		  </div>
		  <div className="mb-6 h-full w-full overflow-auto dark:bg-gray-800 bg-[#f2f2f7] p-8 rounded-sm">
		    <div className="flex flex-row gap-4">
		      <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64772e4ec124557640300fd8_Column.png" alt="" className="inline-block h-12 w-12 object-cover rounded-full" />
		      <div className="flex flex-col gap-1.5">
		        <h5 className="text-xl font-bold dark:text-white">Still have questions?</h5>
		        <div className="max-w-[380px]">
		          <p className="text-[#636262] max-[479px]:text-sm dark:text-white">Can’t find the answer you’re looking for? Please chat to lorem</p>
		        </div>
		      </div>
		    </div>
		    <hr className="mb-6 mt-8 h-[0.5px] w-full bg-[#a6a6a6]" />
        <div className="w-[57%] self-center">
          <Button text="Get in touch" link="contact-us"/>
        </div>
		    
		  </div>
	</div>
    
      <div class="flex-[1_1_500px] max-[991px]:w-full max-[991px]:flex-none">
    
    { questionsAnswers.map((item,index) => {return(
         <div class="mb-6 w-full overflow-hidden bg-[#f2f2f7] p-8 rounded-sm dark:bg-gray-900 transition-opacity duration-300 ease-in-out" key={index}>
  <details class="flex cursor-pointer items-start justify-between">
    <summary class="text-xl font-bold py-4">{item.question}</summary>
    <p class="max-[479px]:text-sm px-8">{item.answer}</p>
  </details>
</div>
)}
         )}

      {/*  <div class="mb-6 w-full overflow-hidden bg-[#f2f2f7] p-8 rounded-sm">
          <div class="flex cursor-pointer items-start justify-between">
            <p class="text-xl font-bold">How can I contribute to Flowspark?</p>
            <div class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
              <div class="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
              <div class="h-0.5 w-5 bg-[#0b0b1f]"></div>
            </div>
          </div>
          <div class="w-full overflow-hidden mb-4 max-w-[640px] lg:max-w-[960px]">
            <p class="max-[479px]:text-sm">Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.</p>
          </div>
        </div>

        <div class="mb-6 w-full overflow-hidden bg-[#f2f2f7] p-8 rounded-sm">
          <div class="flex cursor-pointer items-start justify-between">
            <p class="text-xl font-bold">What other themes do you have?</p>
            <div class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
              <div class="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
              <div class="h-0.5 w-5 bg-[#0b0b1f]"></div>
            </div>
          </div>
          <div class="w-full overflow-hidden mb-4 max-w-[640px] lg:max-w-[960px]">
            <p class="max-[479px]:text-sm">Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.</p>
          </div>
        </div>

        <div class="mb-6 w-full overflow-hidden bg-[#f2f2f7] p-8 rounded-sm">
          <div class="flex cursor-pointer items-start justify-between">
            <p class="text-xl font-bold">What is your policy on distributon</p>
            <div class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
              <div class="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
              <div class="h-0.5 w-5 bg-[#0b0b1f]"></div>
            </div>
          </div>
          <div class="w-full overflow-hidden mb-4 max-w-[640px] lg:max-w-[960px]">
            <p class="max-[479px]:text-sm">Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.</p>
          </div>
        </div>*/}
      </div>
    </div>
  </div>
</main>
		)
}