import angular from 'angular';

let module = angular.module('contact-add.controller',[]);

class ContactAddCtrl {
    constructor($http, $scope){
        console.log('ContactAddCtrl');
    }
}

ContactAddCtrl.$inject = ['$http', '$scope'];

module.controller('ContactAddCtrl', ContactAddCtrl);

export default module.name;