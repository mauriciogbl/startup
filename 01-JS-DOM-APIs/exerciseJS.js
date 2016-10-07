//   function eventRequest() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.open('GET', 'http://api.icndb.com/jokes/random', true);
//     xhttp.onreadystatechange = function(event) {
//       var response = JSON.parse(event.target.response);
//       document.getElementById('sectionHidden').innerHTML = response.value.joke;
//        if (xhttp.readyState === XMLHttpRequest.DONE) {
//          if (xhttp.responseText.value) {
//              document.getElementById("buttonSection").innerHTML  = xhttp.responseText.value.joke;
//          }
//        }
//    }
//    xhttp.send();
// }
function eventOnClick(){
  var config = {
    url: 'http://api.icndb.com/jokes/random'
  };
  function resolve(xhttp) {
    xhttp.onreadystatechange = function(event)
    {
      var response = JSON.parse(event.target.response);
      document.getElementById('sectionHidden').innerHTML = response.value.joke;
      if (xhttp.readyState === XMLHttpRequest.DONE)
        {
          if (xhttp.responseText.value)
            {
              document.getElementById("buttonSection").innerHTML  = xhttp.responseText.value.joke;
            }
        }
    }
};
  function reject() { };
  eventRequestReusable(config).then(resolve(response));
};
function eventRequestReusable(object, resolve, reject) {
  var promise = new Promise( function (resolve, reject) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', object.url , true);

  xhttp.send();
  xhttp.onload = function () {
    if (this.status == 200) {
      resolve(xhttp);
    } else {
      reject(this.statusText);
    }
  };
  xhttp.onerror = function () {
    reject(this.statusText);
  };
  return promise;
})
};
