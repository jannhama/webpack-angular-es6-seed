function routes($stateProvider) {
    /* @ngInject */

    $stateProvider
        .state({
            name: 'home',
            url: '/',
            template: '<home-view></home-view>',
        })
        .state({
            name: 'about',
            url: '/about',
            template: '<about-view></about-view>',
        });
}

export default (ngModule) => {
    ngModule.config(routes);
    ngModule.run(($state) => {
        $state.transitionTo('home');
    });
};
