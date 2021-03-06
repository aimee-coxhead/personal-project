exports.up = (knex, Promise) => {
  return knex.schema.createTable('children', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('profile_photo')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('children')
}
