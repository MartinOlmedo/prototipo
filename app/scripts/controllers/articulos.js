'use strict';

/**
 * @ngdoc function
 * @name prototipoApp.controller:ArticulosCtrl
 * @description
 * # ArticulosCtrl
 * Controller of the prototipoApp
 */
angular.module('prototipoApp')
  .controller('ArticulosCtrl', function ($scope) {
    $scope.posts=[
    	{
    		title:"Alimentos buenos para la salud",
    		content:'Etiam id varius nisi, et hendrerit nisl. In hac habitasse platea dictumst. Vestibulum tempor tempus dui sed auctor. Proin viverra cursus volutpat. Aliquam dignissim nisl sollicitudin sapien pharetra, non bibendum mauris blandit. Sed sem libero, pulvinar ut orci sit amet, viverra vulputate turpis. Pellentesque non vulputate libero. Etiam tincidunt ac turpis eu ornare. Sed pulvinar sagittis augue, a dapibus ex sollicitudin at. Mauris at pretium tellus.'
    	},
    	{
    		title:"Alimentación saludable",
    		content:'Morbi vitae ornare nibh. Proin nisl orci, elementum sed luctus et, efficitur vitae sapien. Sed finibus nulla eu bibendum tempor. Maecenas suscipit mi et ex hendrerit condimentum. Cras odio ante, dapibus eget purus vel, lacinia sagittis diam. Proin quis aliquam magna, ut viverra nulla. Nullam auctor eros sem, sed congue lectus efficitur sit amet.'
    	},
    	{
    		title:"Limita tu cantidad de hidratos de carbono",
    		content:'Vivamus feugiat felis vel eleifend pretium. Sed ut enim porttitor, vestibulum sapien nec, imperdiet nunc. Nulla vehicula, arcu sit amet aliquam pellentesque, dui elit placerat purus, a eleifend diam felis id magna. In consequat erat molestie diam mollis feugiat. Suspendisse ut magna ac nunc faucibus consequat. Aliquam at tincidunt magna, quis interdum diam. Duis arcu mi, pulvinar eu ex in, iaculis porttitor justo. Proin dolor nisi, faucibus sit amet dolor in, suscipit suscipit lacus.'
    	},
    ];
  });
