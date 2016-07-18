'use strict';

var mongoose = require('mongoose');

var ingredientSchema = new mongoose.Schema({
    amount: Number, 
    unit: String, 
    ingredient: String
});

var recipeSchema = new mongoose.Schema({
    title: String, 
    calories: Number, 
    ingredients: [ingredientSchema]
});


var model = mongoose.model('Recipe', recipeSchema);

module.exports = model;