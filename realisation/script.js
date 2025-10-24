let input = document.getElementById("new-task");
let bouton = document.getElementById("add-task");
let p = document.getElementById("task-list");
 
let savedTasks = JSON.parse(localStorage.getItem("task")) || [];
savedTasks.forEach(task => showTask(task));

   
bouton.addEventListener("click",function(){
   let newtach = input.value;
   if(newtach !== ""){
      showTask(newtach);

      savedTasks.push(newtach);
      localStorage.setItem("task",JSON.stringify(savedTasks));

      input.value="";

   }
});

function showTask(tasktext){
   let newline = document.createElement("p");
   newline.innerText = tasktext;

   let checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.addEventListener("change",function(){
      if(checkbox.checked){
         newline.classList.add("checked-task")
      }
      else{
         newline.classList.remove("checked-task");
      }
   });
    
   newline.appendChild(checkbox)

   let suprimer = document.createElement("button");
   suprimer.innerText="suprimer"
   suprimer.style.marginLeft="200px";
   suprimer.style.background="red";

   suprimer.addEventListener("click",function(){
      newline.remove();

      savedTasks =savedTasks.filter(t => t !== tasktext);
      localStorage.setItem("task",JSON.stringify(savedTasks))
   })
   newline.appendChild(suprimer);
   p.prepend(newline);
}