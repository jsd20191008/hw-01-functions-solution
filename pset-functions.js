/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line
function blackJack (playerCardScore, dealerCardScore) {
  if (playerCardScore > 21 && dealerCardScore > 21) {
    return 0
  } else if (playerCardScore > 21) {
    return dealerCardScore
  } else if (dealerCardScore > 21) {
    return playerCardScore
  } else {
    return Math.max(playerCardScore, dealerCardScore)
  }
}

console.log(blackJack(21, 17))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 2:')

// Add your code below this line

function wordCounter (phrase) {
  const phraseWords = phrase.split(' ')
  const wordMapObj = {} // object that we'll use to keep track of word occurences

  phraseWords.forEach((word) => {
    /* Plan
      1. check of word is already in wordMapObj
       - if word is not in wordMapObj then add it as a key and set value to 1
       - if word is already in wordMapObj then then increment value of word (key) by 1
    */

    if (wordMapObj[word] === undefined) {
      // word does not exist in wordMapObj
      wordMapObj[word] = 1
    } else {
      // when word already exists in wordMapObj
      wordMapObj[word] += 1
    }
  })

  return wordMapObj
}

console.log(wordCounter('olly olly in come free'))
// => { olly: 2, in: 1, come: 1, free: 1 }

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 3:')

// Add your code below this line

function scrabbleScore (word) {
  const letters = word.toUpperCase().split('')
  let sum = 0

  letters.forEach((letter) => {
    if (['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'].includes(letter)) {
      sum += 1
    } else if (['D', 'G'].includes(letter)) {
      sum += 2
    } else if (['B', 'C', 'M', 'P'].includes(letter)) {
      sum += 3
    } else if (['F', 'H', 'V', 'W', 'Y'].includes(letter)) {
      sum += 4
    } else if (['K'].includes(letter)) {
      sum += 5
    } else if (['J', 'X'].includes(letter)) {
      sum += 8
    } else if (['Q', 'Z'].includes(letter)) {
      sum += 10
    } else {
      sum += 0
    }
  })

  return sum
}

console.log(scrabbleScore('javascript'))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 4:')

// Add your code below this line

function isPalindrome (word) {
  // 1. split the word in a letters array
  const letters = word.split('')

  // 2. reverse the letters in the array
  const sortedLetters = letters.reverse()

  // 3. join the letters in the array into a string
  const reverseWord = sortedLetters.join('')

  // 4. compare word to the reverseWord
  return word === reverseWord
}

// Add your code above this line

console.log(isPalindrome('racecar'))

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 5:')

// const word = 'noon'
// let index = 0
// letters[index] // first thing
// letters[index + 1] // second thing | letters[1]

// Add your code below this line

function doubleLetters (word) {
  // create an array of letters from the provided word
  const letters = word.split('') // ['n', 'o', 'o', 'n']
  for (let index = 0; index < letters.length; index++) {
    // check if element at index is the same as
    // element at index + 1
    // check if current element is the same as
    // the next element in the array
    if (letters[index] === letters[index + 1]) {
      // as soon as we find two consecutive identical
      // letters, return true and exit function
      return true
    }
  }

  // if for loop does not return true, then return false
  return false
}

console.log(doubleLetters('rune'))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
