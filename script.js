//Exercises: Level 1
//1.Declare a function fullName and it print out your full name.
function fullName() {
  let firstName = "Miskiat";
  let lastName = "Badmus";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}
fullName();
//2.Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName2(firstName, lastName) {
  let first = firstName;
  let space = " ";
  let second = lastName;

  let fullName = first + space + second;
  return fullName;
}

console.log(fullName2("Musa", "muhammad"));

function addNumbers() {
  let firstNo = 10;
  let secNo = 15;
  let addNumbers = firstNo + secNo;
  console.log(addNumbers);
}

addNumbers();

function addNumbers(firsNo, secondNo, thirdNo) {
  let festNo = firsNo;
  let secc = secondNo;
  let ted = thirdNo;
  let addNos = festNo + secc + ted;
  return addNos;
}
console.log(addNumbers(10, 112, 30));
//3.Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(a, b) {
  let misk = a;
  let joks = b;
  let sum = misk + joks;
  return sum;
}
console.log(addNumbers(40, 40));
//4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  let len = length;
  let wid = width;
  let area = len * wid;
  return area;
}
console.log(areaOfRectangle(10, 10));
//5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  let len = length;
  let wid = width;
  let perimeter = 2 * (len + wid);
  return perimeter;
}
console.log(perimeterOfRectangle(2, 2));
//6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  let len = length;
  let wid = width;
  let hei = height;
  let volume = len * wid * hei;
  return volume;
}
console.log(volumeOfRectPrism(4, 4, 4));
//7.Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(pie, radius) {
  let π = pie;
  let r = radius;
  let area = π * r * r;
  return area;
}
console.log(areaOfCircle(3, 3));

//8.Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(pie, radius) {
  let π = pie;
  let r = radius;
  let circumference = 2 * π * r;
  return circumference;
}
console.log(circumOfCircle(5, 5));
//9.Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mas, vol) {
  let mass = mas;
  let volume = vol;
  let density = mass / volume;
  return density;
}
console.log(density(7, 7));
//10.Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(totd, totm) {
  let totdistance = totd;
  let tottimetaken = totm;
  let speed = totdistance / tottimetaken;
  return speed;
}
console.log(speed(20, 10));

//11.Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mas, gra) {
  let mass = mas;
  let gravity = gra;
  let weight = mass * gravity;
  return weight;
}
console.log(weight(9, 4));
//12.Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
  let oC = celsius;
  let oF = (oC * 9) / 5 + 32;
  return oF;
}
console.log(convertCelsiusToFahrenheit(8));

//13.Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function bmi(wei, hei) {
  let weight = wei;
  let height = hei;
  let bmi = weight / (height * height);
  return bmi;
}
console.log(bmi(51, 63));
//14.Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  if (month == "January") {
    return "Winter";
  } else if (month == "February") {
    return "Winter";
  } else if (month == "March") {
    return "Spring";
  } else if (month == "April") {
    return "Spring";
  } else if (month == "May") {
    return "Spring";
  } else if (month == "June") {
    return "Summer";
  } else if (month == "July") {
    return "Summer";
  } else if (month == "August") {
    return "Summer";
  } else if (month == "September") {
    return "Autumn";
  } else if (month == "October") {
    return "Autumn";
  } else if (month == "November") {
    return "Autumn";
  } else if (month == "December") {
    return "Winter";
  } else {
    return `${month} is not a month`;
  }
}
console.log(checkSeason("August"));
//15.Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))

function findMax(a, b, c) {
  let highest = a;
  if (highest < b) {
    highest = b;
  }
  if (highest < c) {
    highest = c;
  }

  return highest;
}
console.log(findMax(987, 4457, 345678));
//Exercises: Level 2
//1.Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(m, n, o) {
  let ax = m;
  let by = n;
  let c = o;
  let linearEquation = ax + by + c;
  return linearEquation;
}
console.log(solveLinEquation(22, 32, 3));

//7.Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(array) {
  let resultArr = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    let capitalizedChar = item[0].toUpperCase();
    resultArr.push(`${capitalizedChar}${item.slice(1)}`);
  }

  return resultArr;
}
console.log(
  capitalizeArray(["miskiat", "mubashir", "aishat", "ayanfe", "jalasem"])
);

// function weight(mas, gra) {
//   let mass = mas;
//   let gravity = gra;
//   let weight = mass * gravity;
//   return weight;

//8.Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(item) {
  let newArr = [];
  for (let i = 0; i < item.length; i++) {
    let item = array[i];
    let addItem = item[0].array();
    newArr.push(`${addItem}${item.push(0)}`);
  }
  return newArr;
}
console.log(addItem());
//16.Write a function which takes any number of arguments and return the sum of the arguments
