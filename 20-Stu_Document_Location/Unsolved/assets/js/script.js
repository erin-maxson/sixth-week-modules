var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  if (response.status = 404) {
    location.replace(redirectUrl)
  }
  return response.json();
})
  // If that status equals the conditional, then redirect to the 404 page.

getApi(badRequestUrl);