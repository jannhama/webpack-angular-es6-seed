class HomeController {
    /* @ngInject */
    constructor() {
        this.homeText = 'Welcome to Home!';
        this.hideItem = false;
    }
}

export default (ngModule) => {
    ngModule.directive('homeView', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./home.html'),
            controllerAs: 'ctrl',
            controller: HomeController
        };
    });
};
