const toDoList=[];

display();

function display(){
  let L='';

  for (let i=0; i<toDoList.length;i++){
    let disp=toDoList[i];
    const {name,duedate}=disp;

    let html=`
      <div>${name}</div>
      <div>${duedate}</div>
      <button onclick="
        toDoList.splice(${i},1);
        display();
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
}