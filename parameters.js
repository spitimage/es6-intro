function defaultParams(first, second = 9){
  console.log('defaultParams args:', first, second);
}

defaultParams(1);
defaultParams(2,3);


function restParams(first, ...others){
  console.log('restParams first arg:', first);
  console.log('restParams others arg:', others);
}

restParams(1,2,3,4,5,6,7,8,9);

function print3Args(first, second, third){
  console.log(first);
  console.log(second);
  console.log(third);
}

// Spread operator
print3Args(...[1,2,3,4,5,6]);