import tpl from './nv-hello.html';

require ('./nv-hello.scss');

export default (ngModule) => {
    ngModule.directive('nvHello',() => {
        console.log('directive init');
        return {
            restric: 'E',
            scope: {},
            template: tpl,
            controllerAs: 'ctrl',
            controller: function() {
                const ctrl = this;
                console.log('Done!');
                ctrl.greeting = 'Hello world!'
            }

        };
    })
};