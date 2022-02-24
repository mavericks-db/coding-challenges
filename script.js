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
