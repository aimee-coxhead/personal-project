
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('timetable').del()
    .then(function () {
      // Inserts seed entries
      return knex('timetable').insert([
        {id: 99901, task_1: '', task_2: '', task_3: '', task_4: '', task_5: ''},
        {id: 99902, task_1: '', task_2: '', task_3: '', task_4: '', task_5: ''},
        {id: 99903, task_1: '', task_2: '', task_3: '', task_4: '', task_5: ''}
      ])
    })
}
