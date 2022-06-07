fetch(
  // Explain each parameter in comments below.
  // per_page=10: allows 10 issue items only per page
  // state=open means that the issue has to be open and not closed
  // sort=created sorts the data by the creation date
  // direction=desc' shows the data in the array in the order it was declared
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
