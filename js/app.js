var app = angular.module('exemplo', ['ngMaterial']);

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {
            'default': '400',
            'hue-1': '100',
            'hue-2': '600',
            'hue-3': 'A100'
        })
        .accentPalette('orange')
        .warnPalette('yellow')
        .backgroundPalette('grey');
});