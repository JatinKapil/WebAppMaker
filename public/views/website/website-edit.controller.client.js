(function(){
	angular
		.module("WebAppMaker")
		.controller("EditWebsiteController",EditWebsiteController);

	function EditWebsiteController($location, $routeParams, WebsiteService) {
		var vm = this;
		vm.userId = $routeParams.userId;
		vm.websiteId = $routeParams.websiteId;

		vm.deleteWebsite = deleteWebsite;

		function deleteWebsite(websiteId) {
			WebsiteService
				.deleteWebsite(websiteId)
				.then(function(response){
					$location.url("/user/"+vm.userId+"/website");
				},function(error){
					vm.error = "Unable to delete website";
				});
		}
	}
})();
