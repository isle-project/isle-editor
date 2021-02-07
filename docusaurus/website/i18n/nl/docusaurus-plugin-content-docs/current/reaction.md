---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Toont verschillende componenten afhankelijk van de acties van de gebruiker.

## Options

* __actionID__ | `string (required)`: ID van het te bekijken onderdeel. Default: `none`.
* __show__ | `(object|function)`: hash tabel van componenten om weer te geven gegeven de verschillende reacties (als er geen `toets` overeenkomt met het antwoord, zal de waarde die overeenkomt met de `default` toets worden weergegeven indien ingesteld) of een functie die een component weer te geven (enige argument van de functie is het laatste resultaat). Default: `{}`.


## Examples

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

