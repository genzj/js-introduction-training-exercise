async function a() { return "a"; }

async function b(t) { return t + "b"; }

async function c(t) { return t + "c"; }

async function d(t) { return t + "d"; }

async function e(t) { return t + "e"; }

async function f(t) { return t + "f"; }

async function main() {
  var resultA = await a();
  var resultB = await b(resultA);
  var resultC = await c(resultB);
  var resultD = await d(resultC);
  var resultE = await e(resultD);
  return await f(resultE);
}

main().then(function(d) {
  console.log(d);
});