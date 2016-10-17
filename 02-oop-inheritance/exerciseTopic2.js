class EventEmitter {
constructor () {
  this.listeners = [];
}

on (event, callback) {
  if(this.listeners[event] != callback){
    this.listeners[event] = callback
  }
}

off (event, callback) {
  if(this.listeners[event]) this.listeners[event] = undefined;
}

emit (movie, event) {
   if(this.listeners[event]) this.listeners[event](movie, event);
 }
}

class logger {
 constructor(){

 }

 log(info, functionName){
     console.log(info.title + ' ' + functionName)
 }
}

let myEmitter = new EventEmitter;
let mylogger = new logger;

class classMovie extends EventEmitter{
constructor(title, year, duration){
  super();
  this.title = title;
  this.year = year;
  this.duration = duration;
}
play(){
  super.emit(this, 'play');
}
pause(){
  super.emit(this, 'pause');
}
resume(){
  super.emit(this, 'resume');
}
}

let Movie1 = new classMovie("Lord of the Rings I", "1996", "220");
let Movie2 = new classMovie("Lord of the Rings II", "1997", "320");
let Movie3 = new classMovie("Lord of the Rings III", "1998", "300");


Movie1.on('play', mylogger.log);
Movie1.play();

Movie1.on('resume', mylogger.log);
Movie1.resume();

Movie1.off('play', mylogger.log);
Movie1.play();
