---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Näitab erinevaid komponente sõltuvalt kasutaja tegevusest.

## Valikud

* __actionID__ | `string (required)`: Jälgitava komponendi ID. Default: `none`.
* __banner__ | `node`: kohandatud sõnum, mis kuvatakse, kui kasutaja ei ole veel tegevust sooritanud.. Default: `none`.
* __show__ | `(object|function)`: erinevate vastuste puhul kuvatavate komponentide hash-tabel (kui vastus ei vasta "võtmele", siis kuvatakse "vaikimisi" võtmele vastav väärtus, kui see on määratud) või funktsioon, mis tagastab kuvatava komponendi (funktsiooni ainus argument on viimane tulemus).. Default: `{}`.


## Näited

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

