class Base {
  constructor(){
    console.log('Base constructor');
  }

  method(){
    console.log('A Base Method');
  }
}

class Derived extends Base {
  constructor(){
    // This was difficult to mimic in ES5
    super();
    console.log('Derived constructor');
  }

  method(){
    console.log('A Derived Method');
  }
}

let b = new Base();
let d = new Derived();

b.method();
d.method();

// Nothing has changed from normal prototypal inheritance
console.log('typeof(Base)=' + typeof(Base));
console.log('typeof(b)=' + typeof(b));