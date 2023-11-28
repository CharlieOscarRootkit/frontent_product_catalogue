"use client"
import React from 'react';


const ModalComponent = () => {
  return (
    <>
      {/* This is the background that overlays when the modal is active. It has opacity, and that's why the background looks gray. */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <span className="hidden sm:inline-block sm:align-middle sm:" aria-hidden="true">​</span>
      {/* Modal panel: This is where you put the pop-up's content, the div on top this comment is the wrapper */}

      <div className="inline-block overflow-hidden  align-bottom transition-all transform bg-white rounded-lg shadow-2xl lg:p-16 sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
      
       <form class="flex flex-col md:flex-row gap-2 justify:center">
          	    <div class="flex">
          	        <input type="text" placeholder="Search for the tool you like"
          				class="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
          				/>
          	        <button type="submit" class="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          </button>
          	    </div>
          	 <select id='pricingType' name='pricingType' class='inline-block max-w-min h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider'>
              <option value='All' selected>All</option>
              <option value='Freemium'>Freemium</option>
              <option value='Free'>Free</option>
              <option value='Paid'>Paid</option>
            </select>
    	</form>
        
      </div>
    </>
  );
};

export default ModalComponent;