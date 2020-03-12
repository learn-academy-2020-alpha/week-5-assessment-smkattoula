// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.





var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const convertStrToNum = (str) => {
    return str.replace(/[a]/gi, "4").replace(/[e]/gi, "3").replace(/[i]/gi, "1").replace(/[o]/gi, "0")
}
console.log(convertStrToNum(secretCodeWord1))
console.log(convertStrToNum(secretCodeWord2))
// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.





var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const returnLetterA = (arr) => {
    return arr.filter(value => value.match(/[a]/gi))
}
console.log(returnLetterA(arrayOfWords))




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.





var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false

 
 const fullHouse = (array) => {
     if (threeOfAKind === true && pair === true)
        return false;
        // if threeOfAKind === true && pair === true
}
  const pair = (array) => {
        for (let i = 0; i < array.length; i++) {
            let count = 1;
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] == array[j])
                    count++;
            }
            if (count == 2)
                return true;
        }
        return false;
    }
 
 
 const threeOfAKind = (array) => {
        for (let i = 0; i <= 3; i++) {
            let count = 1;
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] == array[j])
                    count++;
            }
            if (count == 3)
                return true;
        }
        return false;
    }

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))

// Console log is returning undefined for this one :(. Had a real hard time with this one. First thought to use array.from(new Set.Array) to find duplicates in the array, but couldn't figure out how to check for three of a kind and pairs. 
// The logic above was from google and I don't quite understand it. Could we go over this problem in class? 