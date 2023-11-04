'use client'
import axios from 'axios'
import React, { SyntheticEvent, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'

const Page = () => {
    const [data, setData] = useState({
        title: '',
        coverImage: '',
        description: '',
        prepTimeMinutes: 0,
        cookTimeMinutes: 0,
        serving: 0,
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

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        const { title, cookTimeMinutes, coverImage, description, prepTimeMinutes, serving, } = data
        const Steps = steps.map((step, index: number) => {
            return { ...step, no: index + 1 }
        })
        const author = localStorage.getItem('name')
        try {
            const { data } = await axios.post('http://localhost:4000/api/recipe', {
                title,
                rating: 5,
                author,
                coverImage: [coverImage],
                description,
                prepTimeMinutes,
                cookTimeMinutes,
                serving,
                ingredients,
                steps: Steps
            })
            toast.success("Recipe published successfully.")
            console.log(data)
        } catch (err) {
            console.log(err)
            toast.error("something went wrong")
        } finally {

        }
    }
    return (
        <div className=''>
            <ToastContainer toastStyle={{ backgroundColor: "white" }} />
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
                    <label>Cover Image url</label>
                    <input
                        type='text'
                        className='border outline-none border-gray-400 w-full p-2 rounded-md'
                        placeholder='coverImage'
                        value={data.coverImage}
                        onChange={(e) => setData({ ...data, coverImage: e.target.value })}
                    />
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
                        key={ingredient.name}
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
                    key={step.title}
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
                        <label>Image url</label>
                        <input
                            type='text'
                            placeholder='image url'
                            className='border outline-none border-gray-400 w-full p-2 rounded-md'
                            value={step.image}
                            onChange={(e) => {
                                let a = { ...step, image: e.target.value }
                                steps[index] = a
                                setSteps([...steps])
                            }}
                        />
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


                <button type='submit' className='mt-10 mb-10 w-full bg-gray-800 hover:bg-black transition-all ease-in-out duration-300 text-white p-2 rounded-md'>Publish</button>
            </form>
        </div>
    )
}

export default Page
