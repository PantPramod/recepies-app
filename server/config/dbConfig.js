import mongoose from 'mongoose'

const connectDB = (url) => {
    try {
        mongoose.connect(url)
        console.log(`DB connect at ${url}`)
    } catch (err) {
        console.log(err)
    }
}

export default connectDB