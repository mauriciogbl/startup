import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import Input from './input';

// class Movie extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.states = {}
//   }
// }
// inicializamos el objeto

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "",
                   year: "",
                   duration: "",
                    fav: false};
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.handleChangeDuration = this.handleChangeDuration.bind(this);
    this.handleChangeFavorite = this.handleChangeFavorite.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  handleChangeYear(event) {
    this.setState({year: event.target.value});
  }
  handleChangeDuration(event) {
    this.setState({duration: event.target.value});
  }
  handleChangeFavorite(event) {
    this.setState({fav: event.target.checked});
  }
  handleSubmit(event) {
    if (localStorage.getItem('movies') === null) {
      localStorage.setItem('movies', JSON.stringify(this.state));
    }
    else {
      localStorage.setItem('movies', localStorage.getItem('movies').concat(";",JSON.stringify(this.state)));
    }
  }
  handleReset() {
    document.getElementById("titleInput").value = "";
    document.getElementById("yearInput").value = "";
    document.getElementById("durationInput").value = "";
    document.getElementById("favoriteInput").checked = false;
  }
  handleList(storage) {
    let object = [];
    let i = 0;
    let favMovies = [];
    let j = 0;
    let list = localStorage.movies.split(';');
    let maxI = list.length;

    for ( i = 0; i < maxI; i++) {
      object[i] = JSON.parse(list[i])

      if (object[i].fav === true) {
        favMovies[j] = object[i];
        j++;
      }
    }
    favMovies.map(function(item) {
      let newLi = document.createElement("li");
      let nodeContent = document.createTextNode("Title: "+item.title+" - Year: "+item.year+" - Duration: "+item.duration);
      newLi.appendChild(nodeContent);
      document.getElementById("moviesList").appendChild(newLi);
      });
}
    render() {
        return (
          <div>
            <div className="inputsContent">
              <Input id="titleInput" value={this.state.title} change={this.handleChangeTitle} type="text" holder="Title" />
              <br />
              <Input id="yearInput" value={this.state.year} change={this.handleChangeYear} type="text" holder="Year" />
              <br />
              <Input id="durationInput" value={this.state.duration} change={this.handleChangeDuration} type="text" holder="Duration" />
              <br />
              <p>Favorite</p><Input id="favoriteInput" value={this.state.fav} change={this.handleChangeFavorite} type="checkbox" />
            </div>
            <div className="buttonsSection">
              <Button Click={this.handleSubmit} clase="button" id="createButton" value="Create" />
              <Button Click={this.handleReset} clase="button" id="clearButton" value="Clear" />
              <Button Click={this.handleList} clase="button" id="ListButton" value="List Favorites" />
            </div>
            <div>
              <ul id="moviesList"></ul>
            </div>
          </div>
        );
    }
};
ReactDOM.render(<Application />, document.getElementById('app'));
