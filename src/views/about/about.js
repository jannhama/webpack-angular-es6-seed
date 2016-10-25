class AboutController {
    /* @ngInject */
    constructor() {
        this.aboutText = 'Welcome to about!';
        this.hideItem = false;
    }
}

export default (ngModule) => {
    ngModule.controller('AboutController', AboutController);
    ngModule.directive('aboutView', () => {
        return {
            restrict: 'E',
            scope: {},
            template: require('./about.html'),
            controllerAs: 'ctrl',
            controller: AboutController
        };
    });
};
