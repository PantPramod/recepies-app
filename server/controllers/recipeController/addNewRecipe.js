import Recipe from "../../models/recipe.js"

const addNewRecipe = async (req, res, next) => {
    try {
        const newRecipe = await Recipe.create({ ...req.body })
        res.send(newRecipe)
    } catch (err) {
        next(err)
    }
}

export default addNewRecipe