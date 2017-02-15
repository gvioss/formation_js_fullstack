var logClosure = function(msg) {
    // portée de closure (sauvegardée)
    return function() {
        return msg;
    };
};

var logBonjour = logClosure('Bonjour');
console.log(logBonjour());

var logCoucou = logClosure('Coucou');
console.log(logCoucou());

var timeoutClosure = function() {
    setTimeout(function() {

    }, 1000);
};

var prenoms = ['Romain', 'Jean'];

for (var i=0; i<prenoms.length; i++) {
    var prenom = prenoms[i];
    setTimeout(function() {
        console.log(prenom);
    }, 1000);
}

prenoms.forEach(function(prenom) {
    setTimeout(function() {
        console.log(prenom);
    }, 1000);
});