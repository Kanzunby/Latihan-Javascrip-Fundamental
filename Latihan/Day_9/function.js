// function hitungUmur(tahunLahir) {
//   var umur = 2023 - tahunLahir;
//   return `Lahir tahun ${tahunLahir}, umur sekarang ${umur}`;
// }
// console.log(hitungUmur(1997));

// function hitungJamParkir(jam) {
//   var bayarParkir = 2000 * jam;
//   return `Anda parkir selama ${jam} jam, total bayar parkir : ${jam} x Rp. 2000 = Rp. ${bayarParkir}`;
// }
// console.log(hitungJamParkir(5));

// TUGAZZZZZ
// hitungAlphabet('abc') ==> 1 +  2 + 3 = 6
// hitungAlphabet('cda') ==> 3 + 4 + 1 = 8

function position(letter) {
  var alfa = "abcdefghijklmnopqrstuvwxyz";
  return alfa.indexOf(letter) + 1;
}

function penjumlahan(str) {
  var str2 = [];
  for (i = 0; i < str.length; i++) str2.push(position(str.charAt(i)));

  var jmlstr2 = 0;
  for (x = 0; x < str2.length; x++) jmlstr2 += str2[x];
  return jmlstr2;
}

console.log(penjumlahan("abc"));

// hitungHari('senin',2) ==> rabu
// hitungHari('minggu',3) ==> rabu

function hariMaju(hari, n) {
  var hariarr = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
    "Minggu",
  ];
  var jmlHari = hariarr.length;

  var sisaHari = n % jmlHari; // 5
  var hariConvert = hariarr.indexOf(hari) + 1; // 1
  var resultHari = sisaHari + hariConvert; // 5 + 1 = 6

  if (resultHari === jmlHari) {
    var resultHariN = resultHari - 1; // -
  } else {
    var resultHariN = (resultHari % jmlHari) - 1; // 5 - 1 = 4
  }
  return (resultHariName = hariarr[resultHariN]);
}
console.log(hariMaju("Minggu", 6));

// alphaForward('abc',2) ==> cde
// alphaForward('kanzun',1) ==> lboavo

function alphaForward(str, n) {
  var alfa = "abcdefghijklmnopqrstuvwxyz";
  var jmlAlfa = alfa.length;

  var sisan = n % jmlAlfa; // 2
  var str2 = []; // [1,2,3]
  for (i = 0; i < str.length; i++) str2.push(position(str.charAt(i)) + n);

  var resultalfa = "";
  for (x = 0; x < str2.length; x++)
    resultalfa += alfa.charAt((str2[x] - 1) % jmlAlfa);
  return resultalfa;
}
console.log(alphaForward("jamal", 3));

function addLength(str) {
  var str2 = str.split(" ");
  var str3 = [];
  for (i = 0; i < str2.length; i++) str3.push(str2[i] + " " + str2[i].length);
  return str3;
}
console.log(addLength("kanzun bairuha sangar"));

function bmi(weight, height) {
  var bmi = weight / height ** 2;
  console.log(bmi);
  if (bmi > 30) {
    bmis = "Obese";
  } else if (bmi > 25) {
    bmis = "Overweight";
  } else if (bmi > 18.5) {
    bmis = "Normal";
  } else if (bmi <= 18.5) {
    bmis = "Underweight";
  }
  return bmis;
}
console.log(bmi(63, 1.63));

function between(a, b) {
  var betwen = [a, b];
  for (i = b - 1; i > a; i--) betwen.splice(1, 0, i);
  return betwen;
}
console.log(between(1, 5));

function summation(num) {
  var num1 = 0;
  for (i = 1; i <= num; i++) num1 += i;
  return num1;
}
console.log(summation(5));

function reverse(n) {
  var num = [];
  for (i = n; i > 0; i--) num.push(i);
  return num;
}
console.log(reverse(5));

function arrayPlusArray(arr1, arr2) {
  var ar1 = 0;
  for (i = 0; i < arr1.length; i++) ar1 += arr1[i];

  var ar2 = 0;
  for (x = 0; x < arr2.length; x++) ar2 += arr2[x];
  return ar1 + ar2; //something went wrong
}
console.log(arrayPlusArray([3, 3, 3], [4, 5, 6]));

function pillars(numPill, dist, width) {
  if (numPill > 1) {
    jarak1 = dist * 100 * (numPill - 1);
    jarak2 = width * (numPill - 2);
    jarak3 = jarak1 + jarak2;
    return jarak3;
  } else {
    return 0;
  }
}
console.log(pillars(5, 15, 30));

function find(arr, elmt) {
  for (var i = 0; i < arr.length; i++) var x = 0;
  if (arr[i] === elmt) {
    return i;
  }
  return "Not found";
}
console.log(find([1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7], 1));

function findAverage(array) {
  var sum = 0;
  var avr = array.length;
  if (array.length > 0) {
    for (i = 0; i < array.length; i++) sum += array[i];
    return sum / array.length;
  } else {
    return 0;
  }
}

console.log(findAverage([3, 4, 5]));

// var english = "hello";
// var italian = "ciao";
// var french = "salut";
// var german = "hallo";
// var spanish = "hola";
// var czech = "ahoj";
// var polish = "czesc";
// english.toLocaleLowerCase;
// var greetings = "Hello";
// greetings.toLocaleLowerCase;
// var gret = [english, italian, french, german, spanish, czech, polish];
// var res = gret.includes(greetings.toLocaleLowerCase);
// console.log(res);

function gabung(string1, string2) {
  return `${string1} ${string2}`;
}
console.log(gabung("Kanzun", "Bairuha"));

function nameShuffler(str) {
  var str1 = str.split(" ");
  return `${str1[1]} ${str1[0]}`;
}
console.log(nameShuffler("Kanzun Bairuha"));

var nama = "My name is Kanzun Bairuha";
var nama1 = nama.split(" ");
var newnama = "";
// var newnama1 = newnama.join("-");
for (i = 0; i < nama1.length - 1; i++)
  newnama += `${nama1[i].split("").join("-")} `;

var newnama2 = newnama + `${nama1[nama1.length - 1].split("").join("-")}`;
console.log(newnama2);

function points(games) {
  var str = games.join("").split("");
  console.log(str);
  var x = [];
  for (i = 0; i < str.length; i += 3) x.push(str[i]);
  console.log(x);

  var y = [];
  for (i = 2; i < str.length; i += 3) y.push(str[i]);
  console.log(y);

  var poin = 0;
  for (i = 0; i < x.length; i++)
    if (x[i] > y[i]) {
      poin += 3;
    } else if (x[i] == y[i]) {
      poin += 1;
    } else {
      poin += 0;
    }
  return poin;
}
var games = [
  "3:3",
  "2:1",
  "3;2",
  "2:0",
  "1:1",
  "2:2",
  "3:0",
  "2:0",
  "1:2",
  "4:3",
];
console.log(points(games));

function sumDigits(number) {
  if (number * -1 > number) {
    numbers = number * -1;
  } else {
    numbers = number * 1;
  }
  var string = numbers.toString();
  var number1 = [];
  for (i = 0; i < string.length; i++) number1.push(Number(string[i]));
  var number2 = 0;
  for (x = 0; x < number1.length; x++) number2 += number1[x];
  return number2;
}
console.log(sumDigits(-75));

var number = -21;
number1 = Math.abs(number);
console.log(number1);
// var number = -21;
// if (number * -1 > number) {
//   number1 = number * -1;
// } else {
//   number1 = number * 1;
// }
// console.log(number1);

function quadrant(x, y) {
  if (x * -1 > x === false && y * -1 > y === false) {
    var hasil = 1;
  } else if (x * -1 > x === true && y * -1 > y === false) {
    var hasil = 2;
  } else if (x * -1 > x === true && y * -1 > y === true) {
    var hasil = 3;
  } else if (x * -1 > x === false && y * -1 > y === true) {
    var hasil = 4;
  }
  return hasil;
}
console.log(quadrant(3, 2));

var str = "kanzun";
var str1 = str.toUpperCase();
console.log(str1);

var random = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
var index = random.indexOf("needle");
console.log(index);

function findNeedle(haystack) {
  var post = haystack.indexOf("needle");
  return `found the needle at position ${post}`;
}
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

// var nama = "KanZUn";
// var nama1 = nama.toLowerCase();
// var nama2 = nama1.split("");
// var aman = [];
// for (i = nama2.length - 1; i >= 0; i--) aman.push(nama2[i]);

// var aman1 = aman.join("");
// console.log(aman1);
// if (nama1 === aman1) {
//   console.log(true);
// } else {
//   console.log(false);
// }

function isPalindrome(x) {
  var xr = x.toLowerCase();
  var string = xr.split("");
  var y = [];
  for (i = string.length - 1; i >= 0; i--) y.push(string[i]);
  var yr = y.join("");
  if (xr === yr) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("madam"));

function findMultiples(integer, limit) {
  if (integer < 0) {
    var integer1 = integer * -1;
  } else {
    var integer1 = integer * 1;
  }
  var integer2 = [];
  for (i = integer1; i <= limit; i += integer1) integer2.push(i);
  return integer2;
}
console.log(findMultiples(4, 25));

var quantity = 3;
var price = 3000;
var harga = quantity * price;
var diskon = Math.floor(quantity / 3) * price;
var totalHarga = harga - diskon;

console.log(harga);
console.log(diskon);
console.log(totalHarga);

var arrayOfSheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

var sheep = [];
for (i = 0; i < arrayOfSheep.length; i++)
  if (arrayOfSheep[i] === true) {
    sheep.push(arrayOfSheep[i]);
  }
var jml = sheep.length;
console.log(jml);
