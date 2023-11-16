'use client'
import axios from '@/axios/axios'
import React, { SyntheticEvent, useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { GrDocumentUpload } from 'react-icons/gr'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '@/firebase/config';
import { BiSolidCheckboxChecked } from 'react-icons/bi'
const Page = () => {

    const [progress, setProgress] = useState(0)
    const [userId, setUserId] = useState('')
    const [images, setImages] = useState<any>([])
    const [showImageGallery, setShowImageGallery] = useState(false)
    const [showProgressBar, setShowProgressBar] = useState(false)
    const [selectedImage, setSelectedImage] = useState({ url: "", userId: "" })
    const [imageUrl, setImageUrl] = useState('')
    const [data, setData] = useState({
        title: '',
        coverImage: '',
        description: '',
        prepTimeMinutes: 0,
        cookTimeMinutes: 0,
        serving: 0,
        youtubeId: '',
        category: 'lunch'
    })
    const [ingredients, setIngredients] = useState([
        {
            qty: 0,
            unit: '',
            name: '',
            note: ''
        }
    ])
    const [steps, setSteps] = useState([
        {
            title: '',
            image: '',
            description: ''
        }
    ])
    const [nutritions, setNutritions] = useState([
        {
            name: '',
            value: 0,
            unit: '',
        }
    ])
    const [author, setAuthor] = useState('')
    const [id, setId] = useState(0)
    const [imageFor, setImageFor] = useState('coverImage')
    const [error, setError] = useState(false)


    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        const { title, cookTimeMinutes, coverImage, description, prepTimeMinutes, serving, youtubeId, category } = data
        const Steps = steps.map((step, index: number) => {
            return { ...step, no: index + 1 }
        })
        console.log(steps);

        try {
            const { data } = await axios.post(`/recipe`, {
                title,
                rating: 5,
                author,
                coverImage: [coverImage],
                description,
                prepTimeMinutes,
                cookTimeMinutes,
                serving,
                ingredients,
                steps: Steps,
                nutritions,
                youtubeId,
                category
            })
            toast.success("Recipe published successfully.")
            // console.log(data)
        } catch (err) {
            // console.log(err)
            toast.error("something went wrong")
        } finally {

        }
    }



    const getUsersImages = async () => {
        setImageFor('coverImage')
        setShowImageGallery(true)
        try {
            const { data } = await axios.get(`/images/${userId}`)
            setImages([...data])
        } catch (err) {
            // console.log(err)
        }
    }

    const getUsersImages1 = async (id: number) => {
        setImageFor("steps")
        setId(id)
        setShowImageGallery(true)
        try {
            const { data } = await axios.get(`/images/${userId}`)
            setImages([...data])
        } catch (err) {
            // console.log(err)
        }
    }
    // console.log(imageFor, id, steps)
    const saveActionHandler = () => {
        if (error) {
            toast.error("Please Enter a valid Image Url")
            return;
        }
        if (imageFor === "coverImage") {
            setData({ ...data, coverImage: imageUrl || selectedImage.url });
            // console.log("In coverImage section")

        } else if (imageFor === "steps") {
            console.log("in steps section")
            let a = { ...steps[id], image: imageUrl || selectedImage.url }
            steps[id] = a
            setSteps([...steps])
        }
        setShowImageGallery(false)
    }

    const uploadFile = (file: any) => {
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                setShowProgressBar(true)
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // setProgress(progress)
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {

                switch (error.code) {
                    case 'storage/unauthorized':

                        break;
                    case 'storage/canceled':

                        break;

                    // ...

                    case 'storage/unknown':

                        break;
                }
            },
            () => {

                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    console.log('File available at', downloadURL);
                    try {
                        const { data } = await axios.post(`/images`, {
                            userId,
                            url: downloadURL
                        })
                        getUsersImages()
                        // console.log(data)
                        setShowProgressBar(false)
                    } catch (err) {
                        // console.log(err)
                        setShowProgressBar(false)
                    }
                });
            }
        );
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUserId(localStorage.getItem("_id") ?? "");
            setAuthor(localStorage.getItem('name') ?? "Unknown")
        }
    }, [])

    return (
        <div className=''>
            <ToastContainer toastStyle={{ backgroundColor: "white", zIndex: 99999999 }} />
            <h2 className='text-3xl uppercase w-[90%] sm:w-[50%] mx-auto mt-10'>Add New Recipe</h2>
            <form
                onSubmit={submitHandler}
                className='w-[90%] sm:w-[50%] mx-auto mt-5 '>
                <div className=''>
                    <label>Title</label>
                    <input
                        type='text'
                        className='border outline-none border-gray-400 w-full p-2 rounded-md' placeholder='title'
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value })}
                    />
                </div>
                <div className='mt-5'>
                    <label>Category</label>
                    <select
                        className='border outline-none border-gray-400 w-full p-2 rounded-md capitalize'
                        value={data.category}
                        onChange={(e) => setData({ ...data, category: e.target.value })}
                    >
                        {categories.map(category => <option value={category} key={category}>{category}</option>)}
                    </select>
                </div>
                <div className='mt-5'>
                    <label>Youtbe Id</label>
                    <input
                        type='text'
                        className='border outline-none border-gray-400 w-full p-2 rounded-md'
                        placeholder='Youtube Id'
                        value={data?.youtubeId}
                        onChange={(e) => setData({ ...data, youtubeId: e.target.value })}
                    />
                </div>
                <div className='mt-5 flex flex-col items-center bg-gray-200 py-10 rounded-3xl border-dashed'>

                    <button
                        type="button"
                        className='bg-red-500 text-white py-2 px-8 block mx-auto rounded-md'
                        onClick={getUsersImages}
                    >
                        Select Cover Image
                    </button>
                    {data.coverImage && <>
                        <p className='text-center mt-5'>
                            <img
                                src={data.coverImage}
                                alt=""
                                width={50}
                                height={50}
                            />
                        </p>
                        <BiSolidCheckboxChecked className="text-green-600 mx-auto block mt-5" size={30}
                        />
                    </>
                    }


                </div>
                <div className='flex items-center justify-between mt-5 '>
                    <div className='w-[30%]'>
                        <label className='min-h-[44px] inline-block'>Prepration Time (in minutes)</label>
                        <input
                            type='number'
                            className='border outline-none border-gray-400 w-full p-2 rounded-md'
                            placeholder='prepration time'
                            value={data.prepTimeMinutes}
                            onChange={(e) => setData({ ...data, prepTimeMinutes: +e.target.value })}
                        />
                    </div>
                    <div className='w-[30%] '>
                        <label className='min-h-[44px] inline-block'>Cook Time (in minutes)</label>
                        <input
                            type='number'
                            className='border outline-none border-gray-400 w-full p-2 rounded-md'
                            placeholder='cook time'
                            value={data.cookTimeMinutes}
                            onChange={(e) => setData({ ...data, cookTimeMinutes: +e.target.value })}
                        />
                    </div>
                    <div className='w-[30%] '>
                        <label className='min-h-[44px] inline-block'>Serving</label>
                        <input
                            type='text'
                            className='border outline-none border-gray-400 w-full p-2 rounded-md'
                            placeholder='serving'
                            value={data.serving}
                            onChange={(e) => setData({ ...data, serving: +e.target.value })}
                        />
                    </div>
                </div>
                <div className='mt-5'>
                    <label>Description</label>
                    <textarea
                        className='border outline-none border-gray-400 w-full p-2 rounded-md min-h-[150px]'
                        placeholder='description'
                        value={data.description}
                        onChange={(e) => setData({ ...data, description: e.target.value })}
                    >
                    </textarea>
                </div>

                <div className='mt-5'>
                    <p className='text-xl'>Ingredients:</p>
                    {ingredients.map((ingredient, index: number) => (<div
                        key={index}
                        className='mt-5 flex items-center justify-between'>
                        <div className='w-[23%]'>
                            <label>Quantity</label>
                            <input
                                type='number'
                                placeholder='quantity'
                                className='border outline-none border-gray-400 w-full p-2 rounded-md'
                                value={ingredient.qty}
                                onChange={(e) => {
                                    let a = { ...ingredient, qty: +e.target.value }
                                    ingredients[index] = a
                                    setIngredients([...ingredients])
                                }}
                            />
                        </div>
                        <div className='w-[23%]'>
                            <label>Unit</label>
                            <input
                                type='text'
                                placeholder='unit'
                                className='border outline-none border-gray-400 w-full p-2 rounded-md'
                                value={ingredient.unit}
                                onChange={(e) => {
                                    let a = { ...ingredient, unit: e.target.value }
                                    ingredients[index] = a
                                    setIngredients([...ingredients])
                                }}
                            />
                        </div>
                        <div className='w-[23%]'>
                            <label>Name</label>
                            <input
                                type='text'
                                placeholder='name'
                                className='border outline-none border-gray-400 w-full p-2 rounded-md'
                                value={ingredient.name}
                                onChange={(e) => {
                                    let a = { ...ingredient, name: e.target.value }
                                    ingredients[index] = a
                                    setIngredients([...ingredients])
                                }}
                            />
                        </div>
                        <div className='w-[23%]'>
                            <label>Note</label>
                            <input
                                type='text'
                                placeholder='quantity'
                                className='border outline-none border-gray-400 w-full p-2 rounded-md'
                                value={ingredient.note}
                                onChange={(e) => {
                                    let a = { ...ingredient, note: e.target.value }
                                    ingredients[index] = a
                                    setIngredients([...ingredients])
                                }}
                            />
                        </div>
                        {
                            index != 0 &&
                            <AiOutlineClose
                                size={20}
                                cursor="pointer"
                                className='hover:bg-gray-200'
                                onClick={() => {
                                    ingredients.splice(index, 1)
                                    setIngredients([...ingredients])
                                }}
                            />
                        }
                    </div>))}
                    <button
                        type='button'
                        onClick={() => {
                            ingredients[ingredients.length] = {
                                qty: 0,
                                unit: '',
                                name: '',
                                note: ''
                            }
                            setIngredients([...ingredients])
                        }
                        }
                        className='bg-gray-500 hover:bg-gray-800 transition-all ease-in-out duration-300 text-white mt-5 rounded-md p-3 py-1 block ml-auto'>+</button>
                </div>

                <p className='mt-5 text-xl'>Steps:</p>
                {steps.map((step, index: number) => (<div
                    key={index}
                    className=''>
                    <div className=' font-semibold uppercase mt-5 w-full flex justify-between'>
                        <span>Step {index + 1}:</span>
                        {
                            index != 0 &&
                            <AiOutlineClose
                                size={20}
                                cursor="pointer"
                                className='hover:bg-gray-200'
                                onClick={() => {
                                    steps.splice(index, 1)
                                    setSteps([...steps])
                                }}
                            />
                        }
                    </div>
                    <div className='mt-2 '>
                        <label>Title</label>
                        <input
                            type='text'
                            placeholder='title'
                            className='border outline-none border-gray-400 w-full p-2 rounded-md'
                            value={step.title}
                            onChange={(e) => {
                                let a = { ...step, title: e.target.value }
                                steps[index] = a
                                setSteps([...steps])
                            }}
                        />
                    </div>
                    <div className='mt-5 '>
                        <div className='bg-gray-200 py-10 rounded-3xl border border-dashed border-red-500'>
                            <button
                                type="button"
                                className='bg-red-500 text-white py-2 px-8 block mx-auto rounded-md'
                                onClick={() => getUsersImages1(index)}
                            >
                                Select Image
                            </button>
                            {step?.image &&
                                <img
                                    src={step?.image}
                                    width={70}
                                    height={70}
                                    className='mt-4 mb-3 mx-auto'
                                />
                            }
                        </div>
                    </div>
                    <div className='mt-5 '>
                        <label>Description</label>
                        <textarea
                            placeholder='title'
                            className='border outline-none border-gray-400 w-full p-2 rounded-md min-h-[100px]'
                            value={step.description}
                            onChange={(e) => {
                                let a = { ...step, description: e.target.value }
                                steps[index] = a
                                setSteps([...steps])
                            }}
                        ></textarea>
                    </div>
                </div>))}
                <button
                    type='button'
                    onClick={() => {
                        steps[steps.length] = {
                            title: '',
                            image: '',
                            description: ''
                        }
                        setSteps([...steps])
                    }
                    }
                    className='bg-gray-500 hover:bg-gray-800 transition-all ease-in-out duration-300 text-white mt-5 rounded-md p-3 py-1 block ml-auto'>+</button>

                <p className='mt-5 text-xl'>Nutritions:</p>
                {nutritions.map((nutrition, index: number) => (<div
                    key={index}
                    className=''>
                    <div className=' font-semibold uppercase mt-5 w-full flex justify-between'>
                        <span>Nutrition {index + 1}:</span>
                        {
                            index != 0 &&
                            <AiOutlineClose
                                size={20}
                                cursor="pointer"
                                className='hover:bg-gray-200'
                                onClick={() => {
                                    nutritions.splice(index, 1)
                                    setNutritions([...nutritions])
                                }}
                            />
                        }
                    </div>
                    <div className='mt-2 '>
                        <label>Name</label>
                        <input
                            type='text'
                            placeholder='Name'
                            className='border outline-none border-gray-400 w-full p-2 rounded-md'
                            value={nutrition.name}
                            onChange={(e) => {
                                let a = { ...nutrition, name: e.target.value }
                                nutritions[index] = a
                                setNutritions([...nutritions])
                            }}
                        />
                    </div>
                    <div className='mt-5 '>
                        <label>Unit</label>
                        <input
                            type='text'
                            placeholder='Unit'
                            className='border outline-none border-gray-400 w-full p-2 rounded-md'
                            value={nutrition.unit}
                            onChange={(e) => {
                                let a = { ...nutrition, unit: e.target.value }
                                nutritions[index] = a
                                setNutritions([...nutritions])
                            }}
                        />
                    </div>
                    <div className='mt-5 '>
                        <label>Value</label>
                        <input
                            type="number"
                            placeholder='Value'
                            className='border outline-none border-gray-400 w-full p-2 rounded-md '
                            value={nutrition.value}
                            onChange={(e) => {
                                let a = { ...nutrition, value: +e.target.value }
                                nutritions[index] = a
                                setNutritions([...nutritions])
                            }}
                        />
                    </div>
                </div>))}
                <button
                    type='button'
                    onClick={() => {
                        nutritions[nutritions.length] = {
                            name: '',
                            value: 0,
                            unit: ''
                        }
                        setNutritions([...nutritions])
                    }
                    }
                    className='bg-gray-500 hover:bg-gray-800 transition-all ease-in-out duration-300 text-white mt-5 rounded-md p-3 py-1 block ml-auto'>+</button>
                <button type='submit' className='mt-10 mb-10 w-full bg-gray-800 hover:bg-black transition-all ease-in-out duration-300 text-white p-2 rounded-md'>Publish</button>
            </form>

            {
                showImageGallery &&
                <div className='z-[99999999] fixed top-0 left-0 right-0 bottom-0 bg-[#00000018] flex items-center justify-center'>
                    <div className='w-[80%] bg-white rounded-xl shadow-xl h-[80vh] overflow-y-auto'>
                        <AiOutlineClose
                            cursor="pointer"
                            className='block ml-auto mr-2 mt-2'
                            size={25}
                            onClick={() => setShowImageGallery(false)}
                        />
                        <hr className='mt-5' />
                        <hr />

                        <div className='p-4'>
                            <div className='relative'>
                                <button className='w-[200px] h-[60px] bg-gray-300 text-black px-8 py-4 rounded-md mx-auto block mb-5'>
                                    Browse Files
                                    <GrDocumentUpload className="inline-block ml-2" />
                                </button>
                                <input
                                    type="file"
                                    onChange={(e: any) => { uploadFile(e.target.files[0]) }}
                                    className='border border-red-600 py-2 w-[200px] h-[60px] absolute left-1/2 top-1/2 z-[11111] -translate-x-1/2 -translate-y-1/2 opacity-0 cursor-pointer'
                                />
                            </div>
                            {
                                showProgressBar
                                &&
                                <div className='w-[350px] border h-2.5  border-black mx-auto rounded-s'>
                                    <div style={{ width: `${progress}%` }} className='bg-green-600 h-2 transition-all ease-in-out duration-300'></div>
                                </div>
                            }
                            <p className='text-center'>Or</p>
                            <div className="flex items-center gap-x-2 mt-2">
                                <label className='whitespace-nowrap'>Image Url</label>
                                <input
                                    type='text'
                                    className='border outline-none border-gray-400 w-full p-2 rounded-md'
                                    placeholder='image url'
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                />
                            </div>
                            <hr className='my-6' />
                            {imageUrl ?
                                <img
                                    src={imageUrl}
                                    className="block mx-auto border-4 border-[yellow]"
                                    width={200}
                                    height={200}
                                    alt="No image found"
                                    onError={() => { setError(true); toast.error("No image Found Please Enter a valid url.") }}
                                    onLoad={() => { setError(false) }}
                                /> :
                                <div className='flex flex-wrap items-center gap-y-4 gap-x-4 object-contain'>
                                    {images.map((image: { url: string, userId: string }) => <img
                                        src={image?.url}
                                        alt=""
                                        className='cursor-pointer hover:border border-[#186f65] transition-all ease-in-out duration-75'
                                        width={200}
                                        height={150}
                                        key={image?.url}
                                        onClick={() => setSelectedImage(image)}
                                        style={image.url === selectedImage.url ? { border: "4px solid yellow" } : {}}
                                    />)}


                                </div>
                            }

                            {/* <button
                                onClick={() => { setData({ ...data, coverImage: selectedImage.url }); setShowImageGallery(false) }}
                                className='block ml-auto mr-4 bg-green-600 hover:bg-green-800  text-white px-8 py-2 uppercase text-sm'>Save</button> */}
                            <GallerySaveButton saveHandler={saveActionHandler}
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Page


const categories = ["breakfast", "lunch", "dinner", "healthy_meal", "sweets"]


type propTypes = {
    saveHandler: () => void
}

const GallerySaveButton = ({ saveHandler }: propTypes) => {
    return (<button
        onClick={saveHandler}
        className='block ml-auto mr-4 bg-green-600 hover:bg-green-800  text-white px-8 py-2 uppercase text-sm'>Save</button>)
}