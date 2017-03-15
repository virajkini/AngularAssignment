var app = angular.module("mylibrary",['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl : "home.html"
        })

        .when("/add", {
            templateUrl : "video_lists.html",
            controller : "controller"


        });


});




app.controller("controller", function ($scope) {

    var video_count = 0;

    $scope.videos=[];
    $scope.add = function() {






        $scope.videos[video_count] = {"url":$scope.video_url}

        video_count++


    }
});

app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        var video_id = url.split('v=')[1].split('&')[0];
        return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
    };
}])
