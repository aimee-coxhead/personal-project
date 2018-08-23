const express = require('express')

const db = require('./db')

const router = express.Router()


router.get('/', (req, res) => {
    db.getChildren()
      .then(displayChildren)
      .catch(displayError)
  
    function displayChildren (children) {
      res.render('home', {
        children
      })
    }
  
    function displayError (err) {
      res.status(500).send(err.message)
    }
  })

module.exports = router
