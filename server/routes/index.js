import express from 'express'
import userRoute from './user.js'
import recipeRoute from './recipe.js'

const router = express.Router()

router.use('/user', userRoute)

router.use('/recipe', recipeRoute)


export default router