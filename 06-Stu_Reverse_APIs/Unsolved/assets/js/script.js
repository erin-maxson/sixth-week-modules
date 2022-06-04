var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// requires the jQuery library connection
// AJAX requests the API link and then logs the response in the console
// conversion happens where the URL and method are
// short term this will work, but long term you run the risk of the code breaking
$.ajax({
  // conversion happens here
  url: requestUrl,
  method: 'GET',

  // final result
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// Fetch grabs the API URL and returns the response in json format
// fetch takes the data and stores it in the response, returns the data as .json, and then stores the data as .json in the data area
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// built in browser function, but requires more code to execute
// XMLHttpRequest returns the API data as a string in the console, if the data state is ready (200 request) it will return a string
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
// AJAX = string in the console
// fetch = json
// XMLHttpRequest = string