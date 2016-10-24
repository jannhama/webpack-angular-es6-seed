'use strict';

class AboutController {
    /* @ngInject */
    constructor() {
        console.log( 'Aboutctrl cons.' );
        this.aboutText = 'Welcome to about!';
        this.hideItem = false;
    }

    close() {
        console.log( JSON.stringify( this, null, 2 ) );
    }
}

export default ( ngModule ) => {
    ngModule.controller( 'AboutController', AboutController );
    ngModule.directive( 'aboutView', () => {
        console.log( 'directive About init' );
        return {
            restrict: 'E',
            scope: {},
            template: require('./about.html'),
            controllerAs: 'ctrl',
            controller: AboutController
        };
    } );
};
