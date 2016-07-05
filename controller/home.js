define(['app','layer','css!../assets/bootstrap/bootstrap-css'],function (app, layer, require) {


    app.controller('home', function($scope) {
        $scope.name = 'Home';
    });
    
	requirejs.onError = function (err) {
	    console.log(err.requireType);
	    if (err.requireType === 'timeout') {
	        console.log('modules: ' + err.requireModules);
	    }
	
	    throw err;
	};
});
