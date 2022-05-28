---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Viser forskellige komponenter afhængigt af brugerens handlinger.

## Indstillinger

* __actionID__ | `string (required)`: ID på den komponent, der skal overvåges. Default: `none`.
* __banner__ | `node`: brugerdefineret meddelelse, der vises, hvis brugeren endnu ikke har udført handlingen. Default: `none`.
* __show__ | `(object|function)`: hashtabel med komponenter, der skal vises i forhold til de forskellige svar (hvis ingen `key` matcher svaret, vises værdien svarende til `default`-nøglen, hvis den er indstillet) eller en funktion, der returnerer en komponent, der skal vises (eneste argument for funktionen er det seneste resultat). Default: `{}`.


## Eksempler

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

