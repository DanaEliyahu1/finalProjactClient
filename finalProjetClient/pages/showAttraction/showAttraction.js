


angular.module("myApp").controller('showAttractionController', function ($scope, $http, $window, webService) {

  self = this;
  self.attractionName = $window.sessionStorage.getItem("attraction");

    webService.viewAttraction(self.attractionName)
    .then(function mySuccess(response) {
      self.currAttraction = response.data;

    }, function myError(response) {
      self.currAttraction = response.statusText;

    });

  self.addFavorite = function (attractionName,picture) {
    webService.addFavorite(attractionName,picture);
    self.isFavorite= webService.isFavorite(self.attractionName); 
  }

  self.removeFavorite = function (attractionName) {
    webService.removeFavorite(attractionName);
    self.isFavorite= webService.isFavorite(self.attractionName); 
  }
 if($window.sessionStorage.getItem("username")!="guest"){
    self.isFavorite= webService.isFavorite(self.attractionName);
 }
 webService.getLastReviews(self.attractionName)
 .then(function mySuccess(response) {
   self.reviews = response.data;


 }, function myError(response) {
  self.reviews = response.data;

 });

 self.addRating=function(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = yyyy + '-' +mm+ '-' + dd  ;
   webService.addRating(rating.value , userReview.value,today,self.attractionName).then(function mySuccess(response) {
    $window.alert("Your review was sent");
 
 
  }, function myError(response) {
    $window.alert(response.data);
 
  });
  
   
 }

 


});

