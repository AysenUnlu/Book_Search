'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our books
var bookSchema = mongoose.Schema({

    title: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter a title.']
    },
    authors: {
        type: [String],
        min: [1, 'Please enter at least one author for the book'],
        required: [false, 'Please enter author(s)']
    },
    description: {
        type: String,
        min: [10, 'Too short of description'],
        required: [false, 'Please enter the description of the book']
    },
    image: {
        type: String,
        min: [10, 'The length of the image address should be more than 10 characters'],
        required: [false, 'Please enter image for the book']
    },
    link: {
        type: String,
        min: [10, 'The length of the link address should be more than 10 characters'],
        required: [false, 'Please enter the link for the book']
    },
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Book', bookSchema);