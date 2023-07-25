var badRequestUrl = 'https://api.github.com/orgs/nodejs/repos';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      console.log(response.status);
      //  Conditional for the the response.status.
      //We check whether the response.status does not equal 200
      // if (response.status !== 200) {
      if (!response.ok) {
        // Place the response.status on the page.
        //We assign the textContent to be equal to the response.status
        responseText.textContent = "Status Code :(: " +response.status;
        // return Promise.resolve("Sad Sad");
        // return Promise.resolve({error: "Sad Sad"});
      }else{
        responseText.textContent = "Status Code :): " + response.status;
        return response.json();
      }
      //We still return response.json() as fetch() will try to resolve the response most of the time
      
    })
    .then(function (data) {
      // Make sure to look at the response in the console and read how 404 response is structured.
      console.log(data);
      
    });
}

getApi(badRequestUrl);
