class NavibarController {
    /* @ngInject */
    // constructor() {
    //
    // }
}


export default (ngModule) => {
    ngModule.directive('nvNavibar', () => {
        return {
            restric: 'E',
            scope: {},
            template: require('.//nv-navibar.html'),
            controllerAs: 'ctrl',
            controller: NavibarController
        };
    });
};
