import Recipe from "../../models/recipe.js"

const getAllRecipes = async (req, res, next) => {
    try {
        const recepies = await Recipe.find({}).select('title rating coverImage prepTimeMinutes cookTimeMinutes category')
        res.send(recepies)
    } catch (err) {
        next(err)
    }
}

export default getAllRecipes