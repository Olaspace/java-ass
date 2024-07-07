//1.String Manipulation Functions

//i.Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example
console.log(reverseString("hello"));  // ➞ "olleh"

//ii.Count Characters
function countCharacters(str) {
    return str.length;
}

// Example
console.log(countCharacters("hello"));  // ➞ 5

//iii.Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}

// Example
console.log(capitalizeWords("hello world"));  // ➞ "Hello World"


//2.Array Functions

//i.Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Example
console.log(findMax([1, 2, 3, 4, 5]));  // ➞ 5
console.log(findMin([1, 2, 3, 4, 5]));  // ➞ 1


//ii.Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example
console.log(sumArray([1, 2, 3, 4, 5]));  // ➞ 15

//iii.Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example
console.log(filterArray([1, 2, 3, 4, 5], x => x > 2));  // ➞ [3, 4, 5]


//3.Mathematical Functions

//i.Factorial
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

// Example
console.log(factorial(5));  // ➞ 120

//ii.Prime Number Check
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Example
console.log(isPrime(11));  // ➞ true
console.log(isPrime(25));  // ➞ false

//iii.Fibonacci Sequence
function fibonacci(num) {
    let sequence = [0, 1];
    for (let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, num);
}

// Example
console.log(fibonacci(8));  // ➞ [0, 1, 1, 2, 3, 5, 8, 13]


