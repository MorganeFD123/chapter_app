const express = require('express')
const mongoose = require('mongoose')
const { MONGO_URI } = require('./config/db')

const app = express()

mongoose.connect(MONGO_URI).then(() => {
    console.log('✔ connexion mongodb ok')
})

app.use(express.json())

app.listen(3000, () => {
    console.log('✔ Server is running on port 3000')
})