import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name:String,
  email:String,
  contact:String,
  message:String
})

const Contact = mongoose.model("contact", contactSchema)

export default Contact
