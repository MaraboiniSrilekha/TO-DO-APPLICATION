let form = document.getElementById("form");
let textinput = document.getElementById("textinput");
let msg = document.getElementById("msg");
let dateinput =document.getElementById('dateinput');
let textarea =document.getElementById('textarea');
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");


 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    formvalidation();
 });
  let formvalidation =()=>{
   if( textinput.value===""){
    console.log('failure');msg.innerHTML=" Task cannot be blank";
    
   } 
   else{
    console.log('success');
    msg.innerHTML="";
    acceptData();
    add.setAttribute("data-bs-dismiss" ,"modal");
    add.click();
    ( ()=>{
      add.setAttribute("data-bs-dismiss" ,"modal");
    }

    )()
   }

  };
  let data= [];       
  let acceptData =()=>{
    data.push({
    text: textinput.value,
    date:dateinput.value,
    discription:textarea.value,
  }) ;


  
console.log(data);

  createTasks();
  };
  let createTasks =()=>{
    // tasks.innerHTML ="";
   data.map((x,y)=>{
    return (tasks.innerHTML += `
    <div id=${y}>
    <span class="fw-bold">${x.text}</span>
    <span class="small text-secondary">${x.date}</span>
    <p>${x.discription}</p>
    <span class="options">
    <i  onClick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class='fas fa-edit'></i> 
    <i  onClick="deleteTask(this),createTasks()" class='fas fa-trash-alt'></i>
  </span>
  </div>
    `);
   });
  
   resetForm();
  };
     let deleteTask = (e)=>{
     e.parentElement.parentElement.remove();
     data.splice(e.parentElement.parentElement.id,1);
     localStorage.setItem("data", JSON.stringify(data));
     console.log(data);
     };
     let editTask =(e)=>{
     let selectedTask =e.parentElement.parentElement;
     textinput.value = selectedTask.children[0].innerHTML;
     dateinput.value =  selectedTask.children[1].innerHTML;
     textarea.value = selectedTask.children[2].innerHTML;
     deleteTask(e);

     };
    let resetForm =()=>{
      textinput.value ="";
      dateinput.value ="";
      textarea.value ="";

    };
     (()=>{
   data=  JSON.parse( localStorage.getItem("data"))|| [];
     createTasks(); 
     console.log(data);


     })();








  














  