import SavedRecipe from "../../models/savedRecipe.js";

const getSavedRecipeByUserId = async (req, res, next) => {
    const userId = req.params.userId;
    try {
        const savedRecipes = await SavedRecipe.find({ userId }).populate('recipeId');
        res.send(savedRecipes)
    } catch (err) {
        next(err)
    }
}

export default getSavedRecipeByUserId