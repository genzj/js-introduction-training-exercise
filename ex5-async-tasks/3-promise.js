
function longTask() {
  return new Promise(function (resolve) {
    setTimeout(function() {
      resolve(42)
    }, 1000);
  });
}

var promise = longTask();
console.log('long task is running...');
promise.then(function(data) {console.log(data);});