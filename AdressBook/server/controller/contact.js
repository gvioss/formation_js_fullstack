const Contact = require('../model/contact');

module.exports.list = function(req, res, next) {
    Contact.find({})
        .then(function(contacts) {
            res.json(contacts);
        })
        .catch(next);
};

module.exports.show = function(req, res, next) {
    Contact.findById(req.params.id, function(err, contact){
        res.json(contact);
    });
};

exports.create = (req, res, next) => {
    const contact = new Contact(req.body);
    contact.save(function(err, contact){
        res.statusCode = 201;
        res.json(contact);
    });
};

module.exports.remove = function(req, res, next) {
    Contact.findByIdAndRemove(req.params.id, function(err, contact){
        res.json(contact);
    });
};