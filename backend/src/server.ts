import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import loginRouter from './routers/login.routes'
import companyRouter from './routers/company.routes'


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/usersProjectDB')
const connection = mongoose.connection
connection.once('open', () => {
    console.log('db connected')
})

const router = express.Router()

router.use('/users', loginRouter)
router.use('/companies', companyRouter)


app.use('/', router)
app.listen(4000, () => console.log(`Express server running on port 4000`));


