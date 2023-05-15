var express = require('express');
var router = express.Router();

var ContratoController = require('../controllers/contratoController')

/* GET home page. */
router.get('/contracts', function(req, res, next) {
  if(req.query.year) {
     ContratoController.list_by_year(req.query.year).then( value => {
      res.jsonp(value)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  }
  if(req.query.inst) {
     ContratoController.list_by_instituicao(req.query.inst).then( value => {
      res.jsonp(value)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  }
  else {
     ContratoController.list().then( value => {
      res.jsonp(value)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  }
});

router.get('/contracts/courses', function(req, res, next) {
     ContratoController.list_cursos().then( value => {
      res.jsonp(value)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
});

router.get('/contracts/instituicoes', function(req, res, next) {
   ContratoController.list_instituicoes().then( value => {
    res.jsonp(value)
  }).catch( error => {
    res.status(500).jsonp({error: error})
  })
});

router.post('/contracts', function(req, res, next) {
   ContratoController.insert(req.bodys).then( value => {
    res.jsonp(value)
  }).catch( error => {
    res.status(500).jsonp({error: error})
  })
})

router.delete('/contracts', function(req, res, next) {
   ContratoController.deleteid(req.bodys).then( value => {
    res.jsonp(value)
  }).catch( error => {
    res.status(500).jsonp({error: error})
  })
})


module.exports = router;
