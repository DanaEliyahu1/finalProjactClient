let app = angular.module('myApp', ["ngRoute"])

// config routes
app.config(function ($routeProvider) {
    $routeProvider
        // homepage
        .when('/', {
            // this is a template
            templateUrl: 'pages/home/home.html',
            controller: 'homeController as homeCtrl'
        })
        // about
        .when('/about', {
            // this is a template url
            templateUrl: 'pages/about/about.html',
            controller: 'aboutController as abtCtrl'
        })
        // poi
        .when('/poi', {
            templateUrl: 'pages/poi/poi.html',
            controller: 'poiController as poiCtrl'
        })

        // categories
        .when('/categories', {
            templateUrl: 'pages/categories/categories.html',
            controller: 'categoryController as categoryCtrl'
        })

        .when('/favorites', {
            templateUrl: 'pages/favorites/favorites.html',
            controller: 'favoritesController as favoritesCtrl'
        })

        .when('/showAttraction', {
            templateUrl: 'pages/showAttraction/showAttraction.html',
            controller: 'showAttractionController as showAttractionCtrl'
        })

        .when('/results', {
            templateUrl: 'pages/results/results.html',
            controller: 'resultsController as resultsCtrl'
        })
        .when('/register', {
            templateUrl: 'pages/register/register.html',
            controller: 'registerController as registerCtrl'
        })
        .when('/forgotPassword', {
            templateUrl: 'pages/forgotPassword/forgotPassword.html',
            controller: 'forgotPasswordController as forgotPasswordCtrl'
        })

        // other
        .otherwise({ redirectTo: '/' });

});