let a = 'abcdefghijkl';

// get substring(a, b) from index a to index b
let a_substring = a.substring(3, 6)
console.log(a_substring)

// get substr(a, b) startinf at index a for length b
let a_substr = a.substr(3, 6)
console.log(a_substr)

// split
let b = '08:32:45-563454'
let [b_time, b_nanos] = b.split('-')
console.log('time:', b_time)
console.log('nanos:', b_nanos)
let [b_hour, b_min, b_sec] = b_time.split(':')
console.log('b_hour: ', b_hour)
console.log('b_min: ', b_min)
console.log('b_sec: ', b_sec)

// slice - similar to substring... with some distinctions...
// don't need to remember these but check this link if interested:
// https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
let c = 'abcdef'
console.log(c.slice(2,4))

// search
let d = 'The cat in the hat sat on the mat and went "scat scat scat!"'
console.log('search')
console.log(d.search('cat'))
console.log(d.search('Cat'))		// -1 : case sensitive
console.log(d.search('scat'))
console.log(d.search('dat'))		// -1 : no dat in da string doe

// replace
d = d.replace('cat', 'shat')
console.log('replace')
console.log(d)
console.log(d.search('scat'))
console.log(d.search('cat'))	// now finding cat in scat
d = d.replace('scat', 'fat')	// only replaces first found instance
console.log(d)

// join and concat
e = [1,2,3].join([4,5,6])		// returns new string
f = [1,2,3].concat([4,5,6])	// returns new array
console.log(e, '\t\t', typeof(e))
console.log(f, '\t\t', typeof(f))

// Some ES10? bullshit
let badString = "         some text      ";
console.log('[', badString.trimStart(), ']');
console.log('[', badString.trimEnd(), ']');

// pad with specified text until string is desired length
let arbString = 'text';
console.log(arbString.padStart(10, '#'));
console.log(arbString.padEnd(10, '#'));
console.log(arbString.padEnd(11, 'yolo'));

