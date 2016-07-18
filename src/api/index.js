'use strict';

var express = require('express');

var Recipe = require('../models/recipe');
var router = express.Router();

router.get('/recipes', function(req, res){
    Recipe.find({}, function(err, recipes){
        if(err) {
            return res.status(500).json({message: err.message});
        } else {
            res.json({recipes: recipes});
        }
    });   
});

router.post('/recipes', function(req, res) {
    var recipe = req.body;
    Recipe.create(recipe, function(err, recipe){
        if(err) {
            return res.status(500).json({err: err.message});
        }

    });

    res.send(recipe);
});

module.exports = router;