
import Link from "next/link";

const CategoryLink = ({ category, slug }) => {
  return (
    <li className="font-bold text-xl">
      <Link href={slug} className="hover:text-yellow-500 inline-block">{category}</Link>
    </li>
  );
};

const SubCategoryLink = ({ category, slug }) => {
  return (
    <li className="text-md flex flex-row gap-2 ">
	    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
		  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
		</svg>
	    <Link href={slug} className="hover:text-yellow-400 hover:pl-1 inline-block">{category}</Link>
    </li>
  );
};

export { CategoryLink, SubCategoryLink };
// export default CategoryLink
