(function(){
	angular
		.module("WebAppMaker")
		.controller("EditPageController",EditPageController);
	
	function EditPageController($routeParams, PageService, $location) {
		var vm = this;
		vm.userId = $routeParams.userId;
		vm.websiteId = $routeParams.websiteId;
		vm.pageId = $routeParams.pageId;
		vm.deletePage = deletePage;
		
		function deletePage(pageId) {
			var result = PageService.deletePage(vm.pageId);
			if(result){
				$location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
			}else{
				vm.error = "Unable to delete a Page";
			}
		}
	}
})();
