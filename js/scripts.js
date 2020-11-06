//htmldagi elementlarni tanlab olamiz
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
//formani submit holatini eshitamiz
addItemForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  //inputdan valuelarni olib tekshiramiz
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
  
  //counterga 1 qo'shib qo'yamiz qaysiki tartib raqamini bildirib turadi
  counterForProduct++;
  //create elements qilib harbirini o'z o'rniga qo'yib chiqamiz va qolgani hisob-kitob
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
  
  var newElProductWeight = document.createElement('td');
  newElRow.appendChild(newElProductWeight);
  newElProductWeight.textContent = productWeightValue;
  var newElProductPrice = document.createElement('td');
  newElRow.appendChild(newElProductPrice);
  newElProductPrice.textContent = productPriceValue;
  var newElProductSumm = document.createElement('td');
  newElRow.appendChild(newElProductSumm);
  newElProductSumm.textContent = Math.round(productPriceValue * productWeightValue);
  //obshiy summani hisoblaymiz
  allSumm = allSumm + Math.round(productPriceValue * productWeightValue);
  
  Summ.textContent = allSumm ; 
  //oxirida inputlarning qiymatlarini "" ga tenglashtiramiz
  addProductInput.value = "";
  productWeightInput.value = "";
  productPriceInput.value = "";
  addProductInput.focus();
  
})

//ro'yhatda bormi yo'qmi tekshirish qismi
checkItemForm.addEventListener('submit' , function(evt){
  evt.preventDefault();
  var checkProductInputValue = checkProductInput.value.trim();
  
  checkProductInput.value = "" ;
  
  if (allProducts.includes(checkProductInputValue)){
    checkResult.textContent = `Bor` ;
  }else{
    
    checkResult.textContent = `Yo'q lekin qo'shib qo'yishingiz mumkin :))` ;
    addProductInput.value = checkProductInputValue ;
    productWeightInput.focus();
  }
  
  
})