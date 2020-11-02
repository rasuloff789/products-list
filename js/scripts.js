var addItemForm =  document.querySelector('.addItemForm');
var addItemInput = addItemForm.querySelector('.addItemInput');
var addItemBtn =  addItemForm.querySelector('.addItemBtn');
var productList = document.querySelector('.product-list');
var productsArray = [];
addItemForm.addEventListener('submit' , function(evt){
evt.preventDefault();
var addProductValue = addItemInput.value.trim();
if (addProductValue === ""){
alert('Iltimos tekshirmang baribir himoyalangan :))');
return;
}
productsArray.push(addProductValue);
addItemInput.focus();
var newLi = document.createElement('li');
productList.appendChild(newLi);
newLi.textContent = addProductValue;
addItemInput.value = "";

// for (productName of productsArray){ console.log(productName) };    

})