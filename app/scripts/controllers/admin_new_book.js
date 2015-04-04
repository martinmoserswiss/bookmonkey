bmApp.controller('AdminNewBookCtrl', 
    function ($scope, $location, BookDataService) {
        $scope.book = {};
    $scope.submitBtnLabel = 'Buch anlegen';
    
    $scope.submitAction = function() {
        BookDataService.storeBook($scope.book);
        goToAdminListView();
    };
    
    $scope.cancelAction = function() {
        goToAdminListView();
    };
    
    $scope.goToAdminListView = function() {
        $location.path('/admin/books');
    };
});