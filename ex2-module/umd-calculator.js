(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['depModule1', 'depModule2'], factory)
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory(require('depModule1'), require('depModule2'))
  } else {
    // Browser globals (Note: root is window)
    root.calculator = factory(root.depModule1, root.depModule2);
  }
}(this, function (depModule1, depModule2) {
  // Methods
  function notHelloOrGoodbye() {
    // . . .
  } // A private method

  function hello(){
    return 'hello'
  } // A public method because it's returned (see below)

  function goodbye(){
    return depModule1.something() + depModule2.anything()
  } // A public method because it's returned (see below)

  // Exposed public methods
  return {
    hello: hello,
    goodbye: goodbye
  }
}));