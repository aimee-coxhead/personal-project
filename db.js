const knex = require('knex')
const config = require('./knexfile').development
const conn = knex(config)

module.exports = {
    getChildren
}


function getChildren () {
    return conn('children').select()
  }
  