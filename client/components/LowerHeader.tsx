import Link from 'next/link'
import React from 'react'

const LowerHeader = () => {
    return (
        <div className="bg-[#186F65] w-full text-white py-1 text-sm px-10">
            <Link href="/addrecipe">
                <span className="uppercase hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer">Add Recipe +</span>
            </Link>
        </div>
    )
}

export default LowerHeader
