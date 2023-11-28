import Link from 'next/link';

const Button = ({ link, text }) => {
  return (
    <Link href={link} className="block md:px-3 group bg-gray-800 dark:bg-black p-4 inline-block">
      <button className="relative text-white before:absolute before:-inset-2 before:w-full before:h-0.5 before:origin-left dark:before:bg-yellow-500 before:mx-auto before:mt-auto before:rounded-full before:bg-yellow-800 before:transition before:scale-x-0 group-hover:before:scale-x-100 transition duration-300 ease-in-out">
        <span className="transition group-hover:text-yellow-700 dark:text-gray-300 dark:group-hover:text-yellow-300 flex flex-row font-bold gap-4">
          {text}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 block relative top-[2px] transition group-hover:left-[5px] duration-500 ease-in-out">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
    </Link>
  );
};


export default Button;