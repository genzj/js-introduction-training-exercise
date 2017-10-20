var module = (function () {
  // We keep these variables private inside this closure scope

  var myGrades = [93, 95, 88, 0, 55, 91]

  var average = function() {
    var total = 0

    for (var i = 0; i < myGrades.length; ++i) {
      total += myGrades[i]
    }

    return 'Your average grade is ' + total / myGrades.length + '.'
  }

  var failing = function(){
    var failingGrades = 0

    for (var i = 0; i < myGrades.length; ++i) {
      failingGrades += (myGrades[i] < 60) ? 1 : 0
    }

    return 'You failed ' + failingGrades + ' times.'
  }

  return {
    average: average,
    failing: failing
  }
}());

console.log(module.average())
// 'Your average grade is 70.33333333333333.'

console.log(module.failing())
// 'You failed 2 times.'