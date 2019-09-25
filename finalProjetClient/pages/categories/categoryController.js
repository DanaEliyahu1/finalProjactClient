





angular.module("myApp").controller('categoryController', function($scope, $window,webService) {
  self=this;
  webService.getCategories().then(function (response) {
    // $window.alert(response.data);
    self.categories= response.data;

 }, function (error) {
 
     self.categories = response.statusText;
 }
 );
  self.openResults=function(categoryName){
  webService.getAttractionsByCategory(categoryName).then(function (response) {
      // $window.alert(response.data);
       var result = response.data;
     ///  $window.alert(categoryName);
       $window.sessionStorage.setItem("search",JSON.stringify(result));
       $window.location="#!results";

   }, function (error) {
   
       var result = response.statusText;
   }
   );

  }
 
}); 

