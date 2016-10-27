
class ExampleController {
    /* @ngInject */
    constructor() {
        this.greeting = 'This message is stored in the controller';
    }
}


export default (ngModule) => {
    ngModule.directive('nvHello', () => {
        return {
            restric: 'E',
            scope: {},
            template: require('.//nv-hello.html'),
            controllerAs: 'ctrl',
            controller: ExampleController
        };
    });
};
