const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/home', (req, res) => {
  res.render('index')
})

router.get('/teacher', (req, res) => {
  res.render('teacher')
})

router.get('/student', (req, res) => {
  res.render('student')
})

router.get('/timetable-display', (req, res) => {
  db.getTimetable()
    .then(timetable => {
      res.render('timetable-display', {timetable})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/child', (req, res) => {
  db.getChildren()
    .then(displayChildren)
    .catch(displayError)

  function displayChildren (children) {
    res.render('child', {
      children
    })
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})

router.get('/choice/:id', (req, res) => {
  res.render('choice-form', {id: req.params.id})
})

router.post('/choice-completed', (req, res) => {
  const timetableData = req.body
  db.getTimetableId(timetableData.id)
  .then((timetable_Id) => db.updateTimetable(timetable_Id[0].timetable_Id, req.body))
  .then(() => {
    res.redirect('/timetable-display')
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})

module.exports = router
