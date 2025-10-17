let input = document.getElementById("new-task");
let bouton = document.getElementById("add-task");
let p = document.getElementById("task-list");

bouton.addEventListener("click",function(){
    let newtach = input.value;

     if(newtach !==""){     
        let newline = document.createElement("p");

        newline.innerText = newtach;

        let checkbox = document.createElement("input");
        checkbox.type ="checkbox";
        
        newline.appendChild(checkbox);
       

        let supprimer = document.createElement("button");
        supprimer.style.marginLeft = '200px';
        supprimer.style.background = 'red';
        
        supprimer.innerText="suprimmer";

        supprimer.addEventListener("click",function(){
         newline.remove();
        })
        newline.appendChild(supprimer);
        
        p.prepend(newline);

        input.value = "";
     }

})