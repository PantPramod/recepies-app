import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/dbConfig.js'
import allRoutes from './routes/index.js'
import errorHandler from './middlewares/errorHandler.js'


dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000
const DATABASEURI = process.env.DATABASEURI



//midddlewares 

app.use(cors())
app.use(express.json())

//dbConnect
connectDB(DATABASEURI);

//routes
app.use('/api', allRoutes)

//errorHandler
app.use(errorHandler)

app.get('/', (req, res) => res.send("you are at receipe app backend"))




// listener

app.listen(PORT, () => console.log("App listen at PORT", PORT)) 