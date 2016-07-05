define(function (require) {
    var app = require('../app');

    app.controller('about', ['$scope', function($scope) {
        $scope.name = 'about';
    }]);
});
