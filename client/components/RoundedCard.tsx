import React from 'react'
type propTypes = {
    imgSrc?: string
}
const RoundedCard = ({ imgSrc }: propTypes) => {
    return (
        <div className='cursor-pointer hover:scale-[105%] transition-all ease-in-out duration-300  w-[200px] h-[200px] rounded-full  overflow-hidden bg-[#e9e3e398] mx-auto'>
            <img
                src={imgSrc || "https://www.simplyrecipes.com/thmb/81UjC9ljMTHPewwA4QX1OKJFNxQ=/390x260/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Shakshuka-Feta-Olives-LEAD-6-f93bec449f724b3fbba07dbe6ecdfc56.jpg"}
                className="w-full h-full object-cover"
                alt=""
            />
        </div>
    )
}

export default RoundedCard
