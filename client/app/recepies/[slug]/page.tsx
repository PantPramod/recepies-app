import PrintButton from '@/components/PrintButton'
import PrintButton2 from '@/components/PrintButton2'
import SaveButton from '@/components/SaveButton'
import Star from '@/components/Star'
import React from 'react'
import { AiFillCheckCircle, AiOutlineStar } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import { IoMdShareAlt } from 'react-icons/io'
import 'react-toastify/dist/ReactToastify.css';


async function getData(a: string) {
  const res = await fetch(`${process.env.BASE_URL}recipe/${a}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Page = async ({ params }: { params: { slug: string } }) => {

  const data: recipeType = await getData(params.slug)
  const { _id: recipeId, author, cookTimeMinutes, coverImage, description, ingredients, prepTimeMinutes, rating, serving
    , steps, title, nutritions, youtubeId } = data


  return (
    <div className="max-w-[1300px]  py-10 overflow-x-hidden ">
      <ToastContainer />
      <div className='w-[90%] mx-auto'>
        <h2 className='text-2xl sm:text-2xl md:text-3xl font-bold capitalize'>{title}</h2>
        <div className='mt-2 flex items-center gap-x-4'>
          <div className='flex gap-x-2 items-center'>
            <Star rating={rating} />
          </div>
          <span className='text-xs border border-b border-b-[#186F65] font-semibold'>{rating}</span>
        </div>
        <p className='mt-2 w-full sm:w-1/2 text-justify'>{description}</p>

        <p className='text-sm mt-2'>
          By{" "}
          <span className='font-bold border-b border-[#186F65] '>{author}</span>
          <span className='text-gray-400 text-xs ml-3'>Updated On Jun 27, 2023</span>
        </p>

        <p className='text-sm mt-2 flex items-center'>
          <AiFillCheckCircle className='text-green-600 text-sm mr-2' />
          Tested by
          <span className='font-bold border-b border-b-[#186F65] ml-2'>Food Recepies</span>
        </p>

        <div className='flex items-center mt-4 flex-wrap gap-y-5 w-full sm:w-2/3  lg:w-1/2'>
          <div className='w-1/2 sm:w-1/4'>
            <SaveButton recipeId={recipeId} />
          </div>

          <div className='w-1/2 sm:w-1/4'>
            <button className='w-full hover:underline bg-gray-100  px-6 py-4 text-sm rounded-sm font-bold'>
              Rate
              <AiOutlineStar
                className='inline ml-2 text-[#186F65]'
                size={20}
              />
            </button>
          </div>

          <div className='w-1/2 sm:w-1/4'>
            <PrintButton />
          </div>
          <div className='w-1/2 sm:w-1/4'>
            <a target='_blank' href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A3000%2Frecepies%2F654881e9bf9d9fd0f36839c2&layout&size&width=77&height=20&appId" rel="noopener" className='w-full'>
              <button className='hover:underline bg-gray-100  pr-6 py-4 text-sm rounded-sm font-bold w-full'>
                <span className='border-black sm:border-l pl-6 w-full'>Share</span>
                <IoMdShareAlt
                  className='inline ml-2 text-[#186F65]'
                  size={20}
                />
              </button>
            </a>
          </div>
        </div>
        {
          youtubeId &&
          <iframe
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeId}?controls=1`}
            className='mt-10 w-full sm:w-1/2'
          >
          </iframe>
        }


        <img src={coverImage[0] ?? "https://www.allrecipes.com/thmb/53SMspkec_Suf9NLSMRucREQyTU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7497387-chickpea-tikka-masala-ddmfs_4x3_1791-e0838138030a4b55ac7340027bc2b47f.jpg"}
          alt=""
          className='w-full sm:w-1/2 mt-5 '
        />

        <div className='mt-10 flex items-center flex-wrap bg-[#C7E8CA] rounded-md  sm:w-1/2 gap-y-4 px-4 py-4 font-bold'>
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
        <ul className='list-disc ml-4 marker:text-[#186F65] list-outside sm:w-1/2'>
          {ingredients.map((ingredient: any) => <li className='py-2' key={ingredient?._id}>{ingredient?.qty == '0' ? "" : ingredient?.qty}{" "}{ingredient?.unit}{" "}{ingredient?.name}.{" "}{ingredient?.note}</li>)}
        </ul>

        <p className='mt-10 font-bold text-2xl'>Directions</p>

        {
          steps.map((step: any, index: number) => <>
            <p className='mt-10  sm:w-1/2'>Step {index + 1}:-{" "}{step?.title}</p>

            <p className='mt-3 sm:w-1/2'>{step?.description}</p>
            {step?.image && <img src={step?.image}
              alt=""
              className='mt-4 sm:w-1/2'
            />}
          </>)
        }
        <div className='mt-10 flex items-center sm:w-1/2 gap-x-4'>
          <button className='w-1/2 bg-[#186F65] text-white py-3 rounded-md uppercase text-sm font-semibold hover:bg-[#22615a]'>
            I Made it
          </button>

          <PrintButton2 />
        </div>
        {
          nutritions && <>
            <p className='mt-10 font-bold text-2xl'>Nutritions</p>
            <div className='flex items-center sm:w-1/2 justify-between mt-5 bg-[#C7E8CA] p-4 rounded-md'>
              {nutritions?.map((nutrition: any, index: number) => <div className='' key={index}>
                <p className='font-bold'>{nutrition?.value}{" "}{nutrition?.unit}</p>
                <p className='mt-4'>{nutrition?.name}</p>
              </div>)}
            </div>
            <p className='mt-5 border-b border-[#186F65] mb-10 inline-block'>Show full nuterition label</p>
          </>
        }

      </div>
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