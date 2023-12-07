import Link from "next/link"

const Button = ({link,text}) => {
    return (
        <Link href={text} className="mr-5 group  inline-block flex items-center px-8 py-4 font-semibold text-black dark:text-white border-b border-color-black md:mr-6 lg:mr-8">
              <p className="mr-6 font-bold inline-block">{text}</p>
              <svg fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg" className="flex-none w-5 h-5 block relative top-[2px] transition group-hover:left-[5px] duration-500 ease-in-out">
             
                <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
              </svg>
            </Link>
            )
}


export default Button