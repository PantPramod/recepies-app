import Image from "../../models/images.js"

const getImagesByUserId = async (req, res, next) => {
    const userId = req.params.userId
    try {
        console.log(userId)
        const response = await Image.find({ userId})
        res.send(response)
    } catch (err) {
        next(err)
    }
}


export default getImagesByUserId