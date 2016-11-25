(function() {
  'use strict';
  window.todo = window.todo || {};

  var itemArray = [];
  var incompleteItems = 0;


    window.todo.listData = function listData(text) {
      incompleteItems++;

      var itemList = {
          text: text,
          time: Date.now()
      };

      itemArray.push(itemList);
    };

    window.todo.listTotal = function listTotal(update) {
      incompleteItems += update;
    };

    window.todo.listings = function listings() {
      return incompleteItems;
    };


}());
