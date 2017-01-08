var express = require('express')
var encodeurl = require('encodeurl')
var router = express.Router()

router.get('/:query', function (req, res, next) {
  res.send(req.params.query)
})

module.exports = router
