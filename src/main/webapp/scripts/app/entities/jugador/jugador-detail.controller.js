'use strict';

angular.module('ligabalonApp')
    .controller('JugadorDetailController', function ($scope, $rootScope, $stateParams, entity, Jugador, Equipo) {
        $scope.jugador = entity;
        $scope.load = function (id) {
            Jugador.get({id: id}, function(result) {
                $scope.jugador = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligabalonApp:jugadorUpdate', function(event, result) {
            $scope.jugador = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
