require.config({
    baseUrl: './',
    paths: {
    	'app' : 'assets/angular/app',
        'angular': 'assets/angular/angular.min',
        'config-routes': 'assets/angular/config-routes',
        'angular-ui-router': 'assets/angular-ui-router/angular-ui-router.min',
        'angular-async-loader': 'assets/angular-async-loader/angular-async-loader.min',
        'jquery' : 'assets/jquery/jquery-2.1.1',
        'layer' : 'assets/layer/layer',
        'bootstrap' : 'assets/bootstrap/bootstrap-js',
        'css' : 'assets/requirejs/require-css'
    },
    shim: {
    	  'layer' : ['jquery'],
    	  'angular-routes' : ['angular'],
    	  'bootstrap' : ['jquery'],
          'angular': {exports: 'angular'},
          'angular-ui-router': {deps: ['angular']}
          
    }
});

require(['angular', 'app','config-routes','bootstrap'], function (angular) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
        angular.element(document).find('html').addClass('ng-app');
    });
});


