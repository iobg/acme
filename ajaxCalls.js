"use strict";
var ajaxCalls=function(ajax){
ajax.loadCategories=function(){

return $.ajax({
	url: "categories.json"
}).done(function(result){
	return new Promise(function(resolve,reject){
		resolve(result);
	});
});
};

ajax.loadProducts=function(){
return $.ajax({
	url: "products.json"
}).done(function(result){
	return new Promise(function(resolve,reject){
		resolve(result);
	});
});
};

ajax.loadTypes=function(){
return $.ajax({
	url: "types.json"
}).done(function(result){
	return new Promise(function(resolve,reject){
		resolve(result);
	});
});
};
return ajax;
}({});
