import './style.css';

import angular from 'angular';
import router from '@uirouter/angularjs';
import getParameterNames from 'get-parameter-names';

import * as configs from './configs';
import * as controllers from './controllers';

const Beangulared = angular.module('Beangulared', [router]);

for (let key in configs) {
  const config = configs[key];
  const deps = getParameterNames(config);
  Beangulared.config([...deps, config]);
}

for (let name in controllers) {
  const controller = controllers[name];
  const deps = getParameterNames(controller);
  Beangulared.controller(name, [...deps, controller]);
}
