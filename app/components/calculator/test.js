var a = '52a';

var rgx = /[0-9]/;

console.log(rgx.test(a));

for (let i = 0; i < a.length; i++) {
	console.log(a[i]);
}

console.log('we made it');