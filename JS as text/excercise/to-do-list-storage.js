const toDoList= JSON.parse(localStorage.getItem('todoList'))||[];

display();

function display(){
  let L='';

  for (let i=0; i<toDoList.length;i++){
    let disp=toDoList[i];
    let {name,duedate}=disp;

    let html=`
      <div>${name}</div>
      <div>${duedate}</div>
      <button onclick="
        toDoList.splice(${i},1);
        display();
        saveToStorage();
      " class="del-button">Delete</button>`;
    L+=html;
  }
  document.querySelector('.divi')
    .innerHTML=L;
}

function add(){
  const ipv = document.querySelector('.input');
  let name =ipv.value;

  const date = document.querySelector('.date-input');
  let duedate=date.value;

  toDoList.push({name,duedate});

  ipv.value=''; // if used nam not working
  date.value='';

  display();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('todoList',JSON.stringify(toDoList));
}