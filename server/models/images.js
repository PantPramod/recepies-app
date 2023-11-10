
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const imageSchema = new Schema({

    url: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});

const Image = mongoose.model('Image', imageSchema);

export default Image