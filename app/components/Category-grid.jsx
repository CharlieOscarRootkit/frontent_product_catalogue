
import Link from 'next/link';
const Grid = () => {
  const Category = [
    {
      title:"",
      image:"https://source.unsplash.com/Nllx4R-2c3o"
    },
    {
      title:"",
      image:"https://source.unsplash.com/wfalq01jJuU"
    },
    {
      title:"",
      image:"https://source.unsplash.com/rMHNK_skwwU"
    },
      {
      title:"",
      image:"https://source.unsplash.com/WBMjuGpbrCQ"
    },
     {
      title:"",
      image:"https://source.unsplash.com/lp40q07DIe0"
    },
    {
      title:"",
      image:"https://images.unsplash.com/photo-1698434156086-918aa526b531"
    },
      {
      title:"",
      image:"https://source.unsplash.com/nCUZ5BYBL_o"
    },
    ]
  return (
    <section className="p-5 sm:p-8 flex justify-center align-center inline-flex">


    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-8 text-gray-700">

      {
        Category.map((item, idx) => (
          <CategoryCard image={item.image} title={item.title} key={idx} />
        ))
      }

    </div>

    </section>
  );
};

const CategoryCard = ({image,title,link,}) => {
// transform translate-y-[100%] group-hover:translate-y-[0%] duration-500
  return (
           <div className="inline-flex relative group overflow-hidden h-[300px]">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 dark:bg-opacity-0 group-hover:bg-black group-hover:bg-opacity-70 transition-all duration-300">
                  <div className="relative  w-full h-full  bg-black bg-opacity-10 p-4">
                      
                      <div className="absolute top-[10%] max-w-[70%] flex flex-col gap-3 inline-block">
                        <h2 className="  text-xl font-bold text-gray-900  font-bold roup-hover:text-white w-full">
                            {title || "GIRL"}
                          </h2>  
                          <hr class="border-t-8 border-yellow-500 relative bottom-2 w-[20%] group-hover:w-[10%] duration-300"/>


                        <p className="description transform translate-x-[-110%] group-hover:translate-x-[0] duration-300 text-white">
                            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        </p>
                      </div>  
                      
                      <div className="absolute inline-block bottom-0 right-0 min-w-[30%] transform translate-y-[100%] group-hover:translate-y-[0] duration-300 p-2 m-2">
                          <Button link={link || "cate"} text="Discover"/>
                          
                      </div>
                                      {/* Additional content or Button goes here */}
                  </div>
                  
                </div>
                <img
                  src={image}
                  className="w-full h-full object-cover"
                  alt="Your Image"
                />
              </div>
        )
}


const Button = ({ link, text }) => {
  return (
    
    <Link href={text} className="mr-5 group  inline-block flex items-center bg-yellow-500 px-8 py-4 font-semibold text-white transition [box-shadow:rgb(_255,_230,191)-8px_8px] hover:[box-shadow:rgb(255,_255,_191)_0px_0px] md:mr-6 lg:mr-8">
              <p className="mr-6 font-bold inline-block">{text}</p>
              <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className="flex-none w-5 h-5 block relative top-[2px] transition group-hover:left-[5px] duration-500 ease-in-out">
             
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
              </svg>
            </Link>
  );
  
}
export default Grid;