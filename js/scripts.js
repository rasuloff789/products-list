var addItemForm =  document.querySelector('.addItemForm');
var addProductInput = addItemForm.querySelector('.addProductInput');
var addItemBtn =  addItemForm.querySelector('.addItemBtn');
var checkItemForm =  document.querySelector('.checkItemForm');
var checkProductInput = checkItemForm.querySelector('.checkProductInput');
var checkItemBtn =  checkItemForm.querySelector('.checkItemBtn');
var checkResult = document.querySelector('.result-text');
var productList = document.querySelector('.product-list');
var productWeightInput  = addItemForm.querySelector('.addWeightInput');
var productPriceInput  = addItemForm.querySelector('.addPriceInput');
var elAddingBody = document.querySelector('.addingBody');
var Summ = document.querySelector('.Summ');
var allSumm = 0;
Summ.textContent = allSumm ;

var allProducts = [];

var counterForProduct = 0;
addItemForm.addEventListener('submit' , function(evt){
  // debugger;
  evt.preventDefault();
  
  var addProductValue = addProductInput.value.trim();
  var productWeightValue =parseFloat( productWeightInput.value.trim() , 10 );
  var productPriceValue =parseFloat( productPriceInput.value.trim() , 10 );
  
  if(!isNaN(addProductInput.value) || productWeightInput.value.trim() === "" || productPriceInput.value.trim() === "" || productWeightInput.value.trim() < 0 || productPriceInput.value.trim()<0){
    alert(`tog'ri qiymat kiriting`);
    addProductInput.value = "";
    productWeightInput.value = "";
    productPriceInput.value = "";
    addProductInput.focus();
    return;
  }
  
  
  counterForProduct++;
  
  var newElRow = document.createElement('tr');
  elAddingBody.appendChild(newElRow);
  
  var newElProductCounter = document.createElement('th');
  newElProductCounter.scope = "row" ; 
  newElRow.appendChild(newElProductCounter);
  newElProductCounter.textContent = counterForProduct;
  
  var newElProductName = document.createElement('td');
  newElRow.appendChild(newElProductName);
  newElProductName.textContent = addProductValue;
  allProducts.push(addProductValue);
  // newElProductName.classList.add('text-truncate' , 'mw-25');
  
  var newElProductWeight = document.createElement('td');
  newElRow.appendChild(newElProductWeight);
  newElProductWeight.textContent = productWeightValue;
  // newElProductWeight.classList.add('text-truncate');
  var newElProductPrice = document.createElement('td');
  newElRow.appendChild(newElProductPrice);
  newElProductPrice.textContent = productPriceValue;
  // newElProductPrice.classList.add('text-truncate');
  var newElProductSumm = document.createElement('td');
  newElRow.appendChild(newElProductSumm);
  newElProductSumm.textContent = Math.round(productPriceValue * productWeightValue);
  
  allSumm = allSumm + Math.round(productPriceValue * productWeightValue);
  
  Summ.textContent = allSumm ; 
  
  addProductInput.value = "";
  productWeightInput.value = "";
  productPriceInput.value = "";
  addProductInput.focus();
  
})

checkItemForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  var checkProductInputValue = checkProductInput.value.trim();
  
  checkProductInput.value = "" ;
  // checkProductInput.focus();
  //  if(checkProductInput.value === ""){
  //    alert('Yozmadingiz uzr');
  //    return;
  //  }
  
  if (allProducts.includes(checkProductInputValue)){
    checkResult.textContent = `Bor` ;
  }else{
    
    checkResult.textContent = `Yo'q lekin qo'shib qo'yishingiz mumkin :))` ;
    addProductInput.value = checkProductInputValue ;
    productWeightInput.focus();
  }
  
  
})