/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

import userRoute from './permissions-user-list.route';
import teamRoute from './permissions-team-list.route';
import controller from './permissions-list.controller';

export default
    angular.module('permissionsList', [])
        .controller('permissionsListController', controller)
        .config(['$routeProvider', function($routeProvider) {
            var url = userRoute.route;
            delete userRoute.route;
            $routeProvider.when(url, userRoute);
            url = teamRoute.route;
            delete teamRoute.route;
            $routeProvider.when(url, teamRoute);
        }]);
