var getTitle = document.getElementsByTagName('h1');
//console.log(getTitle);

var getH3 = document.getElementsByTagName('h3');
//console.log(getH3);

//Modify Elements on DOM
var changeFood = document.getElementsByTagName('h3')[0];
console.log(changeFood);
changeFood.textContent = 'Tacos';
changeFood.style.color = 'red';

var changePizza = document.getElementsByTagName('li')[1];
console.log(changePizza);
changePizza.textContent = 'Veggie';

var changeImg = document.getElementsByClassName('foodPic')[0];
console.log(changeImg);
changeImg.src = 'http://assets.bonappetit.com/photos/57adf80c1b33404414975841/16:9/w_1000,c_limit/sloppy-tacos.jpg';

var iceCreamDesc = document.createElement('p');
iceCreamDesc.textContent = 'Helado is so great after tacos';
document.body.appendChild(iceCreamDesc);
