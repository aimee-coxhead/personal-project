exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('children').del()
    .then(function () {
      // Inserts seed entries
      return knex('children').insert([
        {id: 1, name: 'Bob', profile_photo: "../images/dog.jpg" },
        {id: 2, name: 'Grace', profile_photo: "1_1"},
        {id: 3, name: 'Sally', profile_photo: "+_+"}
      ])
    })
}
