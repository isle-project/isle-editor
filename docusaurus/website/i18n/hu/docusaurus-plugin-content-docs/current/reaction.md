---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

A felhasználó műveleteitől függően különböző komponenseket jelenít meg.

## Opciók

* __actionID__ | `string (required)`: A megfigyelendő komponens azonosítója. Default: `none`.
* __banner__ | `node`: egyéni üzenet jelenik meg, ha a felhasználó még nem hajtotta végre a műveletet. Default: `none`.
* __show__ | `(object|function)`: a különböző válaszok alapján megjelenítendő komponensek hash táblázata (ha nincs a válasznak megfelelő "kulcs", akkor az "alapértelmezett" kulcsnak megfelelő érték jelenik meg, ha be van állítva) vagy egy függvény, amely visszaadja a megjelenítendő komponenst (a függvény egyetlen argumentuma a legutóbbi eredmény).. Default: `{}`.


## Példák

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

