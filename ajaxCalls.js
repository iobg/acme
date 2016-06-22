"use strict";
var ajaxCalls=function(ajax){
ajax.loadCategories=function(){

return new Promise(function(resolve,reject){
$.ajax({
	url: "categories.json"
}).done(function(result){
		resolve(result);
	});
});
};

ajax.loadProducts=function(){
return new Promise(function(resolve,reject){
 $.ajax({
	url: "products.json"
}).done(function(result){
		resolve(result);
	});
});
};

ajax.loadTypes=function(){
return new Promise(function(resolve,reject){
 $.ajax({
	url: "types.json"
}).done(function(result){
		resolve(result);
	});
});
};
return ajax;
}({});
