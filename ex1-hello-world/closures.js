function currying_1(f, a) {
  // Inner functions are put in the local scope by default, as if they were
  // declared with `var`.
  return function (b) {
    return f(a, b)
  }
}

function add(a, b) {
  return a + b
}

add_to_10 = currying_1(add, 10)

console.log(add_to_10(20)) // 30
