'use strict';

import tpl from './home.html';



/* @ngInject */
class HomeController {

    constructor() {
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
        console.log('directive init');
        return {
            restric: 'E',
            scope: {},
            template: tpl,
            controllerAs: 'ctrl',
            controller: HomeController
            };
    })
};