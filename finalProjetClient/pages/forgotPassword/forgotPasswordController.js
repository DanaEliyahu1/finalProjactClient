




angular.module("myApp").controller('forgotPasswordController', function ($scope, webService, $window) {
  self = this;

  webService.getQuestions().then(function mySuccess(response) {
    self.questions = response.data;

  }, function myError(response) {
    self.questions = response.statusText;

  });
self.forgotPassword=function(){
  webService.forgotPassword(UserName.value,Q1.value,ans1.value).
  then(function mySuccess(response) {
    $window.alert(response.data);

  }, function myError(response) {
    $window.alert(response.data);

  });
}
});
