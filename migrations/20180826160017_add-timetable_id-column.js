
exports.up = function (knex, Promise) {
  return knex.schema.table('children', (table) => {
    table.integer('timetable_Id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('children', (table) => {
    table.dropColumn('timetable_Id')
  })
}
