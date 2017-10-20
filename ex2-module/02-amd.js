// File: 02-amd.js
// Start the main app logic.
requirejs(
  ['amd-calculator',],
  function (module) {
    console.log(module.average())
    // 'Your average grade is 70.33333333333333.'

    console.log(module.failing())
    // 'You failed 2 times.'
  }
);