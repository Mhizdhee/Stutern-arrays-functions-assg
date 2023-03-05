// question 1. What are the differences between mutating array methods and non-mutation array methods in JavaScript.
// List 5 array methods that fall under each of them.

1. Mutating array methods are any operation that changes the array. It is basically changing the array itself instead of returning a new array with the new changes.
// Five array methods under Mutating array
.pop()
.push()
.shift()
.unshift()
.splice()

Non-mutation array methods are arrays that doesn't change the object after the method has been used.  They return a new array with the new changes.
// Five array methods under Non-mutating array
.slice()
.concat()
.map()
.filter()
.flat()

// question 2  Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
// Add ‘Kotlin’ to the end of the array
// Add ‘Java’ after ‘Ruby’
// Remove the first item in the array
// Add ’Scala’ and ‘Swift’ to the beginning of the array
// Replace ‘PHP’ with ‘Go’ and ‘Rust’

const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
1.
languages.push('Kotlin');
console.log(languages);
2.
languages.splice(3,0,'Java');
console.log(languages);
3.
languages.shift();
console.log(languages);
4.
languages.unshift('Scala','Swift');
console.log(languages);
5.
languages.splice(5,1,'Go','Rust');
console.log(languages);


// question 3. What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
        fruit[2] = "orange";
        return fruit;
}
console.log(changeFruit(fruit))

// question 4. Write a function that accepts an array of numbers as an argument.
// Return the maximum value in the array.
//e.g., max([4, 5, 10, -2]) // maximum value is 10

let arrayOfNumbers =[-1,10, 35, 20, 6];
const maxNumber= (element, max)=>{
    if(element>max){
        return element
    }else{
        return max
    }
}
    console.log(arrayOfNumbers.reduce(maxNumber));





// Question 5 Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
//e.g.,
// valTimesIndex([1,2,3]) // [0,2,6]
//  valTimesIndex([5,10,15]) // [0,10,30]

5.
let array=[6,9,18];
let multipliedResult = valTimesIndex(array);
function valTimesIndex(num){
    return num.map((val,index)=> val*index);
}
console.log(multipliedResult);