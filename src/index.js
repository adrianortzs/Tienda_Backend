const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const productRoutes = require('./routes/productRoutes')
const {dbConnection} = require('./config/db')
require('dotenv').config()

const app = express()

//conexión bbdd
dbConnection()

//middlewares
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/../public'))

//views
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

//routes
app.use('/', productRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))