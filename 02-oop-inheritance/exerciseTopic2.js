function reloadPage(){
  location.reload();
};

class movieClass {
  constructor(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  play() { };
  pause() { };
  resume() { };
}

function createButtonHandler(titleInpt, yearInpt, durationInpt) {
  var title = titleInpt.value;
  var year = yearInpt.value;
  var duration = durationInpt.value;
  let movie1 = new movieClass(title, year, duration);
  let movie2 = new movieClass('Lord of the Rings I', 1996, '3:40');
  let movie3 = new movieClass('Lord of the Rings II', 1997, '4:40');
  let movie4 = new movieClass('Lord of the Rings III', 1998, '4:20');
  console.log(movie1);
  console.log(movie2);
  console.log(movie3);
  console.log(movie4);
};
