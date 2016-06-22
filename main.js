"use strict";
var selector=$("#selector");
(	selector.on("change",function(){
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
				
				populatePage(categories,types,products,selector[0].value);
				
			}));
			
					
				
}))();


function populatePage(categories,types,products,selected){
	var currentId;
	var container =$("#container");
	var htmlText="";
	var currentProduct;
	products.forEach(function(product){
		for(var key in product){
			currentId=product[key].id;
		htmlText+=`<div class="product" id="${currentId}">`;
		htmlText+=`<div class="productname">${product[key].name}</div>`;
		htmlText+=`<div class="productdescription">${product[key].description}</div>`;

		types.forEach(function(type){

			if(product[key].type===type.id){
				
				htmlText+=`<div class="typename">${type.name}</div>`;
				htmlText+=`<div class="typedescription">${type.description}</div>`;
			
				categories.forEach(function(category){
					
					console.log(currentId);
					if(type.category===category.id){
						htmlText+=`<div class="categoryname">${category.name}</div>`;
						htmlText+=`</div>`;
						container.html(htmlText);
						currentProduct=$(`#${currentId}`);
						currentProduct.hide();

						
					}

				});

			}

		});

	
		
	}

	    
		
	});
		
		

}
