import ContactMe from "../../helper/ContactMe.js"
import Contact from "../../models/contact.js"

const saveContact = async(req, res, next) => {
    try {
        const newContact  = await Contact.create(req.body)
        res.send(newContact) 
    } catch (err) {
        next(err)
    }
}

export default saveContact