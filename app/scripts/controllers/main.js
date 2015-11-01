'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('MainCtrl', function ($scope) {
    
  	var baseURL ='http://lorempixel.com/960/450/';
    $scope.setInterval=5000;

    $scope.slides=[
    	{
    		title: 'Aprende a mantenerte en forma',
    		image: baseURL+'sports/',
    		text: 'Practica algún deporte todos los días !!'
    	},
    	{
    		title: 'Buena alimentación',
    		image: baseURL+'food/',
    		text: 'Importancia de frutas y verduras en la dieta !!'
    	},
    	{
    		title: 'Contacto con la naturaleza',
    		image: baseURL+'nature/',
    		text: 'Manten la armonia con la naturaleza !!'
    	}
    ];

    var baseURL ='http://lorempixel.com/200/200/';
    $scope.contenido=[
        {
            title: 'Sobre nosotros',
            img: baseURL+'people',
            sumario: 'Practica algún deporte todos los días !!'
        },
        {
            title: 'Nuestros servicios',
            img: baseURL+'business',
            sumario: 'Importancia de frutas y verduras en la dieta !!'
        },
        {
            title: 'Contáctanos',
            img: baseURL+'transport',
            sumario: 'Manten la armonia con la naturaleza !!'
        }
    ];



  });
