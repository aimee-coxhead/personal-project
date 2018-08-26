const knex = require('knex')
const config = require('./knexfile').development
const conn = knex(config)

module.exports = {
    getChildren,
    timetable
}


function getChildren () {
    return conn('children').select()
  }
  

  function timetable () {
      
  }