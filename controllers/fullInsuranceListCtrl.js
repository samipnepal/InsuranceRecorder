app.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});
app.controller('fullInsuranceListCtrl', function ($scope, $http, $timeout, $location, $rootScope, $window, Data) {

    $scope.deleteInsurance =  function(Insurance) {
        Data.post('deleteInsurance', {
            Insurance: Insurance
        }).then(function (results) {
            if(results.status === "success") {
                    $scope.list.splice($scope.list.indexOf(Insurance), 1);
                Data.toast(results);
            }
        });
    };

    Data.get('listFullInsurance').then(function (results) {
        $scope.list = results;
        $scope.currentPage = 1; //current page
        $scope.entryLimit = 10; //max no of items to display in a page
        $scope.filteredItems = $scope.list.length; //Initially for no filter
        $scope.totalItems = $scope.list.length;
    });
    $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.filter = function() {
        $timeout(function() {
            $scope.filteredItems = $scope.filtered.length;
        }, 10);
    };
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };
});