import assert from 'assert';

let originalThis = this;
let otherContext = {prop: 'Some context'};

let af = () => {
  console.log("I'm in an arrow function. Context:", this);
  assert(originalThis === this);
};

let f = function(){
  console.log("I'm in a legacy function. Context:", this);
  assert(otherContext === this);
};

af.call(otherContext);
f.call(otherContext);

