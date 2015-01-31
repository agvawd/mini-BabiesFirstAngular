var app = angular.module("friendsList");
app.controller("mainCtrl", function($scope){
	$scope.friends = ["Bryce", "Justin", "Spencer", "What's his bucket"];

	$scope.addFriend = function(){
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = '';
	}
});