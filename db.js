const knex = require('knex')
const config = require('./knexfile').development
const conn = knex(config)

module.exports = {
  getChildren,
  getTimetable,
  getTimetableId,
  updateTimetable
}

function getChildren () {
  return conn('children').select()
}

function getTimetable () {
  return conn('children')
    .join('timetable', 'children.timetable_Id', 'timetable.id')
    .select()
}

function getTimetableId (id) {
   return conn('children')
   .where('id', id)
   .select('timetable_Id')
}

function updateTimetable (id, formData) {
   return conn('timetable')
   .where('id', id)
   .update({
     task_1: formData.optionOne,
     task_2: formData.optionTwo,
     task_3: formData.optionThree,
     task_4: formData.optionFour,
     task_5: formData.optionFive
   })
}
