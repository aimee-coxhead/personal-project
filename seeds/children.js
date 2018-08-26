exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('children').del()
    .then(function () {
      // Inserts seed entries
      return knex('children').insert([
        {id: 88801, name: 'Bob', profile_photo: 'images/dog.jpg', timetable_Id: 99901},
        {id: 88802, name: 'Grace', profile_photo: '1_1', timetable_Id: 99902},
        {id: 88803, name: 'Sally', profile_photo: '+_+', timetable_Id: 99903}
      ])
    })
}
