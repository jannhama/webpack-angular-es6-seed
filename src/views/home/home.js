'use strict';

class HomeController {
    /* @ngInject */
    constructor() {
        console.log( 'homectrl cons.' );
        this.homeText = 'Welcome to Home!';
        this.hideItem = false;
    }

    close() {
        console.log( JSON.stringify( this, null, 2 ) );
    }
}

export default ( ngModule ) => {
    ngModule.controller( 'HomeController', HomeController );
    ngModule.directive( 'homeView', () => {
        console.log( 'directive home init' );
        return {
            restrict: 'E',
            scope: {},
            template: require('./home.html'),
            controllerAs: 'ctrl',
            controller: HomeController
        };
    } );
};
