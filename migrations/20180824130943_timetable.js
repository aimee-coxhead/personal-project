exports.up = (knex, Promise) => {
  return knex.schema.createTable('timetable', table => {
    table.increments('id').primary()
    table.string('task_1')
    table.string('task_2')
    table.string('task_3')
    table.string('task_4')
    table.string('task_5')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('timetable')
}
