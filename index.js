console.log("Start");

function wait(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // blocking the main thread
  }
}

wait(3000);
console.log("End");

console.log("Start");

setTimeout(() => {
  console.log("Async task complete");
}, 2000);

console.log("End");

function getData(callback) {
  setTimeout(() => {
    callback("Data loaded!");
  }, 2000);
}

getData(message => {
  console.log(message);
});
