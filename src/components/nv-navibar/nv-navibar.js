
class NavibarController {
    /* @ngInject */
    constructor() {

    }
}


export default (ngModule) => {
    ngModule.controller('NavibarController', NavibarController);
    ngModule.directive('nvNavibar', () => {
        console.log('directive init');
        return {
            restric: 'E',
            scope: {},
            template: require('.//nv-navibar.html'),
            controllerAs: 'ctrl',
            controller: NavibarController
        };
    });
};
