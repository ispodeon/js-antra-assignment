/** ------------------------------------------------------------
 * 1. Reverse
 */
function reverse(num) {
    asString = num + '';
    let str = asString.split("");
    str = str.reverse();
    str = str.join("");
    return str;
}
// console.log(reverse(32243));

/** ------------------------------------------------------------
 * 2. Palindrome
 */
function isPalindrome(str) {
    noSpaces = str.replaceAll(" ", "");
    isPalin = noSpaces === reverse(noSpaces);
    return isPalin;
}
// console.log(isPalindrome('nurses run'));
// console.log(isPalindrome('madam'));

/** ------------------------------------------------------------
 * 3. Generate all combinations
 */
function combos(str1) {
    let arr = [];
    for (let x = 0, y = 1; x < str1.length; x++, y++) {
        arr[x] = str1.substring(x, y);
    }


    let combinations = [];
    let temp = "";
    let pow = Math.pow(2, arr.length);

    for (let i = 0; i < pow; i++) {
        temp = "";
        for (let j = 0; j < arr.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += arr[j];
            }
        }
        if (temp !== "") {
            combinations.push(temp);
        }
    }
    return combinations.splice("");
}
// console.log(combos('dog'));

/** ------------------------------------------------------------
 * 4. Alphabetical
 */
function alphabetical(str) {

    let temp = (str.split("")).sort();

    return temp;
}
// console.log(alphabetical('webmaster'));

/** ------------------------------------------------------------
 * 5. captitalize first letter
 */

function capitalize(str) {
    strArr = str.split(" ");

    temp = [];

    strArr.forEach((value, index, array) => {
        temp.push(value.charAt(0).toUpperCase() + value.slice(1));
    });

    return temp.join(" ");

}
// console.log(capitalize('the quick brown fox'));

/** ------------------------------------------------------------
 * 6. longest word in string
 */

function longestW(str) {
    strArr = str.split(" ");

    let longest = 0;

    for (let i = 1; i < strArr.length; i++) {
        if (strArr[longest].length < strArr[i].length) {
            longest = i;
        }
    }

    return strArr[longest];

}

// console.log(longestW('Web Development Tutorial'));

/** ------------------------------------------------------------
 * 7. counts all vowels
 */

function countVowel(str) {
    arr = str.toLowerCase().split("");

    counter = 0;

    for (let item of arr) {
        for (let letter of ['a', 'e', 'i', 'o', 'u']) {
            if (item == letter) {
                counter++;
            }
        }
    }

    return counter;
}

// console.log(countVowel('The quick brown fox'));

/** ------------------------------------------------------------
 * 8. prime number
 */

function primeNumber(num) {
    if ((num % 2 === 0 && num !== 2) || num <= 1) {
        return false;
    }

    const limit = Math.floor(Math.sqrt(num));

    for (let index = 3; index <= limit; index += 2) {
        if (num % index === 0) {
            return false;
        }
    }

    return true;
}
// console.log(primeNumber(13));

/** ------------------------------------------------------------
 * 9. return type
 */

function getType(arg) {
    return typeof arg;
}
// let variable;
// console.log(getType(34));
// console.log(getType({}));
// console.log(getType('34'));
// console.log(getType(variable));
// console.log(getType(true));
// console.log(getType(()=>{}));

/** ------------------------------------------------------------
 * 10. make matrix based on 'n', rows by cols
 */
function makeMatrix(n) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n);

        for (let j = 0; j < n; j++) {
            arr[i][j] = 0;
        }
    }

    return arr;
}
// console.log(makeMatrix(3));

/** ------------------------------------------------------------
 * 11. second lowest and second greatest numbers
 */
nums = [1, 2, 3, 4, 5];
function secLowHigh(list) {
    newList = [];
    newList = list.sort((a, b) => a - b);

    lowest = [];

    lowest.push(newList.slice(1, 2)[0]);
    lowest.push(newList.slice(-2, newList.length - 1)[0]);

    return lowest;
}

// console.log(secLowHigh(nums));
/** ------------------------------------------------------------
 * 12. perfect number
 */

function perfectNum(num) {
    list = []; // to be added up to the total of num
    for (let i = 1; i < num; i++) {
        if ((num % i) > 0) { }
        else {
            list.push(i);
        }
    }

    total = 0;

    for (let number of list) {
        total += number;
    }

    // console.log('total', total);

    if (num == total) {
        return true;
    } else {
        return false;
    }
}

// for(let i = 0; i < 500; i++){
//     if(perfectNum(i)){
//         console.log('perfect num: ', i);
//     }
// }
// console.log(perfectNum(7));

/** ------------------------------------------------------------
 * 13. factors of the number
 */

function factorsOf(num) {
    list = []; // to be added up to the total of num
    for (let i = 1; i < num; i++) {
        if ((num % i) > 0) { }
        else {
            list.push(i);
        }
    }
    return list;
}
// console.log(factorsOf(21));

/** ------------------------------------------------------------
 * 14. factors of the number
 */

function numOfCoins(num) {
    let coins = [25, 10, 5, 2, 1];

    total = num;

    coins = [];

    do {
        if (total > 25) {
            total -= 25;
            coins.push("25");
        } else {
            if (total > 10) {
                total -= 10;
                coins.push("10");
            }
            else {
                if (total > 5) {
                    total -= 5;
                    coins.push("5");
                }
                else {
                    total -= 1;
                    coins.push("1");
                }
            }
        }

    } while (total > 0);

    return coins;
}
// console.log(numOfCoins(46));

/** ------------------------------------------------------------
 * 15. raise exponent
 */

function exponentOf(b, n) {
    return Math.pow(b, n);
}

// console.log(exponentOf(2,3));

/** ------------------------------------------------------------
 * 16. unique characters
 */

function unique(str) {
    base = str.split("");
    arr = new Set();

    arrlength = base.length;
    temp = "";

    for (let i = 0; i < arrlength; i++) {
        if (arr.has(base[i])) { } else {
            arr.add(base[i]);
        }
    }

    arr.forEach((value) => {
        temp += value;
    })

    return temp;
}

// console.log(unique('thequickbrownfoxjumpsoverthelazydog'));

/** ------------------------------------------------------------
 * 17. number of occurrences in the specified string
 */

function numOfOccur(str) {
    arr = str.split("");
    // occurr = new Set();
    occurr = {};

    for (let i = 0; i < arr.length; i++) {
        if (occurr.hasOwnProperty(arr[i])) {
            occurr[arr[i]] += 1;
        } else {
            occurr[arr[i]] = 1;
        }
    }

    return occurr;
}
// console.log(numOfOccur('sswwwee333ffkkk'));

/** ------------------------------------------------------------
 * 18. binary search a javscript array
 */

function binarySearch(list, search) {
    let sorted = list.sort((a, b) => a - b);

        length = sorted.length - 1;

        middle = Math.floor(length / 2);

        if(search == sorted[middle]){
            return true;
        }

        if(search > sorted[middle]){
            return binarySearch(sorted.slice(middle +1, sorted.length),search);
        }

        if(search < sorted[middle]){
            return binarySearch(sorted.slice(0, middle),search);
        }

        return false;
}

// console.log(binarySearch([2, 4, 6, 8, 10, 12, 14, 16, 18], 6));

/** ------------------------------------------------------------
 * 19. returns elements larger than int
 */

function largerNumber(num, list){

    temp = [];

    for(let i of list){
        if(i > num){
            temp.push(i);
        }
    }

    return temp;
}

// console.log(largerNumber(2, [1,2,3,7,9,11,45])); G^xcW@dl

/** ------------------------------------------------------------
 * 20. generate string of specified length from random characters
 */

function generateID(len) {
    let characters =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    arr = characters.split("");

    temp = "";

    for(let i = 0; i < len; i++){
        temp += arr[Math.floor(arr.length * Math.random())];
    }

    return temp;
}

// console.log(generateID(10));

/** ------------------------------------------------------------
 * 21. get all possible subsets with fixed length combinations in an array
 */
function possibleSubsets(list, len){

    temp = [];

    list.forEach((value, index, array) => {

    })

    return list;
}
// console.log(possibleSubsets([4,2,5,6]));


/** ------------------------------------------------------------
 * 22. count occurrences of letter in string 
 * 
 * @todo :: FINISH ------- MUST
 */

function letterOccurences(str, letter){
    arr = str.split("");

    count = 0;

    for(let item of arr){
        if(letter == item )
            count++;
    }

    return count;
}

// console.log(letterOccurences('microsoft.com', 'o'));

/** ------------------------------------------------------------
 * 23. find first not repeated letter 
 */

function notRepeated(str){
    // arr = str.split("");
    arr = str.split("");

    for(let item of arr){
        if(arr.lastIndexOf(item) == arr.indexOf(item))
        return item;
    }

    return null;
    
    
    // return false;
}

// console.log(notRepeated('abacddbecefffewarawbarw'));

/** ------------------------------------------------------------
 * 24. bubble sort 
 */
//takes a list, compares each adjacent item and swap if they are in wrong order

function bubbleSort(arr){

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[i] > arr[j]){

            } else {
               [arr[i], arr[j]] = [arr[j], arr[i]]; //swapped
            }
        }
    }

    return arr;
}
// console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

/** ------------------------------------------------------------
 * 25. longest country in list
 */

function longestCountry(list){
    longest = 0;

    for (let i = 0; i < list.length; i++) {
        if(list[i] < list[i +1]){
            longest = i +1;
        };
    }

    return list[longest];
}

// console.log(longestCountry(["Australia", "United States of America", "Germany" ]));

/** ------------------------------------------------------------
 * 26. longest substring in a given string without repeating characters
 */

/** ------------------------------------------------------------
 * 27. returns longest palindrome in a given string
 */

/** ------------------------------------------------------------
 * 28. function that pass a javascript function as parameter
 */

/** ------------------------------------------------------------
 * 29. function that gets function name
 */