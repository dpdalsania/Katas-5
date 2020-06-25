function reverseString (Str) {
    return Str.split("").reverse().join("")
}
function testReverseString1 () {
    let reverse = reverseString(stringName)
    console.log(reverse)
    console.assert(reverse === "'d','c','b','a'", "This is not correct, answer should be 'd','c','b','a'")
}
let stringName = ("'a','b','c','d'")
testReverseString1()
console.log("-----")


function testReverseString2 () {
    let string1 = reverseString(reverseName)
    console.log(string1)
    console.assert(string1 === "'a','b','c','d'", "This is not correct, answer should be 'a','b','c','d'")
}
let reverseName = ("'d','c','b','a'")
testReverseString2()
console.log("-----")

//2.a function named reverseSentence that reverses a sentence.

function reverseSentence (string) {
    let reverseArray = string.split(' ')
    let reverse1 = reverseArray.reverse().join(" ")
    return reverse1
}

function testReverseSentence3 () {
    let string = ("My name is Drashti")
    console.log(string)
    let reverse1 = reverseSentence(string)
    console.log(reverse1)
    console.assert(reverse1 === "Drashti is name My", "This is not correct answer, Drashti is name My")
}
testReverseSentence3()
console.log("-----")

function testReverseSentence4 () {
    let string = ("Rose is Red")
    console.log(string)
    let reverse1 = reverseSentence(string)
    console.log(reverse1)
    console.assert(reverse1 === "Red is Rose", "This is not correct answer, Red is Rose")
}
testReverseSentence4()
console.log("-----")


//3.a function named minimumValue that finds the minimum value in an array.

function minimumValue (array) {
    return Math.min.apply(null, array);
}
function minimumValue1 () {
    let array = [4, 6, 5, 9, 2, 3]
    console.log(array)
    let minimumArray = minimumValue(array);
    console.log(minimumArray)
    console.assert(minimumArray === 2, "This is not correct,2")
}
minimumValue1()
console.log("-----")

function minimumValue2 () {
    let array = [14, 16, 51, 19, 20, 31]
    console.log(array)
    let minimumArray = minimumValue(array);
    console.log(minimumArray)
    console.assert(minimumArray === 14, "This is not correct,2")
}
minimumValue2()
console.log("-----")

//4.a function named maximumValue that finds the maximum value in an array.

function maximumValue (array) {
    return Math.max.apply(null, array);
}
function maximumValue1 () {
    let array = [4, 6, 5, 9, 2, 3]
    console.log(array)
    let maximumArray = maximumValue(array);
    console.log(maximumArray)
    console.assert(maximumArray === 9, "This is not correct 9")
}
maximumValue1()
console.log("-----")

function maximumValue2 (array) {
    console.log(array)
    let maximumArray = maximumValue(array);
    console.log(maximumArray)
    console.assert(maximumArray === 51, "This is not correct 51")
}
let array = [14, 16, 51, 19, 20, 31]
maximumValue2(array)
console.log("-----")

// 5.a function named calculateRemainder that calculates a remainder (given a numerator and a denominator).
// Then write two unit test functions named testCalculateRemainder1 and testCalculateRemainder2.

function calculateRemainder (num, denom) {
    return Math.abs(num % denom);
}
function testCalculateRemainder1 (num, denom) {
    console.log(num, denom)
    let calculates = calculateRemainder(num, denom);
    console.log(calculates)
    console.assert(calculates === 0, "This is not correct 0")
}
testCalculateRemainder1(30, 3)
console.log("-----")

function testCalculateRemainder2 (num, denom) {
    console.log(num, denom)
    let calculates = calculateRemainder(num, denom);
    console.log(calculates)
    console.assert(calculates === 1, "This is not correct")
}
testCalculateRemainder2(7, 3)
console.log("-----")

//6.a function named distinctValues that returns distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7").

function distinctValues (array) {
    return array.filter(distinct);
}

function distinct (value, index, self) {
    return self.indexOf(value) === index;
}

function testDistinctValues1 (array) {
    let distinctArray = distinctValues(array);
    console.log(distinctArray)
    console.assert(JSON.stringify(distinctArray) === JSON.stringify([14, 16, 51, 19, 20, 31, 70]), "This is not correct 14,16,51,19,20,31,70")
}
let array1 = [14, 16, 51, 19, 20, 31, 31, 70, 51, 14, 16, 70]
console.log(array1)
testDistinctValues1(array1)
console.log("-----")

function testDistinctValues2 (array) {
    let distinctArray = distinctValues(array);
    console.log(distinctArray)
    console.assert(JSON.stringify(distinctArray) === JSON.stringify([1, 2, 3, 4, 5]), "This is not correct 1,2,3,4,5")
}
let array2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 2, 3, 4, 5]
console.log(array2)
testDistinctValues2(array2)
console.log("-----")

//7.Write a function named countValues that returns the values from a list and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)"). 
//Then write two unit test functions named testCountValues1 and testCountValues2.

function countValues (arr) {
    return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}

function testCountValues1 () {
    console.log(arr)
    let countArray = countValues(arr)
    console.log(countArray)
    console.assert(JSON.stringify(countArray) == JSON.stringify({ 1: 3, 3: 3, 5: 2, 7: 1 }), "This is not correct")

}
let arr = [1, 3, 5, 3, 7, 3, 1, 1, 5]
testCountValues1()
console.log("--------")

function testCountValues2 () {
    console.log(arr1)
    let countArray = countValues(arr1)
    console.log(countArray)
    console.assert(JSON.stringify(countArray) == JSON.stringify({ 3: 3, 5: 1, 6: 4, 9: 1, 10: 2, 15: 1 }), "This is not correct")

}
let arr1 = [6, 3, 5, 3, 9, 3, 6, 6, 6, 10, 10, 15]
testCountValues2()
console.log("--------")

// 8.function named evaluateExpression that, given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, 
//returns the result of the expression ("a + b + c - d" would be -3).


function evaluateExpression (eq, object) {
    let a = eq.split(" ")
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== '+' && a[i] !== '-') 
          a[i] = "object." + a[i]
        
    }
    a = a.join(" ")
    let b = a.toString()
    console.log(b)
  console.log(eval(b))
    return eval(b)
}

//console.log("8=" + yes("a + b + c - d", { a: 1, b: 7, c: 3, d: 14 }))
function testEvaluateExpression1 () {
    console.log(("a + b + c - d ", { a: 1, b: 7, c: 3, d: 14 }))
    console.assert(evaluateExpression("a + b + c - d", { a: 1, b: 7, c: 3, d: 14 }) === -3)
}
testEvaluateExpression1()

function testEvaluateExpression2 () {
    console.log(("a + b + c - d ", { a: 3, b: 6, c: 30, d: 14 }))
    console.assert(evaluateExpression("a + b + c - d", { a: 3, b: 6, c: 30, d: 14 }) === 25)
}
testEvaluateExpression2()