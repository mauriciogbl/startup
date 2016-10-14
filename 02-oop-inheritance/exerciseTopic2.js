function reloadPage () {
  location.reload();
};

class movieClass {
  constructor(title, year, duration) {
    this.title = title;
    this.year = year;
    this.duration = duration;
  }

  play () { };

  pause () { };

  resume () { };
};

class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }

  on(event, callback) {
   this.listeners.has(event) || this.listeners.set(event, []);
   this.listeners.get(event).push(callback);
 }

  emit(event, ...args) {
   let listeners = this.listeners.get(event);

   if (listeners && listeners.length) {
       listeners.forEach((listener) => {
           listener(...args);
       });
       return true;
   }
   return false;
 }

  off (event, callback) {
    let listeners = this.listeners.get(event),
        index;

    if (listeners && listeners.length) {
        index = listeners.reduce((i, listener, index) => {
            return (isFunction(listener) && listener === callback) ?
                i = index :
                i;
        }, -1);

        if (index > -1) {
            listeners.splice(index, 1);
            this.listeners.set(event, listeners);
            return true;
        }
    }
    return false;
  }
};

  let isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
  let observable = new EventEmitter();
  let movie1= new movieClass('Lord of the Rings I', 1996, '3:40');
  movie1.play();

  function functionShowTitle () {
    console.log("Testing class EventEmmiter " + movie1.title + ' - ' + movie1.year)
  }
  observable.on(movie1.play(),  functionShowTitle);
  observable.emit(movie1.play(), movie1);
  observable.off(movie1.play(), functionShowTitle);
  observable.emit(movie1.play(), movie1);
