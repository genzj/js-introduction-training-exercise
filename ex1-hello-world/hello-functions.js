function hello() {
  // your code
}

hello_again = function () {
  // your code
}

function sprintf(fmt) {
  for (var i = 1; i < arguments.length; ++i) {
    fmt = fmt.replace('%s', arguments[i])
  }
  return fmt
}
console.log(sprintf('%s.%s', 123, 456))
