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
				
				populatePage(categories,types,products);
				
			}));
			
					
				
})();


function populatePage(categories,types,products){
	var container =$("#container");
	for(var key in products[0]){
		container.append(`<div class="productname">${products[0][key].name}</div>`);
		container.append(`<div class="productdescription">${products[0][key].description}</div>`);
		types.forEach(function(type){
			if(products[0][key].type===type.id){
				container.append(`<div class="typename">${type.name}</div>`);
				container.append(`<div class="typedescription">${type.description}</div>`);
			}
			categories.forEach(function(category){
				if(type.category===category.id){
					container.append(`<div class="categoryname">${category.name}</div>`);
				}

			});
		});
	}
}
