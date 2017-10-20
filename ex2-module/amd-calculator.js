// File: amd-calculator
define("amd-calculator", function () {
  var myGrades = [93, 95, 88, 0, 55, 91]

  console.log('initiating AMD module: amd-calculator')
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
})