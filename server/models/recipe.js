import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    rating: { type: Number },
    author: { type: String, required: true, trim: true },
    coverImage: [
        { type: String }
    ],
    description: { type: String, trim: true },
    prepTimeMinutes: { type: Number },
    cookTimeMinutes: { type: Number },
    serving: { type: Number },
    ingredients: [
        {
            qty: String,
            unit: String,
            name: String,
            note: String,
        }
    ],
    steps: [
        {
            no: String,
            title: String,
            image: [{ type: String }],
            description: String
        }
    ],
    nutritions: [
        {
            name: String,
            value: Number,
            unit: String
        }
    ],
    youtubeId: { type: String },
    category: { type: String }

})

const Recipe = mongoose.model("recipe", recipeSchema)

export default Recipe