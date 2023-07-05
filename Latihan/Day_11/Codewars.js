function findAverage(inputArr) {
  if (inputArr.length === 0) {
    return 0;
  }

  var total = 0;
  for (var i = 0; i < inputArr.length; i++) {
    total += inputArr[i];
  }

  var average = total / inputArr.length;
  return average;
}

function isIsogram(str) {
  var newStr = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (newStr[i] === newStr[j]) {
        return false;
      }
    }
  }

  return true;
}

console.log(isIsogram("KaNzun"));

var nama = "KanZun";
var nama1 = nama.toLowerCase();
console.log(nama1);
// var nama = "Kanzun Bairuha";
// var namak = nama.toLowerCase;
// console.log(namak);
