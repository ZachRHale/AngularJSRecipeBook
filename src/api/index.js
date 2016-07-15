'use strict';

var express = require('express');
var recipes = require('../../mock/recipes.json');
var router = express.Router();

router.get('/recipes', function(req, res){
    res.json({recipes: recipes});
});

module.exports = router;