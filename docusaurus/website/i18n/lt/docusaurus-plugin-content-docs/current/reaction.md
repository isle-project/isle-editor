---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Atsižvelgiant į naudotojo veiksmus, rodomi skirtingi komponentai.

## Parinktys

* __actionID__ | `string (required)`: Stebimo komponento ID. Default: `none`.
* __banner__ | `node`: pasirinktinis pranešimas, rodomas, jei naudotojas dar neatliko veiksmo.. Default: `none`.
* __show__ | `(object|function)`: komponentų, kuriuos reikia rodyti atsižvelgiant į skirtingus atsakymus, hash lentelė (jei atsakymo raktas `key` neatitinka atsakymo, bus rodoma reikšmė, atitinkanti `default` raktą, jei jis nustatytas) arba funkcija, grąžinanti rodomą komponentą (vienintelis funkcijos argumentas yra naujausias rezultatas).. Default: `{}`.


## Pavyzdžiai

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

