
class ExampleController {
    /* @ngInject */
    constructor() {
        this.greeting = 'This message is stored in the controller';
    }
}


export default (ngModule) => {
    ngModule.controller('ExampleController', ExampleController);
    ngModule.directive('nvHello', () => {
        console.log('directive init');
        return {
            restric: 'E',
            scope: {},
            template: require('.//nv-hello.html'),
            controllerAs: 'ctrl',
            controller: ExampleController
        };
    });
};
