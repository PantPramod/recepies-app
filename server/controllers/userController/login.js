import User from '../../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const response = await User.findOne({ email });

        if (!response) {
            res.status(400)
            throw new Error("Email Not Exist!")
        }

        const passwordMatch = await bcrypt.compare(password, response.password);

        if (!passwordMatch) {
            res.status(400)
            throw new Error("Wrong Credentials")
        }

        const user = {
            id: response._id,
            name: response.name,
            email: response.email
        }

        const token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '1h' });


        res.status(200).json({
            message: 'Login successful',
            token: token,
            name: response.name,
            email: response.email,
            _id: response._id
        });

    } catch (err) {
        next(err)
    }

}