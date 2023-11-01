import Star from '@/components/Star'
import React from 'react'
import { AiFillCheckCircle, AiOutlineStar, AiFillPrinter } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import { IoMdShareAlt } from 'react-icons/io'


const Page = () => {
  return (
    <div className='w-[80%] mx-auto'>
      <h2 className='text-3xl font-bold mt-10'>Chickpea Tikka Masala</h2>
      <div className='flex items-center gap-x-4'>
        <div className='flex gap-x-2 items-center'>
          <Star rating={4.5} />
        </div>
        <span className='text-xs border border-b border-b-red-600 font-semibold'>4.5</span>
        <span className='text-xs border border-b border-b-red-600 uppercase font-bold'>2 Reviews</span>
        <span className='text-xs border border-b border-b-red-600 uppercase font-bold'>1 Photos</span>
      </div>
      <p className='mt-2 w-1/2'>Chickpea tikka masala is a classic Indian curry where chickpeas are cooked in a flavorful creamy sauce. Serve over basmati rice or with naan.</p>

      <p className='text-sm mt-2'>
        By{" "}
        <span className='font-bold border-b border-b-red-600 '>Surabh Brekke</span>
        <span className='text-gray-400 text-xs ml-3'>Updated On Jun 27, 2023</span>
      </p>

      <p className='text-sm mt-2 flex items-center'>
        <AiFillCheckCircle className='text-green-600 text-sm mr-2' />
        Tested by
        <span className='font-bold border-b border-b-red-600 ml-2'>Food Recepies</span>
      </p>

      <div className='flex items-center mt-4'>
        <button className='hover:underline bg-red-500 text-white px-6 py-4 text-sm rounded-sm font-bold'>
          Save
          <FaRegHeart
            className='inline ml-2'
            size={20}
          />
        </button>

        <button className='hover:underline bg-gray-100  px-6 py-4 text-sm rounded-sm font-bold'>
          Rate
          <AiOutlineStar
            className='inline ml-2 text-red-500'
            size={20}
          />
        </button>

        <button className=' hover:underline bg-gray-100 pr-6 py-4 text-sm rounded-sm font-bold'>
          <span className=' border-black border-l pl-6'>Print</span>
          <AiFillPrinter
            className='inline ml-2 text-red-500'
            size={20}
          />
        </button>

        <button className='hover:underline bg-gray-100  pr-6 py-4 text-sm rounded-sm font-bold'>
          <span className='border-black border-l pl-6'>Share</span>
          <IoMdShareAlt
            className='inline ml-2 text-red-500'
            size={20}
          />
        </button>
      </div>

      <img src="https://www.allrecipes.com/thmb/53SMspkec_Suf9NLSMRucREQyTU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7497387-chickpea-tikka-masala-ddmfs_4x3_1791-e0838138030a4b55ac7340027bc2b47f.jpg"
        alt=""
        className='w-1/2 mt-5 '
      />

      <div className='mt-10 flex items-center flex-wrap bg-gray-200 rounded-md  w-1/2 gap-y-4 px-4 py-4 font-bold'>
        <div className='w-1/3'>
          <p>Prep Time:</p>
          <p className='font-normal'>15 mins</p>
        </div>
        <div className='w-1/3'>
          <p className=''>Cook Time:</p>
          <p className='font-normal'>20 mins</p>
        </div>
        <div className='w-1/3'>
          <p className=''>Total Time:</p>
          <p className='font-normal'>35 mins</p>
        </div>
        <div className='w-1/3'>
          <p className=''>Serving:</p>
          <p className='font-normal'>4</p>
        </div>
      </div>

      <p className='mt-10 font-bold text-2xl'>Ingredients</p>
      <ul className='list-disc ml-4 marker:text-red-400 list-outside w-1/2'>
        <li className='py-2'>1 tablespoon olive oil</li>
        <li className='py-2'>1 medium onion, thinly sliced</li>
        <li className='py-2'>2 carrots, thinly sliced</li>
        <li className='py-2'>1 teaspoon garam masala</li>
        <li className='py-2'>1/4 teaspoon ground cumin</li>
        <li className='py-2'>1/8 teaspoon freshly ground black pepper</li>
        <li className='py-2'>1 tablespoon tomato paste</li>
        <li className='py-2'>1 1/2 teaspoons ginger paste</li>
        <li className='py-2'>1/2 teaspoon garlic paste</li>
        <li className='py-2'>1/2 medium fresh jalapeño chile pepper, finely chopped*</li>
        <li className='py-2'>2 (15-ounce) cans chickpeas, rinsed and drained</li>
      </ul>

      <p className='mt-10 font-bold text-2xl'>Directions</p>
      <p className='mt-5 font-bold'>Step 1</p>
      <p className=''>Gather all ingredients.</p>
      <img src="https://www.allrecipes.com/thmb/lf56yDXykbAFIYvRtwfpGYRbFr4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7497387-chickpea-tikka-masala-ddmfs-step-1-1752-b6d361881b5148f29f99cd09bde68424.jpg"
        alt=""
        className='mt-2 w-1/2'
      />

      <p className='mt-5 font-bold'>Step 2</p>
      <p className=''>Gather all ingredients.</p>
      <img src="https://www.allrecipes.com/thmb/lf56yDXykbAFIYvRtwfpGYRbFr4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7497387-chickpea-tikka-masala-ddmfs-step-1-1752-b6d361881b5148f29f99cd09bde68424.jpg"
        alt=""
        className='mt-2 w-1/2'
      />

      <p className='mt-5 font-bold'>Step 3</p>
      <p className=''>Gather all ingredients.</p>
      <img src="https://www.allrecipes.com/thmb/lf56yDXykbAFIYvRtwfpGYRbFr4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7497387-chickpea-tikka-masala-ddmfs-step-1-1752-b6d361881b5148f29f99cd09bde68424.jpg"
        alt=""
        className='mt-2 w-1/2'
      />
      <div className='mt-10 flex items-center w-1/2 gap-x-4'>
        <button className='w-1/2 bg-red-500 text-white py-3 rounded-md uppercase text-sm font-semibold hover:bg-red-600'>
          I Made it
        </button>

        <button className=' w-1/2 border border-red-500 text-red-500 hover:text-white  py-3 rounded-md uppercase text-sm font-semibold hover:bg-red-600'>
          <span className=''>Print</span>
          <AiFillPrinter
            className='inline ml-2 '
            size={20}
          />
        </button>
      </div>

      <p className='mt-10 font-bold text-2xl'>Nutritions</p>
      <div className='flex items-center w-1/2 justify-between mt-5'>
        <div className=''>
          <p className='font-bold'>485</p>
          <p className='mt-4'>Calories</p>
        </div>
        <div className=''>
          <p className='font-bold'>10 g</p>
          <p className='mt-4'>Fat</p>
        </div>
        <div className=''>
          <p className='font-bold'>80 g</p>
          <p className='mt-4'>Carbs</p>
        </div>
        <div className=''>
          <p className='font-bold'>22 g</p>
          <p className='mt-4'>Protein</p>
        </div>
      </div>
      <p className='mt-5 border-b border-red-500 mb-10 inline-block'>Show full nuterition label</p>
    </div>
  )
}

export default Page
