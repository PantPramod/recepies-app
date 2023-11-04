import Recipe from "../../models/recipe.js";
import User from "../../models/user.js";
import UserData from "../../models/savedRecipe.js";
import SavedRecipe from "../../models/savedRecipe.js";

const saveRecipe = async (req, res, next) => {


    const { recipeId, userId } = req.body;

    try {
        const existingSavedRecipe = await SavedRecipe.findOne({ userId, recipeId });

        if (existingSavedRecipe) {
            return res.status(400).json({ error: 'Recipe already saved.' });
        }
        // Create a new SavedRecipe document
        const savedRecipe = new SavedRecipe({ userId, recipeId });
        await savedRecipe.save();

        res.json({ message: 'Recipe saved successfully.' });
    } catch (error) {
        next(error)
    }

}


export default saveRecipe