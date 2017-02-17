import 'bootstrap';
import angular from 'angular';
import contactListCtrlName from './contact-list/contact-list.controller';
import contactAddCtrlName from './contact-add/contact-add.controller';
import uiRouter from 'angular-ui-router';

let module = angular.module('app.module',[
    contactListCtrlName,
    contactAddCtrlName,
    uiRouter
]);

module.config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider){

    $locationProvider.html5Mode(true);

    $stateProvider.state('contact-list', {
        url: '/',
        controller: 'ContactListCtrl',
        templateUrl: 'app/contact-list/contact-list.template.html'
    });

    $stateProvider.state('contact-add', {
        url: '/add',
        controller: 'ContactAddCtrl',
        templateUrl: 'app/contact-add/contact-add.template.html'
    })
}]);