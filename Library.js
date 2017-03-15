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


    $scope.add = function() {

        $scope.videos = [

            {
                "url": "https://www.youtube.com/watch?v=6vE0oFFSE7c",
                "date": "2016-05-11"
            }
        ];

console.log($scope.video_url)


        $scope.videos[video_count].url = $scope.video_url;
    }
});

app.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        var video_id = url.split('v=')[1].split('&')[0];
        return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
    };
}])