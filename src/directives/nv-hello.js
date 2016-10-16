import tpl from './nv-hello.html';

import './nv-hello.scss';
//import 'angular-ui-bootstrap/dist/ui-bootstrap-csp.css';
require('../../styles/bootstrap.min.css');

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