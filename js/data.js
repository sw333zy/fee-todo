(function(){
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

  addToDo('HEYYYYYYYY');


  //
  // document.querySelector('form').addEventListener('submit', function(event){
  //     event.preventDefault();
      // document.getElementById('donate').style.display = 'none';
      // document.getElementById('topMessage').style.display = 'none';
      // console.log('hit it');
  // })

  // my special code





}());
