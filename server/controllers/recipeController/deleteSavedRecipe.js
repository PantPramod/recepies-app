import SavedRecipe from "../../models/savedRecipe.js"

const deleteSavedRecipe = async (req, res, next) => {
    try {
        const response = await SavedRecipe.findOneAndDelete(req.params.userId)
        res.send(response)
    } catch (err) {
        next(err)
    }
}

export default deleteSavedRecipe