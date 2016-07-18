'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipes', function(err){
    if(err) {
        console.log('Failed connecting to Mongodb!');
    } else {
        console.log('You are connected to MongoDB!');
    }
});
