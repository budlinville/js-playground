let tests = [
	"[({})]",
	"{[(])}",
	"{[}",
	"{a{s{dg]}a)}d}",
	"{[((){}([]))]}",
	"{]}"
];

const map = {
	'[': ']',
	'{': '}',
	'(': ')'
};

const isBalanced = str => {
	let stack = [];

	for (let i = 0; i < str.length; i++) {
		if (str[i] in map) {
			stack.push(map[str[i]]);
		} else if (Object.values(map).includes(str[i])) {
			if (str[i] == stack[stack.length - 1]) {
				stack.pop();
			} else {
				return false;
			}
		}
	}
	return stack.length == 0
};

tests.forEach(val => console.log(isBalanced(val)));