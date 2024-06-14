const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('db connected succesfully')
    } catch(error) {
        console.error(error)
        throw new Error('Could not connect to db')
    }
}

module.exports = {dbConnection}