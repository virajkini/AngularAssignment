var app = angular.module("mylibrary",['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

        .when("/", {
            templateUrl : "home.html"
        })

        .when("/add", {
            templateUrl : "video_lists.html",
            controller : "videocontroller"


        });


});



app.controller("videocontroller",["$scope","$sce",function($scope,$sce) {


    var video_count = 0;
    $scope.myLibrary = [];

    $scope.add = function()
    {


        var getId = function (url) {

            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);

            if (match && match[2].length == 11) {
                return match[2];
            } else {
                return 'error';
            }
        }


        var str="https://www.youtube.com/watch?v=EpHqeHF8NM0&t=1s";

        var myId = getId(str);

        $scope.myCode = '"//www.youtube.com/embed/'+ myId + '"';

          $scope.mycode= $sce.trustAsResourceUrl($scope.myCode);



        $scope.myLibrary[video_count] = $scope.myCode;
        video_count++;
        console.log($scope.myLibrary[0])
    }
}])
