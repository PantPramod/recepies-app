import mongoose from 'mongoose'
import ContactMe from '../helper/ContactMe.js'

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  message: String
})




contactSchema.post('save', async (doc) => {

  const sender = process.env.EMAIL
  const pass = process.env.PASSWORD
  ContactMe(sender, pass, sender, doc)
})

const Contact = mongoose.model("contact", contactSchema)

export default Contact