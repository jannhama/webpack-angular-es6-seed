'use strict';

import tpl from './nv-hello.html';



/* @ngInject */
class ExampleController {

    constructor() {
        this.greeting = 'Hello THere!';
    }

}


export default (ngModule) => {

    ngModule.controller('ExampleController', ExampleController);
    ngModule.directive('nvHello', () => {
        console.log('directive init');
        return {
            restric: 'E',
            scope: {},
            template: tpl,
            controllerAs: 'ctrl',
            controller: ExampleController
            };
    })
};