const toDoList=[{
  name:'cook dinner',
  duedate: '2023-12-10'
},{
  name:'clean dishes',
  duedate: '2023-12-09'
}];

display();

function display(){
  let L='';
  
  toDoList.forEach((disp, index)=>{
    const {name,duedate}=disp;

    let html=`
      <div>${name}</div>
      <div>${duedate}</div>
      <button class="del-button js-del-button">Delete</button>`;
    L+=html;
  })
  document.querySelector('.divi')
    .innerHTML=L;

    document.querySelectorAll('.js-del-button')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click',()=>{
          toDoList.splice(index,1);
          display();
      });
    }); 
  }

  document.querySelector('.add-button-js').addEventListener('click',()=>{
    add();
  });

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