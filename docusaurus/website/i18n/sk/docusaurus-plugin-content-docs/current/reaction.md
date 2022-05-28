---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Zobrazuje rôzne komponenty v závislosti od akcií používateľa.

## Možnosti

* __actionID__ | `string (required)`: ID sledovaného komponentu. Default: `none`.
* __banner__ | `node`: vlastná správa zobrazená, ak používateľ ešte nevykonal akciu. Default: `none`.
* __show__ | `(object|function)`: hashová tabuľka komponentov, ktoré sa majú zobraziť vzhľadom na rôzne odpovede (ak odpovedi nezodpovedá žiadny kľúč `key`, zobrazí sa hodnota zodpovedajúca predvolenému kľúču `default`, ak je nastavený) alebo funkcia, ktorá vráti komponent, ktorý sa má zobraziť (jediným argumentom funkcie je posledný výsledok). Default: `{}`.


## Príklady

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

