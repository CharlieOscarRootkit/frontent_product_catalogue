import Link from "next/link"

const Button = ({link,text}) => {
    return (
        <Link href={link} type="button" title="Start buying" class="inline-block group w-full py-3 px-6 text-center transition dark:active:bg-yellow-800 dark:focus:bg-yellow-900 active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                                        <span class="inline-block block text-gray-700 dark:text-white font-semibold group-focus:text-yellow-700 dark:group-focus:text-yellow-100">
                                            {text}
                                        </span>
                                    </Link>
            )
}


export default Button