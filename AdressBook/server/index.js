const express = require('express');
const contact = require('./route/contact');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/adressbook');

const app = express();

app.use('/api/contacts', contact);

app.listen(8080, function(){
    console.log('Server listening');
});