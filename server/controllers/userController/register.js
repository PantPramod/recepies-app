import User from "../../models/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import sendMail from "../../helper/sendMail.js";

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        const emailExists = await User.findOne({ email: email });
        if (emailExists) {
            res.status(400)
            throw new Error("Email already registered")
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const response = await User.create({
            name, email, password: hashedPassword, isVerified: false
        })
        const user = {
            id: response.id,
            name: response.name,
            email: response.email
        }

        const token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '1h' });

        const sender = process.env.EMAIL
        const pass = process.env.PASSWORD

        sendMail(sender, pass, email, token)

        res.status(201).send(response)

    } catch (err) {
        next(err)
    }


}

export { register }