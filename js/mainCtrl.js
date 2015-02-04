var app = angular.module("friendsList");
app.controller("mainCtrl", function($scope, friendService){
	$scope.friends = friendService.getFriends();

	$scope.addFriend = function(){
		friendService.addNewFriend($scope.newFriend);
		$scope.newFriend = '';
	};

	$scope.removeFriend = function() {
		friendService.removeOldFriend($scope.oldFriend);
		$scope.oldFriend = '';	
	}

	$scope.clearFriends = function() {
		$scope.friend = friendService.clearAllFriends();
	}

	var toggle = true;
	$scope.sortFriends = function() {
		toggle = friendService.sortYourFriends(toggle); 
		$scope.friends = friendService.getFriends();
	}
});