---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Mostra diversi componenti a seconda delle azioni dell'utente.

## Options

* __actionID__ | `string (required)`: ID del componente da guardare. Default: `none`.
* __show__ | `(object|function)`: tabella hash dei componenti da visualizzare date le diverse risposte (se nessun `tasto` corrisponde alla risposta, il valore corrispondente al `default` sarà visualizzato se impostato) o una funzione che restituisce un componente da visualizzare (l'unico argomento della funzione è l'ultimo risultato). Default: `{}`.


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

