---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Afișează diferite componente în funcție de acțiunile utilizatorului.

## Opțiuni

* __actionID__ | `string (required)`: ID-ul componentei de urmărit. Default: `none`.
* __banner__ | `node`: mesaj personalizat afișat în cazul în care utilizatorul nu a efectuat încă acțiunea respectivă. Default: `none`.
* __show__ | `(object|function)`: tabel hash cu componentele care trebuie afișate în funcție de diferitele răspunsuri (dacă nicio `key` nu corespunde răspunsului, se va afișa valoarea corespunzătoare cheii `default`, dacă este setată) sau o funcție care returnează o componentă care trebuie afișată (singurul argument al funcției este ultimul rezultat).. Default: `{}`.


## Exemple

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

