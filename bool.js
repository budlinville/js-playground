// all Falsey values
console.log(!!0)
console.log(!!-0)
console.log(!!null)
console.log(!!"")
console.log(!!false)
console.log(!!undefined)
console.log(!!NaN)

console.log('-------')

// some truthy values
console.log(!!'a')
console.log(!!{})
console.log(!![])
console.log(!!1)

// logical operators
/*
	In other languages, these operators will return true or false;
	In javascript, they ALWAYS return one of the operands
*/

console.log('-------')

// For boolean logic, this behaves as expected
console.log(true || true)
console.log(true || false)
console.log(false || false)

console.log('-')

console.log(true && true)
console.log(true && false)
console.log(false && false)

console.log('-')

console.log(5 == '5' || 3 == '4')
console.log(5 == '5' && 3 == '4')

console.log('-')

// now with ====
console.log(5 === '5' || 3 === '4')
console.log(5 === '5' && 3 === '4')

console.log('-------')

// But these operators prove more powerful in javascript
const pseduoApiCall = () => {
	return Math.random() < 0.5 ? { someJsonField: "some value returned from server"} : null;
}

// Evaluates value as truthy or falsy and then returns either the first or second operand accordingly
console.log(pseduoApiCall() || "Server Error")
console.log(pseduoApiCall() || "Server Error")
console.log(pseduoApiCall() || "Server Error")
console.log(pseduoApiCall() || "Server Error")

console.log(pseduoApiCall() && "SUCCESS")
console.log(pseduoApiCall() && "SUCCESS")
console.log(pseduoApiCall() && "SUCCESS")
console.log(pseduoApiCall() && "SUCCESS")

console.log('-')

// && : Basically just returns the last truthy value if all are true; false otherwise
// || : Bascially just returns the first truthy value if it exists; false otherwise
console.log(true && true && true && true && "Hey there")
console.log(false || false || false || false || "Hey there")
console.log(false && "HEY")
console.log(false || false || "SICKKKKK" || false || "Hey there")