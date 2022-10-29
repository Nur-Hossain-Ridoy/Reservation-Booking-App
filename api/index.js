require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const helmet = require('helmet')
const app = express()

// all middleware here
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// databse connection
const connect = async () => {
    const options = {
        serverSelectionTimeoutMS: 5000
    }

    try {
        await mongoose.connect(process.env.DB_URL, options)
        console.log("connected to MongoDB")
    } catch(err) {
        throw err
    }
}

mongoose.connection.on('disconnected ', () => {
    console.log('database disconnected');
})

// import all routes
const auth = require('./routes/auth')
const users = require('./routes/user')
const hotels = require('./routes/hotels')
const rooms = require('./routes/rooms')


// all endpoint
app.use('/api', auth)
app.use('/api', users)
app.use('/api', hotels)
app.use('/api', rooms)


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessaage = err.message || 'Something went wrong'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessaage,
        stack: err.stack
    })
})

// spining up server
app.listen(process.env.PORT, () => {
    connect()
    console.log(`Server is running on port ${process.env.PORT}`)
})