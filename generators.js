let generatorFunc = function * (){
  // Let's count to 10
  for(let i=1; i<=10; i++){
    yield i;
  }
};

let generator1 = generatorFunc();
console.log('generator1 values:');
// New for-of loops
for(let v of generator1){
  console.log(v);
}

let generator2 = generatorFunc();
console.log('generator2 values:');
for(let v of generator2){
  console.log(v);
}

// Iterator interface
let generator3 = generatorFunc();
console.log('generator3 values:');
let i = generator3.next();
while(!i.done){
  console.log(i);
  i = generator3.next();
}
console.log('Remaining state of iterator: ', i);