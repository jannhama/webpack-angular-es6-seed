'use strict';

import tpl from './nv-greetings.html';


/* @ngInject */
class GreetingController {

    constructor(MsgService) {
        this.MsgService = MsgService;
        //this.greeting = 'Greeting earth people!';
        this.greeting = this.MsgService.getText();
    }

}


export default (ngModule) => {

    ngModule.controller('GreetingController', GreetingController);
    ngModule.directive('nvGreetings', () => {
        console.log('directive init');
        return {
            restric: 'E',
            scope: {},
            template: tpl,
            controllerAs: 'ctrl',
            controller: GreetingController
        };
    })
};