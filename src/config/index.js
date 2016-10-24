/**
 * Created by Z800 on 17.10.2016.
 */
'use strict';

function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    /* @ngInject */

    console.log('Config');

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
    console.log(JSON.stringify('config export', null, 2));
    ngModule.config(routes);
    ngModule.run(($state) => {
        $state.transitionTo('home');
    });
};
