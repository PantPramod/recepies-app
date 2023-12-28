import Contact from "../../models/contact.js"

const getAllContacts = async (req, res, next) => {
    try {
        const allContacts = await Contact.find()
        res.send(allContacts)
    } catch (err) {
        next(err)
    }
}


export default getAllContacts