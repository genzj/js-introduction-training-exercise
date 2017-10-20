// File: 03-commonjs.js
// Start the main app logic.
requirejs(
  ['commonjs-calculator',],
  function (module) {
    console.log(module.average())
    // 'Your average grade is 70.33333333333333.'

    console.log(module.failing())
    // 'You failed 2 times.'
  }
);