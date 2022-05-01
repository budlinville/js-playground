console.log(Math.E)

console.log(Math.LN2)

console.log(parseInt('127093871209'))
console.log(parseInt('127093871209adfa'))	// still works.. ignores numbers
console.log(parseInt('1270d93ae871agda209'))	// returns 1270 for relatively obvious reasons
console.log(parseInt('abcece127093adae871209'))	// returns NAN : has to at least start with a number
console.log(parseInt('127093871209271903487019248902'))
console.log(parseInt('12709387120912847120948092184091289048120924312412940812490128409192091290438129048901284901280'))	// can't break this.. just uses scientific notation