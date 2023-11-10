import Image from "../../models/images.js"

const saveImageUrl = async (req, res, next) => {
    const { userId, url } = req.body
    try {
        const response = await Image.create({ userId, url })
        res.send(response)
    } catch (err) {
        next(err)
    }
}

export default saveImageUrl