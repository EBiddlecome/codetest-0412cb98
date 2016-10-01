var localStorage = require('localStorage');

var List = function () {
  var taskList = new Array;
  var taskData = localStorage.getItem('task');

  if (taskData != null) {
    taskList = JSON.parse(taskData); 
  }
  return taskList;
};

var Add = function () {

  var task = document.getElementById('task').value;
  var taskList = List();

  taskList.push(task);
  localStorage.setItem('task', JSON.stringify(taskList));

  View();

  return false;
};

var View = function () {

  var taskList = List();
  var html = '<ul>';

  if ('tasks' == null) {
    return 'Nothing To Do Yet'; 
  } else {

    for (var i = 0; i < taskList.length; i++) {
      html += '<li>' + taskList[i] + '<button class="remove" id="' + i + '">x</button></li>';
    }

    html += '</ul>';

    document.getElementById('list').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', remove);
    }

    document.getElementById('add').addEventListener('click', add);
  }
};  

View();






