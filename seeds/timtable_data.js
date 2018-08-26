
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('timetable').del()
    .then(function () {
      // Inserts seed entries
      return knex('timetable').insert([
        {id: 99901, task_1: 'faksj', task_2: 'adfg', task_3: 'gdr', task_4: 'tysrtu', task_5: 'tyhsety'},
        {id: 99902, task_1: 'srtyse', task_2: 'ty', task_3: 'eyery', task_4: 'tyaery', task_5: 'yaey'},
        {id: 99903, task_1: 'ths', task_2: 'ytsrty', task_3: 'srty', task_4: 'stysety', task_5: 'tysey'}
      ])
    })
}
