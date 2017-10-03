sap.ui.controller("shoppingcart.Category", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shoppingcart.Category
*/
//	onInit: function() {
//
//	},
	categoryListItemPress:function(evt){
		var router = sap.ui.core.UIComponent.getRouterFor(this);
		var context = evt.getSource().getBindingContext('products');
		
		var path = context.sPath;
		var start = path.lastIndexOf('/') + 1;
		var catIndex = path.substring(start, path.length);
		router.navTo("category",{
			catIndex:catIndex
		});
		
		
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf shoppingcart.Category
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf shoppingcart.Category
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf shoppingcart.Category
*/
//	onExit: function() {
//
//	}

});