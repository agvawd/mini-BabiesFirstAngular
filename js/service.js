var app = angular.module("friendsList");

app.service('friendService', function(){
	var friends = ["Bryce", "Justin", "Spencer"];

	this.addNewFriend = function(friend) {
		friends.push(friend);
	}

	this.removeOldFriend = function(name) {
		for(var i = 0; i < friends.length; i++) {
			if(friends[i] === name) {
				friends.splice(i, 1);
			}
		}
	};

	this.clearAllFriends = function() {
		friends.length = 0;
	}

	this.sortYourFriends = function(toggle) {
		if (toggle) {
			friends.sort();
			return !toggle;
		}
		else {
			friends.sort();
			friends.reverse();
			return !toggle;
		}
	}

	this.getFriends = function() {
		return friends;
	};
});