"use strict";
(function(){
	var types;
	var categories;
	var products;
ajaxCalls.loadCategories()
	.then(function(result){
		categories=result.categories;
		

	}).then(ajaxCalls.loadTypes()
		.then(function(result){
			types=result.types;
			
		
		})).then(ajaxCalls.loadProducts()
			.then(function(result){
				products=result.products;
				
				
			}))
				.then(function(){
					populatePage(categories,types,products);
				});
})();


function populatePage(categories,types,products){
	console.log("hi");

}
