
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const savedRecipeSchema  = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    recipeId: {
        type: Schema.Types.ObjectId,
        ref: 'recipe',
        required: true
    }
});

const SavedRecipe = mongoose.model('UserData', savedRecipeSchema);

export default SavedRecipe