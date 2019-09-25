




angular.module("myApp").controller('registerController',function($scope,webService,$window) {
    self=this;
    self.isChecked=[];

  webService.getCategories().then(function mySuccess(response) {
    self.categories=response.data;
    
  }, function myError(response) {
    self.categories=response.statusText;
    
});
webService.getQuestions().then(function mySuccess(response) {
    self.questions=response.data;
    
  }, function myError(response) {
    self.questions=response.statusText;
    
});


self.register=function(){
  var categoriesChosen=[];
  for(var i=0; i<self.categories.length;i++){
    if(self.isChecked[i]){
      categoriesChosen.push(self.categories[i]);
    }


  }
  if(Q1.value==Q2.value){
    $window.alert("Choose different questions");
    return;
  }
  webService.register(
    UserName.value,
    Password.value,
    FirstName.value,
    LastName.value,
    Email.value,
    BirthDate.value,
    City.value,
    Country.value,
    Q1.value,
    Q2.value,
    ans1.value,
    ans2.value,
    categoriesChosen
  ).then
  (function mySuccess(response) {
    $window.alert("Your Registeration is Successful ");
    $window.location="#!home";


  }, function myError(response) {
    $window.alert(response.data);
});

}



  }); 
  