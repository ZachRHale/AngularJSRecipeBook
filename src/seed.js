'use strict';

var Recipe = require('./models/recipe.js');

var recipes = [
    'Pizza',
    'Beans',
    'Risotto'
];


recipes.forEach(function(recipe, index){
    Recipe.find({'title': recipe}, function(err, recipes){
        if(!err && !recipes.length) {
            Recipe.create({
                "title": recipe,
                "calories":1234,
                "ingredients":[
                    {"amount": 30, "unit": "grams", "ingredient" :"cheese"},
                    {"amount": 10, "unit": "grams", "ingredient" :"bread"},
                    {"amount": 18, "unit": "ounces", "ingredient" :"pep"}
                ]
            });
        }
    })
})