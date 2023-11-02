import Recipe from "../../models/recipe.js"

const getAllRecipes = async (req, res, next) => {
    try {
        const recepies = await Recipe.find({})
        res.send(recepies)
    } catch (err) {
        next(err)
    }
}

export default getAllRecipes