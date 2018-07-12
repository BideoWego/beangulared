import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import Popper from 'popper.js';
window.Popper = Popper;

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import angular from 'angular';
import router from '@uirouter/angularjs';

import configs from './configs';
import services from './services';
import controllers from './controllers';

/**
 * @namespace Beangulared
 */
const Beangulared = angular.module('Beangulared', [router]);

configs(Beangulared);
services(Beangulared);
controllers(Beangulared);
