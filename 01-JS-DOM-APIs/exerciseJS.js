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
      var response = JSON.parse(event.target.response);
      document.getElementById('sectionHidden').innerHTML = response.value.joke;
      if (xhttp.readyState === XMLHttpRequest.DONE)
        {
          if (xhttp.responseText.value)
            {
              document.getElementById("buttonSection").innerHTML  = xhttp.responseText.value.joke;
            }
        }
};
  function reject() {
    alert('Something went wrong !');
    document.getElementById("sectionHidden").style.color = "red";
};
  eventRequestReusable(config).then(resolve,reject);

};
function eventRequestReusable(object, resolve, reject) {
  return new Promise( function (resolve, reject) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', object.url , true);
  xhttp.send();
  xhttp.onload = function () {
    if (this.status != 200) {
      resolve(xhttp);
    } else {
      reject();
    }
  };
  xhttp.onerror = function () {
    document.getElementById("sectionHidden").style.backgroundColor = "red";;
    reject();
  };
})
};
