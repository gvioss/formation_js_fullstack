// On manipule bcp d'objets existants
Math.random();
console.log(typeof Math); // object
console.log(typeof console); // object

// On peut créer des objets sans créer de classe (ici syntaxe Object Literal)
var contact = {
    prenom: 'Romain',
    hello: function() {
        return 'Bonjour je suis ' + this.prenom;
    }
};

console.log(contact.hello()); // Bonjour je suis Romain

// Sauf verrou, tous les objets sont extensibles
contact.nom = 'Bohdanowicz';

Math.sum = function(a, b) {
    return a + b;
};

console.log(Math.sum(1, 2)); // 3

// Boucler sur les propriétés
for (var prop in contact) {
    console.log(prop); // clé
    console.log(typeof prop); // 'string'

    if (typeof contact[prop] !== 'function') {
        console.log(contact[prop]); // valeur
    }

}

// Variante pour accéder au contenu d'un objet []
console['log'](contact['prenom']); // Romain

// Supprimer une clé
delete Math.sum;

// On peut simuler une classe (en tout cas l'écriture)
// utile si ce format d'objet est récurrent (fonction constructeur)
var Contact = function(prenom) {
    this.prenom = prenom;
};

var romain = new Contact('Romain');
console.log(romain.prenom); // Romain
console.log(typeof romain); // object
console.log(typeof Contact); // function
console.log(romain instanceof Contact); // true
console.log(romain instanceof Object); // true (toujours vrai pour un objet)
console.log(romain instanceof String); // false

var eric = new Contact('Eric');
console.log(eric.prenom); // Eric

// Exemple de "classe" avec des méthodes dans la fonction constructeur
// Mauvaise pratique car les méthodes sont dupliquées
var Coord = function(x, y) {
    this.getX = function() {
        return x;
    };
    this.getY = function() {
        return y;
    };
};

var p1 = new Coord(3, 5);
console.log(p1.getX()); // 3
console.log(p1.getY()); // 5
var p2 = new Coord(10, 4);
console.log(p1.getX === p2.getX); // false

// Exemple de "classe" avec des méthodes dans le prototype de la fonction constructeur
// Bonne Pratique
var Coord = function(x, y) {
    this._x = x;
    this._y = y;
};

Coord.prototype.getX = function() {
    return this._x;
};

Coord.prototype.getY = function() {
    return this._y;
};

Coord.getClass = function() {
    return 'Coord'
};

var p1 = new Coord(3, 5);
console.log(p1._x); // 3
console.log(p1.getX()); // 3
console.log(p1.getY()); // 5
console.log(Coord.getClass()); // Coord
var p2 = new Coord(10, 4);
console.log(p1.getX === p2.getX); // true

console.log(p1.hasOwnProperty('_x')); // true
console.log(p1.hasOwnProperty('getX')); // false

console.log(p1.toto); // undefined

for (var prop in p1) {
    if (p1.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

// Utilisation courante du prototype
var nbs = [12, 24, 1];

var result = nbs.reduce(function(acc, val) {
    return acc + val;
}, 0);

console.log(result);

var sum = function () {
    return Array.prototype.reduce.call(arguments, (acc, val) => acc + val, 0);
    /*
     return Array.prototype.reduce.call(arguments, function(acc, val) {
     return acc + val;
     }, 0);
     */
};

console.log(sum(1, 2, 3, 4)); // 10

// Simuler de l'héritage

var Coord3d = function(x, y, z) {
    Coord.call(this, x, y);
    this._z = z;
};

var p3 = new Coord3d(33, 20, 32);
console.log(p3._x); // 10

// Pattern options
var createButton = function (value, width, height, clickCb) {

};

createButton(false, false, false, function() {});

var createButton = function(options) {
    options = options || {};
    options.value = options.value || 'Valider';
    options.width = options.width || 100;
    options.height = options.height || 30;
    options.clickCb = options.clickCb || null;
};

createButton({
    clickCb: function() {

    }
});