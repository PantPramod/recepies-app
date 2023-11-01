import jwt from 'jsonwebtoken'
import User from '../../models/user.js'

export const verifyEmail = async (req, res, next) => {
    try {
        const token = req.query.token
        if (!token) {
            res.status(401)
            throw new Error("No token, authorization denied")
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const responseUpdate = await User.findOneAndUpdate(
            { email: decoded.user.email },
            { isVerified: true },
            { new: true }
        )

        res.send(responseUpdate)
    } catch (err) {
        next(err)
    }

} 