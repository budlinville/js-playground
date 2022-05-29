// spread operator
const foobizzle = (a,b,c) => console.log(`${a} - ${b} - ${c}`)
const fooArr = [55,44,22, 5];
foobizzle(...fooArr)

// rest paramaters
const foobazzle = (a,b, ...theRest) => {
	console.log(`${a}...${b}...${theRest}`)
}
const fooArr2 = [1,2,3,4,5,6,7]
foobazzle(...fooArr2)