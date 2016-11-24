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


  var myArray = [];
  
    document.querySelector('form').addEventListener('submit', function submit(event){
        event.preventDefault();

        addToDo(document.querySelector('.new-todo').value);
        console.log('hit it');

        var todomo = document.querySelector('.new-todo').value;

        var time = {
          text: submit,
          time: Date.now()
        };
        myArray.push(time);
        console.log(myArray);
        addToDo(todomo);

    });
}());
