const express = require('express')
const mongoose = require('mongoose')
const { MONGO_URI } = require('./config/db')
const { jsonResponseMiddleware } = require('./middlewares/json-response.middleware')
const { errorHandlerMiddleware } = require('./middlewares/error-handler.middleware')
const ApiRoute = require('./routes')
const cors = require('cors')

const app = express()

mongoose.connect(MONGO_URI).then(() => {
    console.log('✔ connexion mongodb ok')
})

app.use(express.json())
app.use(cors())
app.use(jsonResponseMiddleware)

app.use('/api', ApiRoute)

app.use(errorHandlerMiddleware)

app.listen(3000, () => {
    console.log('✔ Server is running on port 3000')
})