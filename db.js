const knex = require('knex')
const config = require('./knexfile').development
const conn = knex(config)

module.exports = {
}
