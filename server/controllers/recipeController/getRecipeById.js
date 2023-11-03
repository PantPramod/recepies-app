import Recipe from "../../models/recipe.js"

const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id)
        res.send(recipe)
    } catch (err) {
        next(err)
    }
}

export default getRecipeById