const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/links', {useNewUrlParser: true, useUnifiedTopology: true});

const Link = mongoose.model('Links', {
    link: String,
    description: String
});

module.exports = Link;