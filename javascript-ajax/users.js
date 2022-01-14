var userList = document.querySelector('#user-list');

function getUserList() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (var i = 0; i < xhr.response.length; i++) {
      var singleResponse = document.createElement('li');
      singleResponse.textContent = xhr.response[i].name;
      userList.appendChild(singleResponse);
    }
  });
  xhr.send();
}

getUserList();
