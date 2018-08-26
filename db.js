const knex = require('knex')
const config = require('./knexfile').development
const conn = knex(config)

module.exports = {
  getChildren,
  getTimetable
}

function getChildren () {
  return conn('children').select()
}

function getTimetable () {
  return conn('children')
    .join('timetable', 'children.timetable_Id', 'timetable.id')
    .select()
}
