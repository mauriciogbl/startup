class EventEmitter {
  constructor () {
    this.listeners = new Object();
  }

  on (event, callback) {
    if(this.listeners[event] != callback){
      this.listeners[event] = callback
    }
  }

  off (event) {
    if(this.listeners[event])
    {
      this.listeners[event] = undefined;
    }
  }

  emit (movie, event) {
    if(this.listeners[event])
    {
      this.listeners[event](movie, event);
    }
  }
}

class logger {
 constructor(){

 }

 log(movieInstance, functionName){
     console.log(`${movieInstance.title} ${functionName}`)
 }
}

class classMovie extends EventEmitter{
  constructor(title, year, duration){
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }
  play() {
    super.emit(this, 'play');
  }
  pause() {
    super.emit(this, 'pause');
  }
  resume() {
    super.emit(this, 'resume');
  }
  addCast(actor) {

    if (Array.isArray(actor)) {
      let maxIndex = actor.length;
      let i = this.cast.length;
      let j = 0;
      do
        {
          this.cast.push(actor[j]);
          j++;
          i++;
        } while(j <= maxIndex && i <= 4)
    }
    else if (typeof actor === 'object') {

      if(this.cast.length < 4)
      {
        this.cast.push(actor);
      }
    }
  }
};

class Actor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
var Social = {
  likes: function(friendName)
    {
      console.log(`${friendName} likes ${this.title}`)
    },
  shares: function(friendName)
    {
      console.log(`${friendName} shares ${this.title}`)
    }
};
let mylogger = new logger;
let Movie1 = new classMovie("Lord of the Rings I", "1996", "220");
let Movie2 = new classMovie("Lord of the Rings II", "1997", "320");
let Movie3 = new classMovie("Lord of the Rings III", "1998", "300");
let Actor1 = new Actor("Leonardo Di Caprio", 40);
let newCast = [
  Actor2 = new Actor("Arnold", 60),
  Actor3 = new Actor("John", 39),
  Actor4 = new Actor("Ricardo Darín", 46)
];
Object.assign(Movie1, Social);
Object.assign(Movie2, Social);
Object.assign(Movie3, Social);
Movie1.on('play', mylogger.log);
Movie1.play();
Movie1.on('resume', mylogger.log);
Movie1.resume();
Movie1.off('play');
Movie1.play();
Movie1.likes('Mike Tyson');
Movie2.shares('Arnold');
Movie1.addCast(Actor1);
Movie1.addCast(newCast);
console.log(Movie1.cast[0]);
console.log(Movie1.cast[1]);
console.log(Movie1.cast[2]);
console.log(Movie1.cast[3]);
