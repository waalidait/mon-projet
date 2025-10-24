let item = document.getElementById("item");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let compteur = document.getElementById("compteur");
 
 function calculerTotal(){
    let total = 0;
  if (item.checked) total++; //total = 1

  if (item1.checked) total++;//total =    1 + 1

  if (item2.checked) total++;// total = 1 + 1 + 1 = 3

  compteur.innerText = total;
 }
item.addEventListener("click", calculerTotal);
item1.addEventListener("click", calculerTotal);
item2.addEventListener("click", calculerTotal);
