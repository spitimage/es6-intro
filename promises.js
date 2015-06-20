let resolveImmediate = new Promise((resolve, reject) => {
  resolve('Resolved immediately');
});
let rejectImmediate = new Promise((resolve, reject) => {
  reject('Rejected immediately');
});

resolveImmediate.then(console.log);
rejectImmediate.catch(console.log);


let resolveDelayed = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved after delay');
  }, 1000);
});
let rejectDelayed = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Rejected after delay');
  }, 1000);
});

resolveDelayed.then(console.log);
rejectDelayed.catch(console.log);

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved after 100ms delay');
  }, 100);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved after 500ms delay');
  }, 500);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved after 5000ms delay');
  }, 5000);
});

Promise.all([p1, p2, p3]).then(console.log).catch(console.error);

