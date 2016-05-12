angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('lista', {
    url: '/reports',
    templateUrl: 'templates/lista.html',
    controller: 'listaCtrl'
  })

  .state('adicionar', {
    url: '/add-report',
    templateUrl: 'templates/adicionar.html',
    controller: 'adicionarCtrl'
  })

$urlRouterProvider.otherwise('/reports')

  

});