// Callbacks - the OG
const someAsyncFoo = (secs, cb) => {
	setTimeout(
		() => cb(secs),
		secs * 1000
	);
};

someAsyncFoo(2, sec => console.log(`${sec} seconds have passed`));

// Promises - bit newer
const someAsyncBar = secs => {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(secs)
		}, secs * 1000);
	});
	return promise;
};

someAsyncBar(2)
	.then( res => {
		console.log(`${res} seconds have passed`);
		return res;
	})
	// can daisy chain these bad boys
	.then ( res2 => {
		console.log(`Indeed, ${res2} seconds have passed`);
	})
	.catch( err => {
		console.log(err);
	});

// async/await - the magic
// Still using promises in the background... basically just wraps everything below the 'await' line of code in a "then" clause
// So the CALLED function will still return a promise
// But the CALLING function will use the async/await syntax
const asyncCallingBaz = async secs => {
	const res = await someAsyncBar(secs);
	console.log(`${res} seconds have passed`);
};

asyncCallingBaz(2);
