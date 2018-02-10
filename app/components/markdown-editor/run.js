 var replace = require('@stdlib/string/replace');


var x;

function reMakeText (text) {
	const hash = {};
	var startIndex;
	var st;
	var en;
	var bigE;
	var key;
	var data;
	var newText;
	var section;

	newText = text;
	startIndex = 0;
	while (text.indexOf('START:', startIndex) != -1 ) {
		// We start on the first match
		st = text.indexOf('START:', startIndex);
		en = text.indexOf('-->', st);
		bigE = text.indexOf('END', st);

		key = text.substr(st + 6, en + 3 - st - 6);
		data = text.substr(en + 3, bigE - 1 - en - 3);
		section = text.substr(st, bigE + 3 - st);
		
		console.log(key);
		hash[key] = data;
		// console.log(data.substr(0, 10));
		console.log('this is the key');
		console.log(key);
		newText = replace( newText, section, key );
	
		// Update startIndex
		startIndex = bigE + 3;
	}
	return {'text': newText, 'hash': hash};
}

var x = `The start and the end will be outside of the comment.

START:<!--IMAGE_yV4vrb-->
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"><img src="data:image/png;base64,A51wUqqCGFtPAAAAAElFTkSuQmCC" style="display: block; margin: 0 auto;" />
END

START:<!--IMAGE_wrct98-->
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"><img src="data:image/png;base64,sdcklasdmlkcmasdQmCC" style="display: block; margin: 0 auto;" />
END

This is the end. Mic drop.`;

var out = reMakeText(x);

console.log(out);

console.log(x[222]);
console.log(x.length);