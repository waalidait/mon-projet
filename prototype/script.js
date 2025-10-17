let item = document.getElementById("item");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let compteur = document.getElementById("compteur");
 
 function calculerTotal(){
    let total = 0;
  if (item.checked) total++;
  if (item1.checked) total++;
  if (item2.checked) total++;
  compteur.innerText = total;
 }
item.addEventListener("click", calculerTotal);
item1.addEventListener("click", calculerTotal);
item2.addEventListener("click", calculerTotal);

 



/*let item = document.getElementById("item");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let compteur = document.getElementById("compteur");

item.addEventListener("click", function () {
  let total = 0;

  if (item.checked) total++;
  if (item1.checked) total++;
  if (item2.checked) total++;

  compteur.innerText = total;
});

item1.addEventListener("click", function () {
  let total = 0;

  if (item.checked) total++;
  if (item1.checked) total++;
  if (item2.checked) total++;

  compteur.innerText = total;
});

item2.addEventListener("click", function () {
  let total = 0;

  if (item.checked) total++;
  if (item1.checked) total++;
  if (item2.checked) total++;

  compteur.innerText = total;
});*/
