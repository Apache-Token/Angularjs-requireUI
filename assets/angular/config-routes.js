define(function (require) {
	
    var app = require('./app');

    app.run(['$state', '$stateParams', '$rootScope', function ($state, $stateParams, $rootScope) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }]);
	
	//配置常量
	app.constant("http", "");
	app.constant("errorMessage", "服务器异常,请稍后重试!")
	
	//配置路由
    app.config(['$stateProvider', '$urlRouterProvider','$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    	
    	//去掉URL的#
    	//$locationProvider.html5Mode(true);
    	//默认的首页
        $urlRouterProvider.otherwise('/home');
        
        //禁用ajax请求缓存
        if(!$httpProvider.defaults.headers.get){
        	$httpProvider.defaults.headers.get = {};
        }
        //配置http发送模式
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
        $httpProvider.defaults.transformRequest = function(data){
        	//当参数不为空的时候
        	if(data){
        		return JSON.stringify(data);
        	}
        }
		//页面跳转
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'page/home/home.html',
                controllerUrl: 'controller/home',
                controller: 'home',
                css : '../assets/bootstrap/bootstrap-css.css'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'page/about/about.html',
                controllerUrl: 'controller/about',
                controller: 'about'
            })
    }]);
   
   
   //Service
   
   app.service("httpService",function($http, http, errorMessage){
   	//带错误参数的POST请求
   	this.post = function(URL, params, success, error){
   		$http.post(http + URL, params).success(function(resp){
   			result(resp, success, error);
   		}).error(function(resp){
   			layer.msg(errorMessage);
   		})
   	}
   	
   //带错误参数的GET请求
   this.get = function(URL, success, error){
   		$http.get(http + URL).success(function(resp){
   			result(resp, success, error);
   		}).error(function(resp){
   			layer.msg(errorMessage);
   		})
   }
   
   
   })
   
   
});
