let count = 0;
let co = {
  ['property'+ count]: 4,
  ['property'+ (count+1)]: 5
};

for(let i in co){
  console.log(i, co[i]);
}