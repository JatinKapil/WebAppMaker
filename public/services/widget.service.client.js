(function(){
	angular
		.module("WebAppMaker")
		.factory("WidgetService",WidgetService);
	
	var widgets = [
	                { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
	                { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
	                { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
	                  "url": "http://lorempixel.com/400/200/"},
	                { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>While <a href="http://venturebeat.com/2016/09/20/google-launches-allo-smart-messaging-app-for-android-and-ios/" target="_blank">Google Allo is still fresh off the starting block</a>, it could become the most significant <a href="http://venturebeat.com/2016/09/23/building-a-chatbot-thats-smarter-than-a-fifth-grader/" target="_blank">chatbot</a> messaging platform ever. For now, it does not even allow third-party participation. It’s fairly limited and has an uphill climb if it is going to replace WhatsApp or Messenger on your phone.</p>'},
	                { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
	                { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%", "height": "300px",
	                  "url": "https://youtu.be/Sn_g80FXA-0" },
	                { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
	              ]
	
	function WidgetService() {
		var api = {
				findWidgetsForPageId : findWidgetsForPageId,
				createWidget : createWidget
		};
		return api;
		
		function findWidgetsForPageId() {
			return widgets;
		}
		function createWidget(widget){
			var newWidget = {
					_id : (new Date()).getTime()+"",
					widgetType : widget.widgetType, 
					pageId : widget.pageId, 
					size : widget.size, 
					text : widget.text
			}
			widgets.push(newWidget);
			return newWidget;
		}
		
	}
})();