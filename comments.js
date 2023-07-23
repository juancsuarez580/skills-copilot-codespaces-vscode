// Create web server for comment
// =================================================

const express = require('express')
const router = express.Router()
const Comment = require('../../models/comment')

// Get comment page
router.get('/', (req, res) => {
  res.render('comment')
})

// Post comment
router.post('/', (req, res) => {
  const { name, email, comment } = req.body
  Comment.create({
    name,
    email,
    comment
  })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router
