---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Zeigt je nach Benutzeraktion unterschiedliche Komponenten an.

## Optionen

* __actionID__ | `string (required)`: ID der zu überwachenden Komponente. Default: `none`.
* __banner__ | `node`: Benutzerdefinierte Meldung, die angezeigt wird, wenn der Benutzer die Aktion noch nicht ausgeführt hat. Default: `none`.
* __show__ | `(object|function)`: Hash-Tabelle der Komponenten, die aufgrund der verschiedenen Antworten angezeigt werden sollen (wenn kein `Schlüssel` mit der Antwort übereinstimmt, wird der Wert angezeigt, der dem `Standard`-Schlüssel entspricht, falls er gesetzt ist) oder eine Funktion, die eine anzuzeigende Komponente zurückgibt (einziges Argument der Funktion ist das letzte Ergebnis). Default: `{}`.


## Beispiele

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

