const mongoose = require('mongoose');

let Movie = require('../config/db.js')

mongoose.connect(Movie.DNS, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});