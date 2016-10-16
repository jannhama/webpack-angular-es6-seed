export default (ngModule) => {
    ngModule.directive('nvHello',() => {
        return {
            restric: 'E',
            scope: {},
            templateUrl: 'directives/nv-hello.html',
            controllerAs: 'ctrl',
            controller: function() {
                const ctrl = this;
                console.log('Done!');
                ctrl.greeting = 'Hello world!'
            }

        };
    })
};