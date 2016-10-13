(function(){
	angular.module("WebAppMaker")
		   .controller("RegisterController", RegisterController);
		
	function RegisterController($location, UserService) {
		var vm = this;
		vm.createUser = createUser;
		
		function createUser(username, password, verifyPassword) {
			if(password!==verifyPassword){
				vm.error="Password didn't match !";
			}
			else{
				UserService
					.createUser(username, password)
					.then(function(response){
						var newUser = response.data;
						if(newUser){
							$location.url("/user/"+newUser._id);
						}else{
							vm.error="Unable to create new user";
						}
					});		
			}
		}
	}
})();
