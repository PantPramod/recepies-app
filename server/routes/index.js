import express from 'express'
import userRoute from './user.js'
import recipeRoute from './recipe.js'
import imageRoute from './image.js'
import contactRoute from './contact.js'

const router = express.Router()

router.use('/user', userRoute)

router.use('/recipe', recipeRoute)

router.use('/images', imageRoute)

router.use('/contact', contactRoute)


export default router