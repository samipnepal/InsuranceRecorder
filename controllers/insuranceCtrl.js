app.controller('insuranceCtrl', function ($scope, $http, $timeout, $location, $rootScope, Data, uploadFile) {

    $scope.Insurance = {ownerName: 'Vijeesh', vehicleNumber: 'KA02HK4400', mobileNumber: '958769585', policyNumber: '98547565', policyCompany: 'Life Insurance',
        expiryDate: '', policyImage: '', rcImage:''};

    $scope.addInsurance = function() {
        var rc_url = "api/v1/upload_rc_image.php";
        if($scope.rcImage && $scope.rcImage.length === 1) {
            uploadFile.uploadFiletoFolder($scope.rcImage[0], rc_url, successRcUpload, error);
        } else if ($scope.policyImage && $scope.policyImage.length === 1){
            uploadFile.uploadFiletoFolder($scope.rcImage[0], rc_url, successRcUpload, error);
        } else {

        }
    };
    
    function successRcUpload(data) {
        $scope.Insurance.rcImage = data.image_name;
        if($scope.policyImage && $scope.policyImage.length === 1) {
            var policy_url = "api/v1/upload_policy_image.php";
            uploadFile.uploadFiletoFolder($scope.policyImage[0], policy_url, successPolicyUpload, error);
        } else {
            Data.post('addInsurance', {
                Insurance: $scope.Insurance
            }).then( function(results) {
                Data.toast(results);
            });
        }
    }

    function successPolicyUpload(data) {
        $scope.Insurance.policyImage = data.image_name;
        Data.post('addInsurance', {
            Insurance: $scope.Insurance
        }).then( function(results) {
            if(results.status === "success") {
                $scope.Insurance = {ownerName: '', vehicleNumber: '', mobileNumber: '', policyNumber: '', policyCompany: '',
                    expiryDate: '', policyImage: '', rcImage:''};
                var rc_image = document.getElementById("rcImage");
                rc_image.value = rc_image.defaultValue;
                var policy_image = document.getElementById("policyImage");
                policy_image.value = policy_image.defaultValue;
                Data.toast(results);
            }
        });
    }
    
    function error() {
        alert("error uploading file");
    }

    $scope.uploadedRcImage = function(element) {
        var reader = new FileReader();
        reader.onload = function(event) {
            $scope.$apply(function($scope) {
                $scope.rcImage = element.files;
                $scope.src = event.target.result
            });
        };
        reader.readAsDataURL(element.files[0]);
    };

    $scope.uploadedPolicyImage = function(element) {
        var reader = new FileReader();
        reader.onload = function(event) {
            $scope.$apply(function($scope) {
                $scope.policyImage = element.files;
                $scope.src = event.target.result
            });
        };
        reader.readAsDataURL(element.files[0]);
    }
});

app.service('uploadFile', ['$http', function ($http) {

    this.uploadFiletoFolder = function(file, uploadUrl, success,error){
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined,'Process-Data': false}
        })
            .success(function(data){
                success(data);
            })
            .error(function(){
                error();
            });
    }
}]);