(function(){
	angular
		.module("WebAppMaker")
		.factory("WebsiteService",WebsiteService);

	function WebsiteService($http) {
		var api = {
				findWebsitesForUserId : findWebsitesForUserId,
				createWebsite : createWebsite,
				deleteWebsite : deleteWebsite
		};
		return api;

		function findWebsitesForUserId(userId) {
			var url="/api/user/"+userId+"/website";
			return $http.get(url);
		}
    function createWebsite(developerId, name, desc) {
			var url="/api/user/"+developerId+"/website";
			var newWebsite = {
					name: name,
					description: desc,
					developerId: developerId
			};
			return $http.post(url,newWebsite);
		}
    function deleteWebsite(websiteId) {
			var url = "/api/website/"+websiteId;
			return $http.delete(url);
		}
	}
})();
