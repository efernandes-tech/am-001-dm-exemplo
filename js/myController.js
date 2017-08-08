app.controller('ToastEx', function($scope, $mdToast) {
    $mdToast.show(
        $mdToast.simple('Hello World Toast!')
            .position('right bottom')
            .hideDelay(3000)
    );
});