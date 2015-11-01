'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:GaleriaCtrl
 * @description
 * # GaleriaCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('GaleriaCtrl', function ($scope) {
    var pictures = $scope.pictures=[];

    var baseURL = "http://lorempixel.com/300/180/";

    var titles = ["Comida sana", "Motos Rápidas","Casas de Campo","Barcos lujosos"];
    var keyWords = ["food", "animals","city","fashion"];
    var dummyText = "Morbi vitae ornare nibh. Proin nisl orci, elementum sed luctus et,pibus eget purus vel, lacinia sagittis diam. Proin quis aliquam magna, ut viverra nulla. Nullam auctor eros sem, sed congue lectus efficitur sit amet.";

    $scope.addPics = function(i){
    	pictures.push({
    		url:baseURL+keyWords[i],
    		title:titles[i],
    		sumary:dummyText
    	});
    };
    for (var i = 0; i<4; i++) {
    	$scope.addPics(i);
    };
  });
