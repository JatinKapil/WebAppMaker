(function(){
	angular
		.module("WebAppMaker")
		.controller("NewWidgetController",NewWidgetController);
	
	function NewWidgetController($routeParams, WidgetService) {
		var vm = this;
		vm.userId = $routeParams.userId;
		vm.websiteId = $routeParams.websiteId;
		vm.pageId = $routeParams.pageId;
		vm.createWidget = createWidget;
		
		function createWidget() {
			
		}
	}
})();
