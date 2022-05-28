---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Visar olika komponenter beroende på användarens åtgärder.

## Alternativ

* __actionID__ | `string (required)`: ID för den komponent som ska bevakas. Default: `none`.
* __banner__ | `node`: Anpassat meddelande som visas om användaren ännu inte har utfört åtgärden.. Default: `none`.
* __show__ | `(object|function)`: hashtabell med komponenter som ska visas med tanke på de olika svaren (om ingen "nyckel" matchar svaret visas värdet som motsvarar "standardnyckeln" om den är inställd) eller en funktion som returnerar en komponent som ska visas (funktionens enda argument är det senaste resultatet).. Default: `{}`.


## Exempel

```jsx live
<div>
	<NumberQuestion
		question="What is the first prime number?"
		id="question-with-reaction"
	/>
	<Reaction actionID="question-with-reaction" show={( answer ) => {
		if ( answer === 2 ) {
			return <p>Awesome, that was correct.</p>
		}
		return <p>You might want to review the following video on prime numbers:
			<VideoPlayer url="https://www.youtube.com/watch?v=mIStB5X4U8M" />
		</p>;
	}} />
</div>
``` 

