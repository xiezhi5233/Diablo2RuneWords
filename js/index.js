/**
 * Created by win on 2017/6/9.
 */
var app=angular.module("app",["ui.router"]);
app.controller("ctrHome",function($scope,$http){
    $scope.sh="";
    $scope.filt="|filter:sh";
    $scope.search=[];

    $scope.btn=function(x){
        $scope.sh=x;
    };
    $http({
        url:"json/data.json",
        method:"get"
    }).success(function(d){
        $scope.data=d;
        console.log(d)
    });
});

