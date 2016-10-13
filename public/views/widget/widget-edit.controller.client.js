(function(){
	angular
		.module("WebAppMaker")
		.controller("EditWidgetController",EditWidgetController);
	
	function EditWidgetController($routeParams, WidgetService, $location) {
		var vm = this;
		vm.userId = $routeParams.userId;
		vm.websiteId = $routeParams.websiteId;
		vm.pageId = $routeParams.pageId;
		vm.widgetType=$routeParams.widgetType;
		vm.createHeading = createHeading;
		
		function createHeading(name,text,size) {
			var widget = {
					"widgetType": "HEADER", "pageId": vm.pageId, "size": size, "text": text
			}
			var result = WidgetService.createWidget(widget);
			if(result){
				$location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page/"+vm.pageId+"/widget");
			}
			else{
				vm.error = "Widget could not be created";
			}
		}
			
	}
})();
