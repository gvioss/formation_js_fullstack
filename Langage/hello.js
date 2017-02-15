console.log('Hello');

var id = setInterval(function interval() {
    console.log('1s');
}, 1000);

setTimeout(function timeout() {
    console.log('2s');
}, 2000);

setTimeout(function timeout() {
    console.log('5s');
    clearInterval(id);
}, 5000);