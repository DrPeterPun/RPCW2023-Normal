var express = require('express');
var axios = require('axios');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:15015/contracts').then(value => {
    res.render('main', {contracts: value.data});
  }).catch( error => res.status(500).send("<p>Erro na obtenção das classes.</p>"))
})

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:15015/contracts/').then(value => {
    res.render('contract', {contracts: value.data.find(item => item._id === req.params.id)});
  }).catch( error => res.status(500).send("<p>Erro na obtenção das classes.</p>"))
})

router.get('/inst/:nipc', function(req, res, next) {
  axios.get('http://localhost:15015/contracts/instituicoes/'+req.params.nipc ).then(value => {
    res.render('contract', {contracts: value.data});
  }).catch( error => res.status(500).send("<p>Erro na obtenção das classes.</p>"))
})

module.exports = router;
