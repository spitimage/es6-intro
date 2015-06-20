import assert from 'assert';

function functionScope(){
  // The variable b is defined because var is function-scoped. It just doesn't have a value
  var a = b ? 1 : 2;
  assert(a === 2);
  var b = true;
  // Now b has a value
  a = b ? 1 : 2;
  assert(a === 1);
}

function letLoop() {
  for (let i = 0; i < 3; i++) {
    console.log('loop:', i);
  }
  console.log('after loop:', typeof i);
  assert(typeof(i) === 'undefined');
}

function varLoop() {
  for (var i = 0; i < 3; i++) {
    console.log('loop:', i);
  }
  console.log('after loop:', typeof i);
  assert(typeof(i) === 'number');
}

functionScope();
letLoop();
varLoop();


/*
Also, the js interpreter can catch errors like the following during code parse:

 This fails because of a duplicate declaration
function failRepeat() {
  let x = 8;
  let x = 9;
}

This fails because a const variable can't be re-assigned
function failConst() {
  const x=8;
  x=9;
}
*/



