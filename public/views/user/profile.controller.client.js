(function(){
	angular.module("WebAppMaker")
	.controller("ProfileController", ProfileController);
		
	function ProfileController($routeParams, UserService, $location) {
		var vm = this;
		vm.updateUser = updateUser;		
		vm.unRegister = unRegister;
		var id = $routeParams.id;
		
		function init() {
			UserService
				.findUserById(id)
				.then(function(response){
					vm.user = response.data;
				});
		}
		init();
		
		function updateUser(newUser) {
			UserService
				.updateUser(id, newUser)
				.then(function(response) {
					vm.success = "Updated successfully";
				}, function(error) {
					vm.error = "Unable to update user";
				});
		}
		
		function unRegister() {
			UserService
				.deleteUser(id)
				.then(function(response) {
					console.log("yay");
					$location.url("/login");
				}, function(error) {
					vm.error = "Unable to remove user";
				});
		}
	}
})();
