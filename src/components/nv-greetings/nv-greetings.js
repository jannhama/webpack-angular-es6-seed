'use strict';

import tpl from './nv-greetings.html';

class GreetingController {
    /* @ngInject */
    constructor( MsgService ) {
        console.log( JSON.stringify( 'greetins', null, 2 ) );
        this.MsgService = MsgService;
        console.log( JSON.stringify( this.MsgService, null, 2 ) );
        this.greeting = this.MsgService.getText();
    }

    getText() {
        return this.MsgService.getText();
    }
}

export default ( ngModule ) => {
    ngModule.controller( 'GreetingController', GreetingController );
    ngModule.directive( 'nvGreetings', () => {
        console.log( 'directive init' );
        return {
            restric: 'E',
            scope: {},
            template: tpl,
            controllerAs: 'ctrl',
            controller: GreetingController
        };
    } );
};
