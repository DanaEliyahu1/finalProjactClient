




// login controller
app.controller("loginController", function ($scope, webService, $window, $rootScope) {
    self = this;
    $rootScope.currUser = "guest";
    $window.sessionStorage.setItem("username", "guest");


    self.login = function () {   //$window.alert(JSON.stringify(username.value));
        var result = webService.login(username.value, password.value).then(function (response) {
            $window.sessionStorage.setItem("token", response.data);
            $window.sessionStorage.setItem("username", username.value);
            $rootScope.currUser = username.value;
            $window.location="#!home";
            //self.getMyFavoriteAttractions();
            webService.getFavoriteAttractions()
                .then(function mySuccess(response) {
                    $window.sessionStorage.setItem("favorites", JSON.stringify(response.data));
                    $rootScope.favoriteCount=response.data.length;
                }, function myError(response) {
                    self.favorites = response.data;

                });
            $window.alert("you have logged in successfully");

        }, function (error) {
            $window.alert(JSON.stringify(error.data));

        }
        );
    }
    self.logOut = function () {
        $window.sessionStorage.setItem("token", "");
        $window.sessionStorage.setItem("username", "guest");
        $rootScope.currUser = "guest";
        $window.location="#!home";
    }


    self.currUser = function () {
        return webService.currUser();
    }

    $rootScope.currUser = "guest";

});