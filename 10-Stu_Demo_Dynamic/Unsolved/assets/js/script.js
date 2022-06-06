var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var username = document.createElement('p');
        var URL = document.createElement('p');
        username.textContent = data[i].login;
        URL.textContent = data[i].avatar_url;
        userContainer.append(username);
        userContainer.append(URL)
    }});
}
fetchButton.addEventListener('click', getApi);
