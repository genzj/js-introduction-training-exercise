
function a() {
  return Promise.resolve('a')
}

function b(d) {
  return Promise.resolve(d + 'b')
}

function c(d) {
  return Promise.resolve(d + 'c')
}

function d(d) {
  return Promise.resolve(d + 'd')
}

function e(d) {
  return Promise.resolve(d + 'e')
}

function f(d) {
  return Promise.resolve(d + 'f')
}

a().then(function (resultFromA) {
  return b(resultFromA);
}).then(function (resultFromB) {
  return c(resultFromB);
}).then(function (resultFromC) {
  return d(resultFromC);
}).then(function (resultFromD) {
  return e(resultFromD);
}).then(function (resultFromE) {
  return f(resultFromE);
}).then(function (resultFromF) {
  console.log(resultFromF);
});
