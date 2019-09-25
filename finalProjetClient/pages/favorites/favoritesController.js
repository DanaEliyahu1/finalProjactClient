


angular.module("myApp").controller('favoritesController', function ($window, webService) {
  self = this;
  self.condition = "+rank";
  self.favorites = JSON.parse($window.sessionStorage.getItem("favorites"));
  if ($window.sessionStorage.getItem("username") != "guest") {
    for (var i = 0; i < self.favorites.length; i++) {
      self.favorites[i].isFavorite = webService.isFavorite(self.favorites[i].attractionName);
    }
  }

  self.saveAttractions = function () {
    webService.updateMyAttractionSort().then(function mySuccess(response) {
      $window.alert(response.data);

    }, function myError(response) {
      $window.alert(response.data);

    });

  }

  self.webService = webService;

  self.addFavorite = function (attractionName, picture) {
    webService.addFavorite(attractionName, picture);
    for (var i = 0; i < self.favorites.length; i++) {
      if (self.favorites[i].attractionName == attractionName) {
        self.favorites[i].isFavorite = true;
      }
    }
  }

  self.removeFavorite = function (attractionName) {
    webService.removeFavorite(attractionName);
    for (var i = 0; i < self.favorites.length; i++) {
      if (self.favorites[i].attractionName == attractionName) {
        self.favorites[i].isFavorite = false;
      }
    }

  }
  ///********************************************************************************************************** */
  self.orderByRating = function () {
    for (var i = 0; i < self.favorites.length; i++) {
      webService.getRatingToFavorites(self.favorites, i);
    }
    self.condition = "-rating";
  }


  self.orderByCategory = function () {
    for (var i = 0; i < self.favorites.length; i++) {
      webService.getCategoryToFavorites(self.favorites, i);
    }
    self.condition = "+category";
  }
  self.swap = function (name) {
   
    var currIndex = -1;
    var currRank = -1;
    for (var i = 0; i < self.favorites.length; i++) {
      if (self.favorites[i].attractionName == name) {
        currIndex = i;
        currRank = self.favorites[i].rank;
        break;
      }
    }
    if (currRank != 1) { 
      for (var i = 0; i < self.favorites.length; i++) {
        if (self.favorites[i].rank == currRank-1) {
          self.favorites[i].rank = currRank ;
          break;
        }
      }
      self.favorites[currIndex].rank = currRank - 1;
    }
    $window.sessionStorage.setItem("favorites",JSON.stringify(self.favorites));
  }
}); 
