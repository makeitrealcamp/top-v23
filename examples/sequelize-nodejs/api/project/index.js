const { Router } = require('express')

const {
  index,
  show,
  create,
} = require('./project.controller')

const router = new Router()

router.get('/', index)
router.post('/', create)
router.get('/:id', show)

module.exports = router
