import express from 'express'
import getAllRecipes from '../controllers/recipeController/getAllRecipes.js'
import addNewRecipe from '../controllers/recipeController/addNewRecipe.js'

const router = express.Router()

router.get('/', getAllRecipes)

router.post('/', addNewRecipe)

export default router 