// Challenge #1 A Very Big Sum

function aVeryBigSum(ar) {
    // Other solution
    // let sum = 0;
    // for (let i = 0; i < ar.length; i++) {
    //     sum += ar[i];
    // } return sum;
    const reducer = (x, y) => x + y;
    return ar.reduce(reducer);
}

// Challenge #2 Plus Minus
function plusMinus(arr) {
    let pos = arr.filter(x => x > 0);
    let posN = pos.length / arr.length;

    let neg = arr.filter(x => x < 0);
    let negN = neg.length / arr.length;

    let zer = arr.filter(x => x == 0);
    let zerN = zer.length / arr.length;

    console.log(posN.toFixed(6));
    console.log(negN.toFixed(6));
    console.log(zerN.toFixed(6));
}

// Challenge #3 Staircase
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        console.log(" ".repeat(n - i) + "#".repeat(i));
    }

    // Other solution
    // let result = "";
    // for (let i = 1; i <= n; i++) {
    //     for (let spaces = n - i; spaces >= 0; spaces--) {
    //         result += " ";
    //     } 
    //     for (let height = 1; height <= i; height++) {
    //         result += "#";
    //     }

    //     if (i == n) {
    //         break;
    //         } else {
    //         result += "\n";                
    //     }
    //     }
    // console.log(result);
}

// Challenge #4 Birthday Cake Candles
function birthdayCakeCandles(candles) {
    const max = Math.max(...candles);
    let counter = 0;

    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == max) {
            counter++;
        }
    }
    return counter;
}

// Challenge #5 Breaking the Records
function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];

    let minCount = 0;
    let maxCount = 0;

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        } else if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
    }
    return [maxCount, minCount];
}

// Challenge #6 Bon Appetit
function bonAppetit(bill, k, b) {
    let takeout = bill.splice(k, 1); //need to remove the item first for bactual
    let breduced = bill.reduce((a, b) => (a + b));
    let bactual = breduced / 2;

    if (b == bactual) {
        console.log("Bon Appetit");
    } else {
        console.log(b - bactual);
    }
}

// Challenge #7 Cats and a Mouse
function catAndMouse(x, y, z) {
    if (Math.abs(x - z) == Math.abs(y - z)) {
        return "Mouse C";
    } else if (Math.abs(x - z) < Math.abs(y - z)) {
        return "Cat A";
    } else {
        return "Cat B";
    }
}

// Challenge #8 The Hurdle Race
function hurdleRace(k, height) {
    let dose = Math.max(...height) - k;
    if (dose <= 0) {
        return 0;
    } else {
        return dose;
    }
}

// Easy Coding Challenge #1 Sum All Numbers in a Range
function sumAll(arr) {
    if (arr[0] > arr[1]) {
      [arr[0], arr[1]] = [arr[1], arr[0]]
  }

  let lowerL = arr[0];
  let upperL = arr[1];
  let sum = 0;

  for (let i = lowerL; i <= upperL; i++) {
      sum += i;
  }
    return sum;

    //Other solution
    // let sum = 0;
    // for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {    
    //     sum += i;
    // }
    // console.log(sum);
}

sumAll([1, 4]);

// Easy Coding Challenge #2 Seek and Destroy
function destroyer(arr) {
    let remainElem = [];
    let removeElem = Object.values(arguments).splice(1);
    let newArr = Object.values(arguments)[0];
    for (let i = 0; i < newArr.length; i++) {
        let ar = newArr[i];
        if (removeElem.indexOf(ar) === -1) {
            remainElem.push(ar);
        }
    }
    return remainElem;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Easy Coding Challenge #3 Pig Latin
function translatePigLatin(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let index = 0;

    if (vowels.includes(str[0])) {
        return str + "way";
    } else {
        for (let i of str) {
            if (vowels.includes(i)) {
                index = str.indexOf(i);
                break;
            }
        }
        return str.slice(index) + str.slice(0, index) + "ay";
    }
}

translatePigLatin("consonant");

// Easy Coding Challenge #4 DNA Pairing
function pairElement(str) {
    let splitStr = str.split("");
    let arr = [];

    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i] == "G") {
            arr[i] = ["G", "C"];
        } else if (splitStr[i] == "C") {
            arr[i] = ["C", "G"];
        } else if (splitStr[i] == "A") {
            arr[i] = ["A", "T"];
        } else if (splitStr[i] == "T") {
            arr[i] = ["T", "A"];
        }
    } return arr;
}

pairElement("GCG");

// Easy Coding Challenge #5 Convert HTML Entities
function convertHTML(str) {
    let splitStr = str.split('');
    for (let i = 0; i < splitStr.length; i++) {
        switch (splitStr[i]) {
            case "&":
                splitStr[i] = "&amp;";
                break;
            case "<":
                splitStr[i] = "&lt;";
                break;
            case ">":
                splitStr[i] = "&gt;";
                break;
            case "'":
                splitStr[i] = "&apos;"
                break;
            case '"':
                splitStr[i] = "&quot;"
                break;
        }
    }
    return splitStr.join('');
}

convertHTML("Dolce & Gabbana");

// Easy Coding Challenge #6 Sum All Primes
function sumPrimes(num) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }

    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            sum += i;
    }
    return sum;
}
sumPrimes(10);

