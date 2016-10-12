  function reloadPage(){
    location.reload();
};
//EXERCISE 4
  function eventFade()
  {
    setTimeout(function () {
      document.getElementById("sectionHidden").style.display = "inline"
    }, 2000);
};
//EXERCISE 6
  function eventRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://api.icndb.com/jokes/random', true);
    xhttp.onreadystatechange = function(event) {

      if (xhttp.readyState === XMLHttpRequest.DONE) {
        var response = JSON.parse(event.target.response);
        document.getElementById('sectionHidden').innerHTML = response.value.joke;
      }
   }
   xhttp.send();
};
//EXERCISE 7
function handleJokeButtonClick(){
  var config = {
    url: 'http://api.icndb.com/jokes/random'
};

  function resolve(xhttp) {
    var response = JSON.parse(event.target.response);
    document.getElementById('sectionHidden').innerHTML = response.value.joke;
};

  function reject() {
    alert('Something went wrong !');
    document.getElementById("sectionHidden").style.color = "red";
};
  eventRequestReusable(config).then(resolve,reject);
};
//EXERCISE 9
function handleRepositoriesButtonClick(){
  var config = {
    url: 'https://api.github.com/search/repositories?q=javascript'
};

  function resolve(xhttp) {
    var response = JSON.parse(event.target.response);

    for (var index = 0; index < response.items.length; index++){
      var newLi = document.createElement("li");
      var dataContainer = document.createTextNode(response.items[index].full_name);
      newLi.appendChild(dataContainer);
      document.getElementById('repositoriesList').appendChild(newLi);
    }
};

  function reject() {
    alert('Something went wrong !');
    document.getElementById("sectionHidden").style.color = "red";
};
  eventRequestReusable(config).then(resolve,reject);
};
//EXERCISE 10
function handleRepositoriesModifiedButtonClick(repoName){
  var search = repoName.value;
  var urlBasic = "https://api.github.com/search/repositories?q="
  var config = {
    url: urlBasic.concat(search)
};

  function resolve(xhttp) {
    var response = JSON.parse(event.target.response);

    for (var index = 0; index < response.items.length; index++){
      var newLi = document.createElement("li");
      var dataContainer = document.createTextNode(response.items[index].full_name);
      newLi.appendChild(dataContainer);
      document.getElementById('repositoriesList').appendChild(newLi);
    }
};

  function reject() {
    alert('Something went wrong !');
    document.getElementById("sectionHidden").style.color = "red";
};
  eventRequestReusable(config).then(resolve,reject);
};
//EXERCISE 7 AND 9
function eventRequestReusable(object, resolve, reject) {
  return new Promise( function (resolve, reject) {
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', object.url , true);
  xhttp.send();
  xhttp.onload = function () {

    if (this.status == 200 || this.status == 422) {
      resolve(xhttp);
    } else {
      reject();
    }
  };
  xhttp.onerror = function () {
    document.getElementById("sectionHidden").style.backgroundColor = "red";
    reject();
  };
})
};
