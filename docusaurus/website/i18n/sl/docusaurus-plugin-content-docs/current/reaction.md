---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Prikaže različne komponente glede na dejanja uporabnika.

## Možnosti

* __actionID__ | `string (required)`: ID komponente, ki jo želite spremljati. Default: `none`.
* __banner__ | `node`: sporočilo po meri, ki se prikaže, če uporabnik še ni izvedel dejanja.. Default: `none`.
* __show__ | `(object|function)`: hash tabela komponent, ki se prikažejo glede na različne odgovore (če noben `ključ` ne ustreza odgovoru, se prikaže vrednost, ki ustreza `privzetemu` ključu, če je nastavljen) ali funkcija, ki vrne komponento za prikaz (edini argument funkcije je zadnji rezultat).. Default: `{}`.


## Primeri

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

