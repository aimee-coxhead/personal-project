const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
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
  res.render('choice-form')
})

/* router.post('/choice/:id', (req, res) => {
  const timetableData = req.body
  db.newTimetable(timetableData)
}) */

module.exports = router
