const express = require('express')
const hbs = require('express-handlebars')

const homeRoutes = require('./routes')

const server = express()

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view engine', 'hbs')
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))

server.use('/', homeRoutes)

module.exports = server