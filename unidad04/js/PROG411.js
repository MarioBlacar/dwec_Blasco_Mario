// Variables globales
let todos = [];
 
// Funciones handlers
function handleAddClick( e ) {
       let txt = document
                            .getElementById('input-text')
                            .value
                            .trim();
       document
              .getElementById('input-text')
              .value = '';
       if (txt) todos.push({
              task: txt,
       });
       renderTodoList();
}

// Funciones render
function renderTodoList () {
       let ulList = document.querySelector('#todos ul');
       ulList.innerHTML = '';
 
       todos.forEach( ( {task} ) => {
              let liTodo = document.createElement('li');
              liTodo.classList.add('todo');
              liTodo.textContent = task;
              ulList.append(liTodo);
             
              // ulList.innerHTML += `<li class="todo">${todoText}</li`;
       })
}
// ---
document
       .getElementById('add-button')
       .addEventListener( 'click', handleAddClick );