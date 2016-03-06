var conceptDictionary = angular.module('conceptDictionary', 
		['ngRoute', 'conceptDictControllers', 'conceptDictServices']);

conceptDictionary.config(['$routeProvider',
                    function($routeProvider) {
                      $routeProvider.
                        when('/class-list', {
                          templateUrl: 'partials/class-list.html',
                          controller: 'ClassesListCtrl',
                          resolve: {
                        	  loadClasses : function(ClassesService){
                        		  return ClassesService.getAll();
                        	  }
                          }
                        }).
                        when('/class-list/add-class', {
                        	templateUrl: 'partials/class-add.html'                      		
                        }).
                        when('/class-list/:classUUID', {
                        	templateUrl: 'partials/class-edit.html',
                        	controller: 'ClassesEditCtrl',
                        }).
                        otherwise({
                          redirectTo: '/class-list'
                        });
                    }]);

