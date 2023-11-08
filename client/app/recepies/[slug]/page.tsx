import PrintButton from '@/components/PrintButton'
import PrintButton2 from '@/components/PrintButton2'
import SaveButton from '@/components/SaveButton'
import Star from '@/components/Star'
import React from 'react'
import { AiFillCheckCircle, AiOutlineStar } from 'react-icons/ai'

import { IoMdShareAlt } from 'react-icons/io'

async function getData(a: string) {
  const res = await fetch(`http://localhost:4000/api/recipe/${a}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Page = async ({ params }: { params: { slug: string } }) => {

  const data: recipeType = await getData(params.slug)
  const { _id: recipeId, author, cookTimeMinutes, coverImage, description, ingredients, prepTimeMinutes, rating, serving
    , steps, title, nutritions, youtubeId } = data


  return (
    <div className='w-[80%] mx-auto'>
      <h2 className='text-3xl font-bold mt-10'>{title}</h2>
      <div className='flex items-center gap-x-4'>
        <div className='flex gap-x-2 items-center'>
          <Star rating={rating} />
        </div>
        <span className='text-xs border border-b border-b-red-600 font-semibold'>{rating}</span>
        <span className='text-xs border border-b border-b-red-600 uppercase font-bold'>2 Reviews</span>
        <span className='text-xs border border-b border-b-red-600 uppercase font-bold'>1 Photos</span>
      </div>
      <p className='mt-2 w-1/2'>{description}</p>

      <p className='text-sm mt-2'>
        By{" "}
        <span className='font-bold border-b border-b-red-600 '>{author}</span>
        <span className='text-gray-400 text-xs ml-3'>Updated On Jun 27, 2023</span>
      </p>

      <p className='text-sm mt-2 flex items-center'>
        <AiFillCheckCircle className='text-green-600 text-sm mr-2' />
        Tested by
        <span className='font-bold border-b border-b-red-600 ml-2'>Food Recepies</span>
      </p>

      <div className='flex items-center mt-4'>
        <SaveButton recipeId={recipeId} />

        <button className='hover:underline bg-gray-100  px-6 py-4 text-sm rounded-sm font-bold'>
          Rate
          <AiOutlineStar
            className='inline ml-2 text-red-500'
            size={20}
          />
        </button>

        <PrintButton />

        <button className='hover:underline bg-gray-100  pr-6 py-4 text-sm rounded-sm font-bold'>
          <span className='border-black border-l pl-6'>Share</span>
          <IoMdShareAlt
            className='inline ml-2 text-red-500'
            size={20}
          />
        </button>
      </div>
      {
        youtubeId &&
        <iframe
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeId}?controls=1`}
          className='mt-10 w-1/2'
        >
        </iframe>
      }


      <img src={coverImage[0] ?? "https://www.allrecipes.com/thmb/53SMspkec_Suf9NLSMRucREQyTU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7497387-chickpea-tikka-masala-ddmfs_4x3_1791-e0838138030a4b55ac7340027bc2b47f.jpg"}
        alt=""
        className='w-1/2 mt-5 '
      />

      <div className='mt-10 flex items-center flex-wrap bg-gray-200 rounded-md  w-1/2 gap-y-4 px-4 py-4 font-bold'>
        <div className='w-1/3'>
          <p>Prep Time:</p>
          <p className='font-normal'>{prepTimeMinutes} mins</p>
        </div>
        <div className='w-1/3'>
          <p className=''>Cook Time:</p>
          <p className='font-normal'>{cookTimeMinutes} mins</p>
        </div>
        <div className='w-1/3'>
          <p className=''>Total Time:</p>
          <p className='font-normal'>{prepTimeMinutes + cookTimeMinutes} mins</p>
        </div>
        <div className='w-1/3'>
          <p className=''>Serving:</p>
          <p className='font-normal'>{serving}</p>
        </div>
      </div>

      <p className='mt-10 font-bold text-2xl'>Ingredients</p>
      <ul className='list-disc ml-4 marker:text-red-400 list-outside w-1/2'>
        {ingredients.map((ingredient: any) => <li className='py-2' key={ingredient?._id}>{ingredient?.qty}{" "}{ingredient?.unit}{" "}{ingredient?.name}.{" "}{ingredient?.note}</li>)}
      </ul>

      <p className='mt-10 font-bold text-2xl'>Directions</p>

      {
        steps.map((step: any, index: number) => <>
          <p className='mt-10 font-bold w-1/2'>Step {index + 1}:-{" "}{step?.title}</p>

          <p className='mt-3 w-1/2'>{step?.description}</p>
          <img src={step?.image[0] ?? "https://www.allrecipes.com/thmb/lf56yDXykbAFIYvRtwfpGYRbFr4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7497387-chickpea-tikka-masala-ddmfs-step-1-1752-b6d361881b5148f29f99cd09bde68424.jpg"}
            alt=""
            className='mt-4 w-1/2'
          />
        </>)
      }

      <div className='mt-10 flex items-center w-1/2 gap-x-4'>
        <button className='w-1/2 bg-red-500 text-white py-3 rounded-md uppercase text-sm font-semibold hover:bg-red-600'>
          I Made it
        </button>

        <PrintButton2 />
      </div>

      <p className='mt-10 font-bold text-2xl'>Nutritions</p>



      <div className='flex items-center w-1/2 justify-between mt-5 bg-gray-200 p-4 rounded-md'>
        {nutritions?.map((nutrition: any, index: number) => <div className='' key={index}>
          <p className='font-bold'>{nutrition?.value}{" "}{nutrition?.unit}</p>
          <p className='mt-4'>{nutrition?.name}</p>
        </div>)}
      </div>
      <p className='mt-5 border-b border-red-500 mb-10 inline-block'>Show full nuterition label</p>
    </div>
  )
}

export default Page


type recipeType = {
  _id: string,
  title: string,
  rating: 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5,
  author: string,
  coverImage: string[],
  description: string,
  prepTimeMinutes: number,
  cookTimeMinutes: number,
  serving: number,
  ingredients: [
    {
      qty: string,
      unit: string,
      name: string,
      note: string,
      _id: string
    }
  ],
  steps: [
    {
      no: string,
      title: string,
      image: any,
      description: string,
      _id: string
    }
  ],
  nutritions?: [
    {
      name: string,
      value: number,
      unit: string
    }
  ],
  youtubeId?: string

}