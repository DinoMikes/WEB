//  1 задание
function pickPropArray(arr, prop) {
    return arr
        .filter(obj => obj.hasOwnProperty(prop)) 
        .map(obj => obj[prop]); 
}

const students = [
   { name: 'Павел', age: 20 },
   { name: 'Иван', age: 20 },
   { name: 'Эдем', age: 20 },
   { name: 'Денис', age: 20 },
   { name: 'Виктория', age: 20 },
   { age: 40 },
];
const result = pickPropArray(students, 'name');
console.log(result); 
// Output: [ 'Павел', 'Иван', 'Эдем', 'Денис', 'Виктория' ]


//   2 задание
function createCounter() {
    let count = 0;

    return function () {
        count += 1;
        console.log(count);
    }
}
const counter1 = createCounter();
counter1(); // 1
counter1(); // 2

const counter2 = createCounter();
counter2(); // 1
counter2(); // 2


//   3 задание
function spinWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.length >= 5 ? word.split('').reverse().join('') : word;
    }).join(' ');
}
const result1 = spinWords("Привет от Legacy");
console.log(result1); // тевирП от ycageL

const result2 = spinWords("This is a test");
console.log(result2); // This is a test



//   4 задание
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    
    return []; 
}

const nums = [2, 7, 11, 15];
const rresult = twoSum(nums, target);
console.log(rresult); // [0, 1]nst target = 9;



//   5 задание
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0]; 

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length < 2) return ""; 
        }
    }

    return prefix.length >= 2 ? prefix : ""; 
}

const strs1 = ["цветок", "поток", "хлопок"];
console.log(longestCommonPrefix(strs1)); // "ок"

const strs2 = ["собака", "гоночная машина", "машина"];
console.log(longestCommonPrefix(strs2)); // ""





