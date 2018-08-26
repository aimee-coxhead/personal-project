const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/timetable-display', (req, res) => {
  res.render('timetable-display')
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

router.get('/choice/:id', (req, res) => {
        res.render('choice-form')
      })
  
    function displayError (err) {
      res.status(500).send(err.message)
    }
  })

module.exports = router
