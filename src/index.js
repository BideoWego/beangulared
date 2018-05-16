import './style.css';

import angular from 'angular';
import router from '@uirouter/angularjs';

import configs from './configs';
import controllers from './controllers';

const Beangulared = angular.module('Beangulared', [router]);

configs(Beangulared);
controllers(Beangulared);
