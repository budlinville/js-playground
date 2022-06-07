console.log('Array Destructuring');
let arr = [5,4,2,6,1];
let [a, b, ...c] = arr;
console.log('a', a);
console.log('b', b);
console.log('c', c);

console.log('Dont care abut them first two elements')
let [,, ...d] = arr;
console.log('d', d)

console.log('Object destructuring');
let obj = {
	a: 'a',
	b: 'b',
	c: 'c',
	d: 'd',
	e: 'e',
};

const foo = ({e,d,c,b,a}) => {
	console.log('normal object destructuring');
	console.log('e', e);
	console.log('d', d);
	console.log('c', c);
	console.log('b', b);
	console.log('a', a);
}
foo(obj)

const bar = (o) => {
	console.log('Renaming variables with object destructuring')
	const {a: x, b: xx, c: xxx, d: xxxx, e: xxxxx} = o;
	console.log('x', x);
	console.log(xx);
	console.log(xxx);
	console.log(xxxx);
	console.log(xxxxx);
}

bar(obj)
