# Word Cloud

A word cloud component built on top of [d3-cloud](https://github.com/jasondavies/d3-cloud).

#### Example:

```js
<WordCloud data={[
	'This is my holiday', 
	'Breakfast is great', 
	'My house is my castle', 
	'A castle for a kingdom', 
	'I am longing for breakfast',
	'Having rolls for breakfast is a must',
	'A horse for a kingdom',
	'Mom like rolls',
	'Orange juice is fine',
	'Where is the butter',
	'I am looking for a spoon',
	'Coffee for coffee drinkers',
	'Tea for the sleepy ones',
	'The sleepy, sloppy, crazy King lives in a castle',
	'A house for everybody'
]} />
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/word-cloud/)

#### Options:

* __data__ | `array`: either an array of texts from which to generate the word cloud or, if `precalculated` is set to `true`, and array of word count objects (with `text` and `value` keys). Default: `[]`.
* __font__ | `(string|function)`: accessor function specifying the font face for each word. Also accepts a constant instead of a function. Default: `'serif'`.
* __fontSizeMapper__ | `function`: accessor function indicating the font size for each word. Defaults to `( count - min ) / ( max - min ) * 36.0 + 14.0`, where `min` and `max` denote the minimum and maximum word `counts`, respectively. Default: `none`.
* __height__ | `number`: height of the word clloud (in px). Default: `600`.
* __language__ | `string`: language identifier (determines the stopwords to be removed). Default: `'en'`.
* __minCount__ | `number`: if set, only include words that appear more than `minCount` times in the given data. Default: `none`.
* __saveButton__ | `boolean`: controls whether to display a button for saving the word cloud as an image. Default: `true`.
* __onClick__ | `function`: callback function invoked when a word on the word cloud is clicked. Default: `onClick() {}`.
* __padding__ | `(function|number)`: accessor function or constant indicating the numerical padding for each word. Default: `5`.
* __precalculated__ | `boolean`: controls whether the word cloud expects an array of precalculated word counts or will generate them for given texts. Default: `false`.
* __rotate__ | `(function|number)`: accessor function indicating the rotation angle (in degrees) for each word. Also accepts a constant instead of a function. Default: `word => word.value % 360`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __width__ | `number`: width of the word cloud (in px). Default: `700`.
