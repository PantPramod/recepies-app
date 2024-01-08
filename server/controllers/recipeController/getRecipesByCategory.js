import Recipe from "../../models/recipe.js"

const getRecipesByCategory = async (req, res, next) => {
    try {
        const response = await Recipe.find({ category: req.params.category })
        res.send(response)
    } catch (err) {
        next(err)
    }
}



export const getdistnictCategory = async (req, res, next) => {
    try {
        const response = await Recipe.distinct('category')
        res.send(response)
    } catch (err) {
        next(err)
    }
}

export default getRecipesByCategory