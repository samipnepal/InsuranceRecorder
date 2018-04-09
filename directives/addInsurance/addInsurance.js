app.directive('addInsurance', function(uploadManager){
  return {
    restrict: 'A',
    templateUrl:'directives/addInsurance/addInsurance.html',
	controller: 'insuranceCtrl',
      link: function (scope, element, attrs) {
          $(element).fileupload({
              dataType: 'text',
              add: function (e, data) {
                  uploadManager.add(data);
              },
              progressall: function (e, data) {
                  var progress = parseInt(data.loaded / data.total * 100, 10);
                  uploadManager.setProgress(progress);
              },
              done: function (e, data) {
                  uploadManager.setProgress(0);
              }
          });
      }
  };
 
});
