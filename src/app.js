import angular from 'angular';
import $ from 'jquery';
import 'angular-ui-bootstrap';
import 'angular-animate';
import 'angular-ui-router';
import routes from './config';
require('../styles/bootstrap.min.css');

const ngModule = angular.module( 'app', [ 'ui.bootstrap', 'ngAnimate', 'ui.router' ] );
require( './views' ).default( ngModule );
require( './services' ).default( ngModule );
require( './components' ).default( ngModule );
require( './config' ).default( ngModule );
