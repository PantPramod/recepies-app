import express from 'express'
import getAllRecipes from '../controllers/recipeController/getAllRecipes.js'
import addNewRecipe from '../controllers/recipeController/addNewRecipe.js'
import getRecipeById from '../controllers/recipeController/getRecipeById.js'

const router = express.Router()

router.get('/', getAllRecipes)

router.post('/', addNewRecipe)

router.get('/:id', getRecipeById)

export default router 