class HomeController {
    /* @ngInject */
    constructor() {
        this.homeText = 'Welcome to Home!';
        this.hideItem = false;
        if (NODE_ENV==='development') {
            console.log('We are in development mode!');
        }

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
