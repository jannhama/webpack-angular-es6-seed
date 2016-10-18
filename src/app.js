//import 'babel-polyfill';
//const angular = require('angular');


import angular from 'angular';
import 'angular-ui-bootstrap';
import 'angular-animate';
import 'angular-ui-router';
import routes from './config';

const ngModule = angular.module('app',['ui.bootstrap','ngAnimate','ui.router']);
require('./views').default(ngModule);
require('./services').default(ngModule);
require('./components').default(ngModule);



require('./config').default(ngModule);






import cats from './cats';
//import component from './component';
import $ from 'jquery';

//import 'angular';


//console.log(ngModule);

/*
$('<h1>Cats</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const cat of cats) {
    $('<li></li>').text(cat).appendTo(ul);
}
*/

/*
const compy = new component();
compy.mount();
*/

