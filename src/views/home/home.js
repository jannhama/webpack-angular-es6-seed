'use strict';

import tpl from './home.html';




class HomeController {
    /* @ngInject */
    constructor() {
        console.log('homectrl cons.');
        this.homeText = 'Welcome to Home!';
        this.bool = false;
    }

    close() {
        console.log(JSON.stringify(this, null, 2));
    }

}


export default (ngModule) => {

    ngModule.controller('HomeController', HomeController);
    ngModule.directive('homeView', () => {
        console.log('directive home init');
        return {
            restrict: 'E',
            scope: {},
            template: tpl,
            controllerAs: 'ctrl',
            controller: HomeController
            };
    })
};