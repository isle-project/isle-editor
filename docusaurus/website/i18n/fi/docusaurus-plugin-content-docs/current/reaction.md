---
id: reaction 
title: Reaction
sidebar_label: Reaction
---

Näyttää eri komponentteja käyttäjän toimien mukaan.

## Vaihtoehdot

* __actionID__ | `string (required)`: Tarkkailtavan komponentin ID. Default: `none`.
* __banner__ | `node`: mukautettu viesti, joka näytetään, jos käyttäjä ei ole vielä suorittanut toimintoa.. Default: `none`.
* __show__ | `(object|function)`: hash-taulukko eri vastausten perusteella näytettävistä komponenteista (jos mikään `avain` ei vastaa vastausta, näytetään `default`-avainta vastaava arvo, jos se on asetettu) tai funktio, joka palauttaa näytettävän komponentin (funktion ainoa argumentti on viimeisin tulos).. Default: `{}`.


## Esimerkkejä

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

