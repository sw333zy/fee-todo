(function() {
  'use strict';
  window.todo = window.todo || {};



  function addToDo(text) {
    var li = document.createElement('li');
    var article = document.createElement('article');
    var button = document.createElement('button');
    button.classList.add('check');
    article.appendChild(button);
    var p = document.createElement('p');
    p.innerText = text;
    article.appendChild(p);
    var deleteb = document.createElement('button');
    deleteb.classList.add('delete');
    deleteb.innerText = 'X';
    article.appendChild(deleteb);

    li.appendChild(article);
    document.querySelector('ul').appendChild(li);

  }


  document.querySelector('form').addEventListener('submit', function submit(event) {
    event.preventDefault();

    // addToDo(document.querySelector('.new-todo').value);
    // console.log('hit it');

     var listItem = document.querySelector('.new-todo');
     console.log(listItem.value);

     addToDo(listItem.value);
     window.todo.listData(listItem.value);
     todoList();


  });

  document.querySelector('ul').addEventListener('click', function complete(event) {
    if (event.target.className === 'check') {

      if (event.target.parentNode.className === 'completed') {
        event.target.parentNode.classList.add('completed');
        window.todo.listTotal(1);
      }
      else {
        event.target.parentNode.classList.add('completed');
        window.todo.listTotal(-1);
      }
      todoList();

    }

  else if (event.target.className === 'delete') {
      event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
      window.todo.listTotal(-1);

  }
  todoList();


  });
  function todoList() {
         document.querySelector('.incomplete-items').innerText = window.todo.listings();
       }


}());


// implement and remove current counter
//
// function remove() {
//     var id = this.getAttribute('id');
//     var todos = get_todos();
//     todos.splice(id, 1);
//     localStorage.setItem('todo', JSON.stringify(todos));
//
//     show();
//
//     return false;
// }
//
// function show() {
//     var todos = get_todos();
//
//     var html = '<ul>';
//     for(var i=0; i<todos.length; i++) {
//         html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
//     };
//     html += '</ul>';
//
//     document.getElementById('todos').innerHTML = html;
//
//     var buttons = document.getElementsByClassName('remove');
//     for (var i=0; i < buttons.length; i++) {
//         buttons[i].addEventListener('click', remove);
//     };
// }
//
// document.getElementById('add').addEventListener('click', add);
// show();
