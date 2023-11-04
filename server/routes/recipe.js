import express from 'express'
import getAllRecipes from '../controllers/recipeController/getAllRecipes.js'
import addNewRecipe from '../controllers/recipeController/addNewRecipe.js'
import getRecipeById from '../controllers/recipeController/getRecipeById.js'
import saveRecipe from '../controllers/recipeController/saveRecipe.js'
import getSavedRecipeByUserId from '../controllers/recipeController/getsavedRecipeByUserId.js'


const router = express.Router()

router.get('/', getAllRecipes)

router.post('/', addNewRecipe)

router.post("/save", saveRecipe)

router.get('/savedrecipe/:userId', getSavedRecipeByUserId)

router.get('/:id', getRecipeById)



export default router 