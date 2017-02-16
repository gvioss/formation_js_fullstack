const Contact = require('../model/contact');

module.exports.list = function(req, res, next) {
    Contact.find({}, function(err, contacts){
        res.json(contacts);
    });
};

module.exports.show = function(req, res, next) {
    let id = req.params.id;
    let contact = Contact.findById({id}, function(err, contacts){
        res.json(contact);
    });
};